import Link from 'next/link'

export default function AboutSnippet() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-gold"></div>
            <img
              src="https://images.unsplash.com/photo-1599696894574-8e7c8585e2b0?auto=format&fit=crop&q=80&w=800"
              alt="About PietraMarmara"
              className="rounded-lg shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-gold"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
              About Us
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif leading-tight">
              Building Legacy Through <br />
              <span className="italic text-stone-400">Timeless Materials</span>
            </h3>
            <p className="text-stone-300 leading-relaxed text-base md:text-lg">
              PietraMarmara is a leading supplier of premium marble and natural agricultural
              products. With years of experience and a global network, we are committed to
              delivering excellence in every stone and harvest.
            </p>
            <p className="text-stone-300 leading-relaxed text-sm md:text-base">
              We serve B2B clients, contractors, and industrial partners with a focus on quality,
              sustainability, and reliability.
            </p>

            <Link
              href="/tentang-kami"
              className="inline-block bg-brand-gold text-brand-dark px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-white transition-colors mt-4 text-sm md:text-base"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
