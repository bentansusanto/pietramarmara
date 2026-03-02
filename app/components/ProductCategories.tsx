import { Apple, Beef, Leaf, Mountain, Package, TreePine } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    title: 'Precision Slabs',
    description: 'Perfectly cut granite and marble slabs for seamless architectural integration.',
    icon: Mountain,
    href: '/produk?category=slabs',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    color: 'from-brand-dark/90 to-stone-900/80',
  },
  {
    title: 'Custom Tiles',
    description: 'Bespoke granite tiles crafted to your exact specifications and finish.',
    icon: Package,
    href: '/produk?category=tiles',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800',
    color: 'from-stone-800/90 to-stone-700/80',
  },
  {
    title: 'Architectural Stone',
    description: 'Massive stone blocks and structural elements for monumental designs.',
    icon: TreePine,
    href: '/produk?category=architectural',
    image:
      'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=800',
    color: 'from-neutral-900/90 to-neutral-800/80',
  },
  {
    title: 'Countertops',
    description: 'Durable, heat-resistant granite surfaces for ultimate kitchen luxury.',
    icon: Apple,
    href: '/produk?category=countertops',
    image:
      'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800',
    color: 'from-stone-950/90 to-stone-800/80',
  },
  {
    title: 'Exterior Paving',
    description: 'Weather-resistant granite paving for stunning landscapes and pathways.',
    icon: Beef,
    href: '/produk?category=paving',
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800',
    color: 'from-zinc-900/90 to-zinc-800/80',
  },
  {
    title: 'Artisan Carvings',
    description: 'Detailed sculptural work and custom stone art pieces by master craftsmen.',
    icon: Leaf,
    href: '/produk?category=carvings',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800',
    color: 'from-品牌-dark/90 to-brand-dark/80', // Keep brand dark
  },
]

export default function ProductCategories() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-500 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-stone-800 pb-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
              Our Capabilities
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight">
              Stone Solutions
            </h3>
            <p className="text-stone-400 font-light mt-4 text-lg">
              Comprehensive natural stone offerings tailored for distinct architectural requirements
              and visionary designs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="group relative block h-[380px] overflow-hidden rounded-sm bg-stone-900 border border-stone-800 hover:border-brand-gold transition-colors duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-dark to-transparent opacity-60 group-hover:opacity-5 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div className="w-12 h-12 rounded-full border border-stone-600 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
                    <IconComponent className="w-5 h-5 text-brand-gold" />
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-stone-400 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Minimal corner accent */}
                <div className="absolute bottom-4 right-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
