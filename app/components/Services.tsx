import { Gem, Globe, Leaf, ShieldCheck } from 'lucide-react'

const advantages = [
  {
    title: 'Premium Quality',
    description: 'Only the finest marble and agricultural products sourced directly from nature.',
    icon: Gem,
  },
  {
    title: 'Trusted Supplier',
    description: 'Reliable partner for major construction projects and industrial needs.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Export',
    description: 'Experienced in shipping high-quality materials to international markets.',
    icon: Globe,
  },
  {
    title: 'Sustainable Resources',
    description: 'Committed to eco-friendly practices in mining and farming.',
    icon: Leaf,
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif">
            Company Advantages
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
