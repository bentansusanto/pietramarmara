'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PageHero from '../components/PageHero'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = `Hello PietraMarmara,%0A%0AI would like to inquire about your products/services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0A%0AMessage:%0A${formData.message}`

    // Replace with your actual WhatsApp number
    const phoneNumber = '6281234567890'
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        title="Contact Us"
        description="We are ready to assist you with your marble and agricultural product needs. Get a quote or schedule a consultation."
        bgImage="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=1920"
        breadcrumb={[{ label: 'Contact', href: '/kontak' }]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 font-serif">
                  Get in Touch
                </h2>
                <p className="text-stone-600 mb-8 leading-relaxed text-base md:text-lg">
                  Feel free to contact us through any of the channels below. Our team will respond
                  to your inquiry promptly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Office Address</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Jl. Raya Utama No. 123, Jakarta Selatan,
                      <br />
                      DKI Jakarta, Indonesia 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Phone / WhatsApp</h4>
                    <p className="text-stone-600 text-sm">+62 812 3456 7890</p>
                    <p className="text-stone-600 text-sm">+62 21 555 0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Email</h4>
                    <p className="text-stone-600 text-sm">info@pietramarmara.com</p>
                    <p className="text-stone-600 text-sm">sales@pietramarmara.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Business Hours</h4>
                    <p className="text-stone-600 text-sm">Mon - Fri: 08:00 - 17:00</p>
                    <p className="text-stone-600 text-sm">Sat: 08:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-stone-50 p-6 md:p-12 rounded-3xl border border-stone-100 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 font-serif">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white transition-all text-sm md:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white transition-all text-sm md:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white transition-all text-sm md:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white transition-all text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white transition-all text-sm md:text-base"
                      required
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-brand-dark text-white px-6 py-3 md:px-10 md:py-4 rounded-xl font-bold hover:bg-brand-gold transition-all duration-300 shadow-lg hover:shadow-brand-gold/20 flex items-center justify-center space-x-2 text-sm md:text-base"
                    >
                      <span>Request Quote Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] bg-stone-200 relative w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.96340237735!2d106.7291963968273!3d-6.284560408422793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b423%3A0xbc0c44d62175402a!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1709228945600!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>

      <Footer />
    </main>
  )
}
