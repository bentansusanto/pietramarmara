import { ArrowRight, View } from 'lucide-react'
import Link from 'next/link'

const featuredProducts = [
  {
    id: 1,
    name: 'Nero Marquina',
    category: 'Exclusive Collection',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    slug: 'marmer-nero-marquina',
  },
  {
    id: 2,
    name: 'Statuario White',
    category: 'Premium Selection',
    image:
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=1200',
    slug: 'marmer-statuario-white',
  },
  {
    id: 3,
    name: 'Emerald Pearl Granite',
    category: 'Signature Stone',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    slug: 'granite-emerald-pearl',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
              Exclusive Selection
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-dark font-serif leading-tight">
              Featured Granite & Marble
            </h3>
            <p className="text-stone-500 font-light mt-4">
              Discover our most sought-after slabs, meticulously curated for architectural
              excellence.
            </p>
          </div>

          <Link
            href="/produk"
            className="group flex items-center space-x-3 text-brand-dark font-bold hover:text-brand-gold transition-colors pb-2 border-b-2 border-brand-dark hover:border-brand-gold text-sm md:text-base"
          >
            <span className="uppercase tracking-wider">View All Gallery</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredProducts.map(product => (
            <div key={product.id} className="group relative cursor-pointer">
              {/* Image Container with elegant hover */}
              <div className="relative h-[600px] overflow-hidden rounded-sm bg-stone-200 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 border border-white/50">
                    <View className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
                    {product.category}
                  </p>
                  <h4 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
                    {product.name}
                  </h4>
                </div>
                <Link
                  href={`/produk/${product.slug}`}
                  className="w-10 h-10 border border-stone-300 rounded-sm flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-colors duration-300 shrink-0"
                >
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
