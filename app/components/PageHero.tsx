import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  description?: string
  bgImage?: string
  breadcrumb?: {
    label: string
    href: string
  }[]
}

export default function PageHero({ title, description, bgImage, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Gradient */}
      <div
        className="absolute inset-0 bg-stone-900"
        style={
          bgImage
            ? {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-linear-to-b from-stone-900/70 to-stone-900/90" />

        {/* Decorative Pattern (Optional) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center justify-center space-x-2 text-sm text-stone-300 mb-6 uppercase tracking-wider font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-amber-500">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-base md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* Decorative Line */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 bg-amber-500 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
