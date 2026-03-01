'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageHero from '../components/PageHero'

const products = [
  {
    slug: 'marmer-carrara-premium',
    title: 'Carrara White Premium',
    category: 'Marble',
    description: 'High-quality white marble from Italy with elegant grey veins.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller',
  },
  {
    slug: 'marmer-calacatta-gold',
    title: 'Calacatta Gold',
    category: 'Marble',
    description: 'Exclusive marble with soft gold veins for luxury interiors.',
    image:
      'https://images.unsplash.com/photo-1628592102751-ba83b03062b3?auto=format&fit=crop&q=80&w=800',
    badge: 'Premium',
  },
  {
    slug: 'granit-black-galaxy',
    title: 'Black Galaxy Granite',
    category: 'Natural Stone',
    description: 'Black granite with sparkling crystal specks, scratch and heat resistant.',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800',
    badge: 'Export Quality',
  },
  {
    slug: 'travertine-ivory-classic',
    title: 'Travertine Ivory Classic',
    category: 'Natural Stone',
    description: 'Ivory colored travertine with soft texture for walls and floors.',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
  {
    slug: 'kopi-arabika-gayo',
    title: 'Gayo Arabica Coffee',
    category: 'Plantation',
    description: 'Premium arabica coffee from Gayo highlands with floral aroma.',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    badge: 'Export Quality',
  },
  {
    slug: 'teh-hijau-premium',
    title: 'Premium Green Tea',
    category: 'Plantation',
    description: 'Selected green tea leaves with fresh taste and distinct aroma.',
    image:
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
  {
    slug: 'beras-organik-prima',
    title: 'Prima Organic Rice',
    category: 'Food Crops',
    description: 'Best quality organic rice for industrial and retail needs.',
    image:
      'https://images.unsplash.com/photo-1504309250229-4f08315f3b5c?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller',
  },
  {
    slug: 'jagung-manis-segar',
    title: 'Fresh Sweet Corn',
    category: 'Food Crops',
    description: 'Fresh sweet corn from best harvest with premium quality.',
    image:
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
  {
    slug: 'madu-hutan-liar',
    title: 'Wild Forest Honey',
    category: 'Other Resources',
    description: 'Pure wild honey harvested sustainably from deep forests.',
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
    badge: 'Organic',
  },
  {
    slug: 'susu-sapi-segar',
    title: 'Fresh Cow Milk',
    category: 'Livestock',
    description: 'Fresh cow milk processed with high hygiene standards.',
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
]

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [sortBy, setSortBy] = useState('Latest')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 8

  // Reset page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1)
  }

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
        // Simple mock sort: items with badges come first
        return (b.badge ? 1 : 0) - (a.badge ? 1 : 0)
      }
      return 0 // Latest (default order)
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

  // Effect to reset page when filters change
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
              <div className="flex flex-wrap gap-4">
                <Select
                  value={selectedCategory}
                  onValueChange={value => setSelectedCategory(value)}
                >
                  <SelectTrigger className="w-[180px] bg-white border-stone-200 focus:ring-brand-gold">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Categories">All Categories</SelectItem>
                    <SelectItem value="Marble">Marble</SelectItem>
                    <SelectItem value="Natural Stone">Natural Stone</SelectItem>
                    <SelectItem value="Food Crops">Food Crops</SelectItem>
                    <SelectItem value="Plantation">Plantation</SelectItem>
                    <SelectItem value="Livestock">Livestock</SelectItem>
                    <SelectItem value="Other Resources">Other Resources</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={value => setSortBy(value)}>
                  <SelectTrigger className="w-[180px] bg-white border-stone-200 focus:ring-brand-gold">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Latest">Latest</SelectItem>
                    <SelectItem value="Name A-Z">Name A-Z</SelectItem>
                    <SelectItem value="Popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold w-64 bg-white transition-all focus:w-80"
                />
                <div className="absolute left-3 top-2.5 text-stone-400">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {paginatedProducts.length > 0 ? (
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
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors text-stone-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ←
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                      currentPage === page
                        ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20'
                        : 'border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors text-stone-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
