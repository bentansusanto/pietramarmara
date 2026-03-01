'use client'

import { ArrowRight, Phone, Star } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const products = [
  {
    slug: 'marmer-carrara-premium',
    title: 'Carrara White Premium',
    category: 'Marble',
    description:
      'High-quality white marble from Carrara mountains, Italy. Features smooth texture and elegant natural patterns. Suitable for interior and exterior applications with international standards.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'marmer-calacatta-gold',
    title: 'Calacatta Gold',
    category: 'Marble',
    description:
      'Exclusive marble with soft gold veins. Provides a luxurious look for floors, tables, and walls.',
    image:
      'https://images.unsplash.com/photo-1628592102751-ba83b03062b3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'granit-black-galaxy',
    title: 'Black Galaxy Granite',
    category: 'Natural Stone',
    description:
      'Black granite with sparkling crystals. Scratch and heat resistant, ideal for countertops and commercial areas.',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'travertine-ivory-classic',
    title: 'Travertine Ivory Classic',
    category: 'Natural Stone',
    description:
      'Ivory colored travertine with soft texture. Suitable for accent walls and dry area flooring.',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1200',
  },
  {
    slug: 'kopi-arabika-gayo',
    title: 'Gayo Arabica Coffee',
    category: 'Plantation',
    description: 'Premium arabica coffee from Gayo highlands with floral aroma and balanced body.',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200',
  },
]

import { useParams } from 'next/navigation'

export default function ProdukDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const product = products.find(item => item.slug === slug) || products[0]

  const [activeImage, setActiveImage] = useState(product.image)

  useEffect(() => {
    setActiveImage(product.image)
  }, [product])

  const getHighResImage = (url: string) => {
    return url.replace('&w=200', '&w=1200')
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
                  src={getHighResImage(activeImage)}
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  product.image,
                  'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&q=80&w=200',
                  'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&q=80&w=200',
                  'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=200',
                ].map((thumb, index) => (
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
                    <span className="text-brand-dark font-bold text-base">Carrara, Italy</span>
                  </div>
                  <div>
                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">
                      Color
                    </span>
                    <span className="text-brand-dark font-bold text-base">
                      White with Grey Veins
                    </span>
                  </div>
                  <div>
                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">
                      Thickness
                    </span>
                    <span className="text-brand-dark font-bold text-base">18-20mm</span>
                  </div>
                  <div>
                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">
                      Finishing
                    </span>
                    <span className="text-brand-dark font-bold text-base">Polished, Honed</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-2">
                      Applications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Flooring', 'Wall Cladding', 'Countertops', 'Bathroom', 'Facade'].map(
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
                <Link
                  href="/kontak"
                  className="w-full bg-brand-dark text-white py-5 rounded-xl hover:bg-brand-gold transition-all duration-300 flex items-center justify-center space-x-3 font-bold text-lg shadow-lg hover:shadow-brand-gold/20 group"
                >
                  <Phone className="w-5 h-5" />
                  <span>Request Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
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
            {products.slice(0, 4).map(item => (
              <Link
                key={item.slug}
                href={`/produk/${item.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-brand-gold text-[10px] font-bold uppercase tracking-wider mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-1">
                    {item.title}
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
