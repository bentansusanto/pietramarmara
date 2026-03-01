'use client'

import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <Image
                src="/logo-pietramarmara.jpg"
                alt="Pietra Marmara Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-brand-dark tracking-tight">PietraMarmara</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/produk"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/tentang-kami"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/kontak"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/kontak"
              className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-brand-gold transition-all duration-300 flex items-center space-x-2 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Request Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              className="p-2 text-stone-600 hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white border-t border-stone-100 shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
            <Link
              href="/"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors py-2 border-b border-stone-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/produk"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors py-2 border-b border-stone-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/tentang-kami"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors py-2 border-b border-stone-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/kontak"
              className="text-stone-600 hover:text-brand-gold font-medium transition-colors py-2 border-b border-stone-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/kontak"
              className="bg-brand-dark text-white px-6 py-3 rounded-lg hover:bg-brand-gold transition-all duration-300 flex items-center justify-center space-x-2 font-medium w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>Request Quote</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
