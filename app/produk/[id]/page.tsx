'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Star, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useGetProductByIdQuery, useGetProductsQuery } from '@/lib/services/pietraApi'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace('/api', '') || 'http://127.0.0.1:1337'

function getImageUrl(url?: string, defaultSize = '&w=1200') {
  if (!url) return `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80${defaultSize}`
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}

export default function ProdukDetailPage() {
  const params = useParams()
  const id = params?.id as string

  const { data: response, isLoading, isError } = useGetProductByIdQuery(id, { skip: !id })
  const strapiProduct = response?.data

  const { data: productsResponse } = useGetProductsQuery()
  const relatedStrapiProducts = productsResponse?.data || []

  const [activeImage, setActiveImage] = useState('')

  // Map product
  let descText = ''
  if (strapiProduct && Array.isArray(strapiProduct.description)) {
    descText = strapiProduct.description[0]?.children?.[0]?.text || ''
  }

  const product = strapiProduct ? {
    id: strapiProduct.documentId,
    title: strapiProduct.name_product || 'Unnamed Product',
    category: strapiProduct.pietra_product_category?.name_category || 'Natural Stone',
    description: descText,
    image: getImageUrl(strapiProduct.thumbnail?.url || strapiProduct.images?.[0]?.url),
    rawDate: strapiProduct.createdAt
  } : null

  // Setup multiple images if available
  const images = strapiProduct?.images?.map(img => getImageUrl(img.url)) || []
  if (strapiProduct?.thumbnail && !images.includes(getImageUrl(strapiProduct.thumbnail.url))) {
    images.unshift(getImageUrl(strapiProduct.thumbnail.url))
  }
  if (images.length === 0 && product) images.push(product.image)

  useEffect(() => {
    if (images.length > 0 && !activeImage) {
      setActiveImage(images[0])
    }
  }, [images, activeImage])

  const getHighResImage = (url: string) => {
    return url.replace('&w=200', '&w=1200')
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-stone-50 flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-brand-gold" />
        </div>
        <Footer />
      </main>
    )
  }

  if (isError || !product) {
    return (
      <main className="min-h-screen bg-stone-50 flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center py-20">
          <p className="text-red-500 text-lg mb-4">Failed to load product details.</p>
          <Link href="/produk" className="text-brand-gold hover:underline">
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <img
                  src={getHighResImage(activeImage || product.image)}
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((thumb, index) => (
                    <div
                      key={index}
                      className={`aspect-square bg-stone-200 rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${
                        activeImage === thumb
                          ? 'border-brand-gold ring-2 ring-brand-gold/20'
                          : 'border-transparent hover:border-brand-gold'
                      }`}
                      onClick={() => setActiveImage(thumb)}
                    >
                      <img
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-full h-full object-cover transition-opacity ${
                          activeImage === thumb ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                        }`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  {product.category}
                </div>
                <h1 className="text-4xl font-bold text-brand-dark mb-4 font-serif">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                    ))}
                  </div>
                  <span className="text-stone-500 font-medium">(4.8/5 from 24 reviews)</span>
                </div>
                <p className="text-stone-600 leading-relaxed text-lg border-l-4 border-brand-gold pl-4">
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
                <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center">
                  <span className="w-1 h-6 bg-brand-gold rounded-full mr-3"></span>
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
                  <div>
                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">
                      Origin
                    </span>
                    <span className="text-brand-dark font-bold text-base">Italy / Global</span>
                  </div>
                  <div>
                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">
                      Material
                    </span>
                    <span className="text-brand-dark font-bold text-base">
                      {product.category}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-2">
                      Applications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Flooring', 'Wall Cladding', 'Countertops', 'Custom Design'].map(
                        app => (
                          <span
                            key={app}
                            className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-bold"
                          >
                            {app}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4">
                <Button
                  variant="blue"
                  size="lg"
                  className="w-full rounded-xl font-bold shadow-lg hover:shadow-brand-gold/20 group h-12"
                  asChild
                >
                  <Link href="/kontak">
                    <Phone className="w-5 h-5" />
                    <span>Request Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <p className="text-center text-stone-400 text-sm mt-4">
                  Contact us for custom sizes and bulk orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark font-serif mb-2">
                Related Products
              </h2>
              <p className="text-stone-500">You might also be interested in these items</p>
            </div>
            <Link
               href="/produk"
              className="text-brand-gold font-bold hover:text-brand-dark transition-colors flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {relatedStrapiProducts
              .filter(p => p.documentId !== id)
              .slice(0, 4)
              .map(item => (
                <Link
                  key={item.documentId}
                  href={`/produk/${item.documentId}`}
                  className="group bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square bg-stone-100 relative overflow-hidden">
                    <img
                      src={getImageUrl(item.thumbnail?.url || item.images?.[0]?.url, '&w=600')}
                      alt={item.name_product}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-brand-gold text-[10px] font-bold uppercase tracking-wider mb-1">
                      {item.pietra_product_category?.name_category || 'Natural Stone'}
                    </p>
                    <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-1">
                      {item.name_product}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">Need Custom Order?</h2>
          <p className="text-stone-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            We specialize in custom marble cuts and large-scale agricultural supply. Let us know
            your specific project requirements.
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-lg font-bold hover:bg-white transition-colors shadow-lg hover:shadow-brand-gold/20"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
