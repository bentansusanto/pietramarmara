import { Apple, Beef, Leaf, Mountain, Package, TreePine } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    title: 'Marmer & Produk Batu Alam',
    description: 'Marmer premium dan batu alam berkualitas tinggi untuk interior dan eksterior',
    icon: Mountain,
    href: '/produk',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    color: 'from-stone-900/80 to-stone-800/80',
  },
  {
    title: 'Tanaman Pangan',
    description: 'Beras, gandum, jagung, dan tanaman pangan berkualitas untuk kebutuhan industri',
    icon: Package,
    href: '/produk',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800',
    color: 'from-amber-900/80 to-amber-800/80',
  },
  {
    title: 'Tanaman Perkebunan',
    description: 'Kopi, teh, kelapa sawit, dan tanaman perkebunan premium',
    icon: TreePine,
    href: '/produk',
    image:
      'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=800',
    color: 'from-green-900/80 to-green-800/80',
  },
  {
    title: 'Buah-buahan & Sayuran',
    description: 'Buah dan sayuran segar, organik, dan bebas pestisida',
    icon: Apple,
    href: '/produk',
    image:
      'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800',
    color: 'from-red-900/80 to-red-800/80',
  },
  {
    title: 'Hasil Peternakan',
    description: 'Daging, susu, telur, dan produk peternakan berkualitas',
    icon: Beef,
    href: '/produk',
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-900/80 to-orange-800/80',
  },
  {
    title: 'Hasil Alam Lainnya',
    description: 'Madu, rempah-rempah, dan produk alam lainnya',
    icon: Leaf,
    href: '/produk',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-900/80 to-emerald-800/80',
  },
]

export default function ProductCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
            Product Categories
          </h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-dark font-serif">
            Our Premium Collections
          </h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto pt-4">
            From luxury marble to high-quality agricultural produce, we provide the best nature has
            to offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="group relative block h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t ${category.color} via-brand-dark/40 to-transparent opacity-90`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{category.title}</h4>
                    <p className="text-stone-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-brand-gold font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                    <span>View Products</span>
                    <span className="transform group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
