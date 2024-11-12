import { motion, useAnimationControls } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Button } from './ui/Button'
import { useState, useEffect } from 'react'

export function CTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimationControls()

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  useEffect(() => {
    controls.start({
      background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.03) 0%, transparent 50%)`
    })
  }, [mousePosition])

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          className="relative p-12 md:p-16 rounded-3xl border border-white/10 bg-[#111111] shadow-[inset_0px_0px_20px_rgba(255,255,255,0.05)] overflow-hidden"
        >
          {/* Animated background */}
          <motion.div 
            className="absolute inset-0 transition-all duration-300"
            animate={controls}
          />

          {/* Geometric patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Rotating circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-96 h-96 border border-white/5 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: '50%',
                  translateY: '-50%',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            ))}

            {/* Floating dots */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-DEFAULT/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Ready to get started?
              </motion.h2>
              <motion.p 
                className="text-xl text-zinc-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Join thousands of teams already using mailflow
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="default" className="group">
                Get Started
                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 