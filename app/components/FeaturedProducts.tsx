import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Carrara White Premium',
    category: 'Marble',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    slug: 'marmer-carrara-premium',
  },
  {
    id: 2,
    name: 'Black Marquina',
    category: 'Marble',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    slug: 'marmer-carrara-premium', // Placeholder slug
  },
  {
    id: 3,
    name: 'Statuario Classic',
    category: 'Marble',
    image:
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800',
    slug: 'marmer-carrara-premium', // Placeholder slug
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
              Exclusive Selection
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark font-serif">
              Featured Marble Products
            </h3>
            <div className="w-24 h-1 bg-brand-gold rounded-full"></div>
          </div>

          <Link
            href="/produk"
            className="group flex items-center space-x-2 text-brand-dark font-bold hover:text-brand-gold transition-colors text-sm md:text-base"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                  {product.name}
                </h4>
                <Link
                  href={`/produk/${product.slug}`}
                  className="inline-flex items-center space-x-2 text-stone-500 hover:text-brand-dark font-medium text-sm transition-colors"
                >
                  <span>View Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
