'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, Search, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import { useGetProductsQuery } from '@/lib/services/pietraApi'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace('/api', '') || 'https://cms.pasifik.my.id'

function getImageUrl(url?: string) {
  if (!url) return 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}

export default function ProdukPage() {
  const { data: response, isLoading, isError } = useGetProductsQuery()
  const strapiProducts = response?.data || []

  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [sortBy, setSortBy] = useState('Latest')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 8

  // Map Strapi products to our UI format
  const products = strapiProducts.map(p => {
    // Extract description text from Strapi rich text blocks
    let descText = ''
    if (Array.isArray(p.description)) {
      descText = p.description[0]?.children?.[0]?.text || ''
    }

    return {
      slug: p.documentId,
      title: p.name_product || 'Unnamed Product',
      category: p.pietra_product_category?.name_category || 'Natural Stone',
      description: descText,
      image: getImageUrl(p.thumbnail?.url || p.images?.[0]?.url),
      badge: null, // Strapi data might not have badge yet
      rawDate: p.createdAt
    }
  })

  const filteredProducts = products
    .filter(product => {
      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'Name A-Z') {
        return a.title.localeCompare(b.title)
      } else if (sortBy === 'Popularity') {
        return (b.badge ? 1 : 0) - (a.badge ? 1 : 0)
      }
      // Latest
      return new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()
    })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, sortBy, searchQuery])

  return (
    <main className="min-h-screen bg-stone-50">
      <Header />

      <PageHero
        title="Product Catalog"
        description="Explore our complete collection of premium marble and high-quality agricultural products."
        bgImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ label: 'Products', href: '/produk' }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Section */}
          <div className="bg-white rounded-lg p-6 mb-12 shadow-sm -mt-24 relative z-20 border border-stone-100">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Select
                  value={selectedCategory}
                  onValueChange={value => setSelectedCategory(value)}
                >
                  <SelectTrigger className="w-full lg:w-[180px] bg-white border-stone-200 focus:ring-brand-gold">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Categories">All Categories</SelectItem>
                    <SelectItem value="Natural Stone">Natural Stone</SelectItem>
                    <SelectItem value="Food Crops">Food Crops</SelectItem>
                    <SelectItem value="Plantation">Plantation</SelectItem>
                    <SelectItem value="Livestock">Livestock</SelectItem>
                    <SelectItem value="Other Resources">Other Resources</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={value => setSortBy(value)}>
                  <SelectTrigger className="w-full lg:w-[180px] bg-white border-stone-200 focus:ring-brand-gold">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Latest">Latest</SelectItem>
                    <SelectItem value="Name A-Z">Name A-Z</SelectItem>
                    <SelectItem value="Popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold w-full lg:w-64 bg-white transition-all lg:focus:w-80"
                />
                <div className="absolute left-3 top-2.5 text-stone-400">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-brand-gold" />
            </div>
          ) : isError ? (
            <div className="text-center py-20">
              <p className="text-red-500 text-lg">Failed to load products. Please try again later.</p>
            </div>
          ) : paginatedProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {paginatedProducts.map(product => (
                <Link
                  key={product.slug}
                  href={`/produk/${product.slug}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 flex flex-col"
                >
                  <div className="aspect-square bg-stone-100 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-gold text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 md:p-6 flex flex-col grow">
                    <p className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-base md:text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-stone-500 mb-6 line-clamp-2 leading-relaxed grow">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-end pt-4 border-t border-stone-100">
                      <span className="inline-flex items-center space-x-1 text-stone-400 text-xs md:text-sm font-medium group-hover:text-brand-dark transition-colors">
                        <span>View Detail</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Categories')
                }}
                className="mt-4 text-brand-gold hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors text-stone-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ←
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'blue' : 'outline'}
                    size="icon"
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-bold transition-colors ${
                      currentPage === page
                        ? 'shadow-lg shadow-brand-dark/20'
                        : 'border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors text-stone-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  →
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
