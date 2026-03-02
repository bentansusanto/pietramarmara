import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Eleanor Vance',
    role: 'Lead Architect, Horizon Studios',
    content:
      'PietraMarmara delivered exquisite Statuario marble for our flagship hotel project. The veining consistency and exceptional finish surpassed all expectations. A truly premium partner.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Marcus Chen',
    role: 'CEO, Chen Developments',
    content:
      'Their Nero Marquina granite is flawless. From the selection process to final delivery, the professionalism and attention to detail demonstrated by PietraMarmara are unmatched.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Sophia Laurent',
    role: 'Interior Designer',
    content:
      'I rely exclusively on PietraMarmara for high-end residential projects. Their exclusive collection provides the foundation for spaces that exude timeless luxury and sophistication.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative dark granite texture overlay */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-xs md:text-sm">
            Client Perspectives
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight">
            Enduring Partnerships
          </h3>
          <p className="text-stone-400 text-lg mx-auto pt-4 font-light">
            Hear from industry leaders who have chosen our stones to define their most prestigious
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-stone-900/80 backdrop-blur-md p-10 rounded-sm border border-stone-800 hover:border-brand-gold/50 transition-colors duration-500 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-stone-800 group-hover:text-brand-gold/20 transition-colors duration-500" />

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>

              <p className="text-stone-300 mb-10 leading-relaxed font-light relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4 border-t border-stone-800 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-white font-serif">{testimonial.name}</h4>
                  <p className="text-stone-500 text-sm font-light">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
