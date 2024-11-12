import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "mailflow has transformed how we approach email marketing. The AI-powered features are a game-changer.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp"
  },
  {
    quote: "The analytics and insights have helped us increase our open rates by 45%. Incredible results.",
    author: "Michael Chen",
    role: "Growth Lead",
    company: "StartupX"
  },
  {
    quote: "Beautiful templates and an intuitive interface. Our team was able to get started immediately.",
    author: "Emma Williams",
    role: "Creative Director",
    company: "DesignCo"
  }
]

export function Testimonials() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-xl text-zinc-400">
            See what our customers have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary-DEFAULT">★</span>
                ))}
              </div>
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <cite className="not-italic font-semibold">
                  {testimonial.author}
                </cite>
                <p className="text-sm text-zinc-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 