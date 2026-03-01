import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-bold text-lg">PM</span>
              </div>
              <span className="text-xl font-bold font-serif tracking-tight">PietraMarmara</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Specialist in premium marble and high-quality agricultural products. Serving
              commercial and residential projects with international standards.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-serif text-brand-gold">Product Categories</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/produk?category=Marble"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Marble & Natural Stone</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/produk?category=Food%20Crops"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Food Crops</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/produk?category=Plantation"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Plantation Crops</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/produk?category=Fruits%20&%20Vegetables"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Fruits & Vegetables</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/produk?category=Livestock"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Livestock Products</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-serif text-brand-gold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-stone-400 hover:text-brand-gold transition-colors flex items-center space-x-2 group"
                >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-serif text-brand-gold">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-brand-gold mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                <span className="text-stone-400 group-hover:text-white transition-colors leading-relaxed">
                  Jl. Raya Utama No. 123, Jakarta Selatan,
                  <br />
                  DKI Jakarta, Indonesia 12345
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors" />
                <Link
                  href="tel:+6281234567890"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  +62 812 3456 7890
                </Link>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors" />
                <Link
                  href="mailto:info@pietramarmara.com"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  info@pietramarmara.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-stone-500 text-sm">© 2024 PietraMarmara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
