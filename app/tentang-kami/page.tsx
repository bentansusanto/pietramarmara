import { CheckCircle, Factory, Globe, Truck } from 'lucide-react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageHero from '../components/PageHero'

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        title="About PietraMarmara"
        description="Our dedication to bringing nature's beauty and finest quality into your living spaces and industries."
        bgImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ label: 'About Us', href: '/tentang-kami' }]}
      />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1628592102751-ba83b03062b3?auto=format&fit=crop&q=80&w=800"
                  alt="Marble Slab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-gold text-brand-dark p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="font-medium text-sm uppercase tracking-wider">
                  Years of Experience in Natural Stone & Agriculture Industry
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
                  Who We Are
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark leading-tight font-serif">
                  Building the Future with Quality from Nature
                </h3>
              </div>

              <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                PietraMarmara began from our passion for the natural richness of Indonesia and the
                world. We believe that every piece of marble and every harvest has a unique story
                and quality worthy of appreciation.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Integrity & Quality</h4>
                    <p className="text-stone-500">
                      We only provide products with the highest quality standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Sustainable Innovation</h4>
                    <p className="text-stone-500">
                      Continuously evolving with technology and global design trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 font-serif">
                Our Vision
              </h3>
              <p className="text-stone-600 text-base md:text-lg leading-relaxed">
                To be the trusted partner in providing premium material solutions and high-quality
                agricultural products that add value to every customer and community.
              </p>
            </div>

            <div className="bg-brand-dark p-8 md:p-12 rounded-3xl shadow-xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-brand-gold">
                Our Mission
              </h3>
              <ul className="space-y-4 text-stone-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1.5">•</span>
                  Provide the best export-quality marble and natural stone products.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1.5">•</span>
                  Support food security through distribution of superior agricultural products.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1.5">•</span>
                  Build long-term mutually beneficial relationships with partners.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 font-serif">
              Our Supply Chain Process
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Ensuring quality from source to delivery through a rigorous and efficient process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Sourcing',
                desc: 'Selecting best raw materials from trusted quarries and farms worldwide.',
              },
              {
                icon: CheckCircle,
                title: 'Quality Control',
                desc: 'Strict inspection at every stage to meet international standards.',
              },
              {
                icon: Factory,
                title: 'Processing',
                desc: 'Advanced processing technology for precision and consistency.',
              },
              {
                icon: Truck,
                title: 'Safe Delivery',
                desc: 'Professional logistics ensuring products arrive in perfect condition.',
              },
            ].map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="text-center group">
                  <div className="w-20 h-20 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                    <Icon className="w-10 h-10 text-stone-400 group-hover:text-brand-dark transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-serif text-center">
            Our Facilities & Sources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative h-80 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599696894574-8e7c8585e2b0?auto=format&fit=crop&q=80&w=800"
                alt="Marble Quarry"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">Marble Quarry</h3>
              </div>
            </div>
            <div className="group relative h-80 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&q=80&w=800"
                alt="Processing Factory"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">Processing Factory</h3>
              </div>
            </div>
            <div className="group relative h-80 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
                alt="Agricultural Farm"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">Sustainable Farm</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
