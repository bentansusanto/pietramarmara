import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    company: 'PT. Arsitektura Indonesia',
    role: 'Principal Architect',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    content:
      "PietraMarmara's marble quality is exceptional. The finish for our Jakarta project was perfect. Professional service and consultation.",
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    company: 'Green Valley Resorts',
    role: 'Procurement Manager',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    content:
      'Their agricultural products are fresh and consistently high quality. We source our resort kitchen supplies from PietraMarmara.',
    rating: 5,
  },
  {
    name: 'Ahmad Rahman',
    company: 'CV. Interior Design Pro',
    role: 'Interior Designer',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    content:
      'Their marble selection is outstanding. Unique patterns and variations that help us create elegant interiors for our clients.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
            Testimonials
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark font-serif">
            What Our Clients Say
          </h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto pt-4">
            Client satisfaction is our priority. Here are some words from our partners across
            various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group border border-stone-100"
            >
              <Quote className="w-10 h-10 text-brand-gold/20 absolute top-8 right-8 group-hover:text-brand-gold transition-colors" />

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-stone-100"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-xs text-stone-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-current" />
                ))}
              </div>

              <p className="text-stone-600 mb-6 leading-relaxed italic text-sm">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
