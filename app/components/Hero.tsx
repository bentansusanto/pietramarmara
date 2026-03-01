import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-stone-50 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-200 -skew-x-12 transform origin-top opacity-30" />

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-sm font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span>Premium Marble & Natural Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark leading-tight tracking-tight font-serif">
              Premium Marble & <br />
              <span className="text-brand-gold italic">Natural Resources</span> Supplier
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed max-w-xl border-l-4 border-brand-gold pl-6">
              Professional & Trusted Partner for High-Quality Materials. We provide the best marble
              and agricultural products for your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/produk"
                className="bg-brand-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-brand-gold transition-all duration-300 font-bold text-center shadow-lg hover:shadow-brand-gold/20 flex items-center justify-center space-x-2 group text-sm md:text-base"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/kontak"
                className="bg-white border-2 border-brand-dark text-brand-dark px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-brand-dark hover:text-white transition-all duration-300 font-bold text-center flex items-center justify-center text-sm md:text-base"
              >
                Request Quote
              </Link>
            </div>

            {/* Stats / Trust */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
              <div>
                <p className="text-3xl font-bold text-brand-dark">500+</p>
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider mt-1">
                  Projects Done
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-dark">50+</p>
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider mt-1">
                  Marble Types
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-dark">100%</p>
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider mt-1">
                  Natural Quality
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-dark/10 rounded-full blur-3xl" />

            <div className="relative z-10 w-full h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Dark Marble"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/60 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-1">
                      Featured Collection
                    </p>
                    <h3 className="text-brand-dark font-bold text-xl">Black Marquina & Gold</h3>
                  </div>
                  <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white group-hover:bg-brand-gold transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
