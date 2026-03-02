import { Building2, Gem, ShieldCheck, Truck } from 'lucide-react'

const advantages = [
  {
    title: 'Uncompromising Quality',
    description:
      'Every slab is meticulously inspected to ensure flawless color, veining, and structural integrity.',
    icon: Gem,
  },
  {
    title: 'Global Sourcing',
    description:
      'We maintain direct relationships with master quarries across Italy, Brazil, and India.',
    icon: Building2,
  },
  {
    title: 'Secure Transport',
    description:
      'Specialized logistics ensuring your stone arrives in pristine condition, anywhere in the world.',
    icon: Truck,
  },
  {
    title: 'Expert Consultation',
    description:
      'Our architectural stone specialists guide you in selecting the perfect material for your vision.',
    icon: ShieldCheck,
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
            The PietraMarmara Advantage
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark font-serif leading-tight">
            Excellence Set in Stone
          </h3>
          <p className="text-stone-500 text-lg mx-auto pt-4 font-light">
            We are more than suppliers; we are curators of earth's finest masterpieces, dedicated to
            elevating your architectural projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 group border-b-4 border-transparent hover:border-brand-gold"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-stone-100">
                  <IconComponent className="w-8 h-8 text-brand-dark group-hover:text-brand-gold transition-colors" />
                </div>
                <h4 className="text-xl font-bold font-serif text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                  {advantage.title}
                </h4>
                <p className="text-stone-500 font-light leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
