import { motion } from 'framer-motion'
import { useState } from 'react'

export function Button({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const variants = {
    default: 'bg-white/10',
    secondary: 'bg-white/5',
    outline: 'bg-transparent border border-white/20'
  }

  return (
    <motion.button
      className={`
        relative overflow-hidden px-8 py-4 rounded-2xl 
        ${variants[variant]}
        text-white font-medium
        transition-all duration-300 ease-out
        hover:bg-white/20
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3) 0%, transparent 70%)`
            : 'none'
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.button>
  )
} 