import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { FiArrowRight } from 'react-icons/fi'

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-60 left-1/3 w-32 h-32 border border-white/10 rounded-full"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-6 py-2 mb-6 rounded-full bg-white/5 border border-white/10"
        >
          <span className="text-sm text-zinc-400">Launching soon</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Email Marketing,
          <br />
          Reimagined
        </h1>
        <p className="text-xl text-zinc-400 mb-8">
          Craft beautiful email campaigns with the power of AI
          <br />
          and the simplicity of modern design
        </p>
        <Button variant="default" className="group">
          Get Early Access
          <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </div>
  )
} 