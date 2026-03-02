import Link from 'next/link'

export default function AboutSnippet() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
            About Us
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-brand-dark leading-tight">
            Crafting Legacy from <br />
            <span className="italic font-light">Solid Stone</span>
          </h3>
          <p className="text-stone-500 leading-relaxed text-base md:text-lg mt-6">
            PietraMarmara brings the world's finest granite and marble directly from the quarries to
            your architectural masterpieces. We specialize in high-end natural stones for commercial
            and residential applications.
          </p>
        </div>

        {/* Feature Cards mimicking template 175 style */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {/* Card 1 */}
          <div className="relative group h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584403293325-756fc1786516?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Premium Quality Granite"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/60 transition-colors duration-500" />

            {/* L-shaped decorative brackets */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/80 transition-all duration-300 group-hover:border-brand-gold group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/80 transition-all duration-300 group-hover:border-brand-gold group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="absolute inset-0 p-10 flex flex-col justify-end text-center">
              <h4 className="text-3xl font-serif font-bold text-white mb-3">100% Premium</h4>
              <p className="text-stone-300 text-sm font-light">
                Sourced exclusively from world-renowned quarries.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group h-[500px] overflow-hidden md:-mt-8">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
              alt="Master Craftsmanship"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/60 transition-colors duration-500" />

            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/80 transition-all duration-300 group-hover:border-brand-gold group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/80 transition-all duration-300 group-hover:border-brand-gold group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="absolute inset-0 p-10 flex flex-col justify-end text-center">
              <h4 className="text-3xl font-serif font-bold text-white mb-3">High Quality</h4>
              <p className="text-stone-300 text-sm font-light">
                Precision cut and expertly polished for perfection.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
              alt="Global Supply"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/60 transition-colors duration-500" />

            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/80 transition-all duration-300 group-hover:border-brand-gold group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/80 transition-all duration-300 group-hover:border-brand-gold group-hover:translate-x-2 group-hover:translate-y-2"></div>

            <div className="absolute inset-0 p-10 flex flex-col justify-end text-center">
              <h4 className="text-3xl font-serif font-bold text-white mb-3">Elegant Items</h4>
              <p className="text-stone-300 text-sm font-light">
                Unique patterns that define luxury living spaces.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/tentang-kami"
            className="inline-block border border-brand-dark text-brand-dark px-10 py-4 font-bold uppercase tracking-wider text-sm hover:bg-brand-dark hover:text-white transition-all duration-300"
          >
            Read Our Full Story
          </Link>
        </div>
      </div>
    </section>
  )
}
