import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    pattern: ({ isHovered }) => (
      <div className="relative w-full h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] rounded-t-2xl backdrop-blur-3xl" />
        {/* Neural network visualization - Smaller card */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + (i % 4) * 20}%`,  // Adjusted spacing
                top: `${20 + Math.floor(i / 4) * 20}%`,  // Adjusted spacing
              }}
            >
              <motion.div
                className="w-3 h-3 bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
              {i < 12 && (
                <motion.div
                  className="absolute top-1/2 left-1/2 h-px bg-white/20"
                  style={{
                    width: '60px',  // Increased line length
                    transform: `rotate(${45 * (i % 4)}deg)`,
                    boxShadow: '0 0 5px rgba(255,255,255,0.2)',
                  }}
                  animate={{
                    opacity: isHovered ? [0.2, 0.5, 0.2] : 0.2,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    ),
    title: 'AI-Powered Automation',
    description: 'Smart campaigns that optimize themselves for maximum engagement',
    size: 'small'
  },
  {
    pattern: ({ isHovered }) => (
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] rounded-t-2xl backdrop-blur-3xl" />
        {/* Analytics graph - Large card */}
        <div className="absolute inset-0 flex items-end justify-around px-12 pb-12">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[4px] bg-white/40 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              style={{
                height: `${30 + Math.random() * 50}%`,  // Varied heights
                transformOrigin: 'bottom',
              }}
              animate={{
                scaleY: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                opacity: isHovered ? [0.4, 0.8, 0.4] : 0.4,
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>
    ),
    title: 'Real-time Analytics',
    description: 'Deep insights into campaign performance',
    size: 'large'
  },
  {
    pattern: ({ isHovered }) => (
      <div className="relative w-full h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] rounded-t-2xl backdrop-blur-3xl" />
        {/* Template grid - Medium card */}
        <div className="absolute inset-0 grid grid-cols-3 gap-6 p-16">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="relative bg-white/20 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              animate={{
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  x: isHovered ? ['0%', '100%', '0%'] : '0%',
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    ),
    title: 'Beautiful Templates',
    description: 'Professionally designed, ready to use',
    size: 'medium'
  },
  {
    pattern: ({ isHovered }) => (
      <div className="relative w-full h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] rounded-t-2xl backdrop-blur-3xl" />
        {/* Segmentation circles with glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="relative w-32 h-32"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-white/30 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
                style={{
                  transform: `scale(${0.6 + i * 0.2})`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    ),
    title: 'Smart Segmentation',
    description: 'Target the right audience at the right time',
    size: 'small'
  },
  {
    pattern: ({ isHovered }) => (
      <div className="relative w-full h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] rounded-t-2xl backdrop-blur-3xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central hub - Adjusted size for small card */}
          <motion.div
            className="absolute w-12 h-12 bg-white/40 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Connection lines and nodes - Adjusted for small card */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '100px',  // Increased line length
                height: '2px',
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 60}deg)`,
                transformOrigin: '0 50%',
              }}
            >
              {/* Connection line */}
              <motion.div
                className="absolute inset-0 origin-left"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0))',
                }}
                animate={{
                  scaleX: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
              
              {/* End node */}
              <motion.div
                className="absolute right-0 w-3 h-3 -mt-1.5 bg-white/30 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                animate={{
                  scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
              
              {/* Traveling pulse */}
              <motion.div
                className="absolute w-2 h-2 -mt-1 bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                animate={{
                  x: ['0%', '100%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    ),
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools',
    size: 'small'
  }
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-zinc-400">
            Powerful features to help you grow your email marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {renderFeature(features[0], 0)}
          </motion.div>
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {renderFeature(features[1], 1)}
          </motion.div>

          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {renderFeature(features[2], 2)}
          </motion.div>
          <div className="col-span-1 grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                group rounded-2xl bg-black border border-white/[0.05] 
                overflow-hidden hover:border-white/[0.1] transition-colors duration-700
                h-full flex flex-col
              `}
            >
              {features[3].pattern({ isHovered: 3 === hoveredIndex })}
              <div className="p-8 mt-auto">
                <h3 className="text-2xl font-semibold mb-4">{features[3].title}</h3>
                <p className="text-zinc-400">{features[3].description}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                group rounded-2xl bg-black border border-white/[0.05] 
                overflow-hidden hover:border-white/[0.1] transition-colors duration-700
                h-full flex flex-col
              `}
            >
              {features[4].pattern({ isHovered: 4 === hoveredIndex })}
              <div className="p-8 mt-auto">
                <h3 className="text-2xl font-semibold mb-4">{features[4].title}</h3>
                <p className="text-zinc-400">{features[4].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )

  function renderFeature(feature, index) {
    const isHovered = index === hoveredIndex

    return (
      <div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`
          group rounded-2xl bg-black border border-white/[0.05] 
          overflow-hidden hover:border-white/[0.1] transition-colors duration-700
          h-full flex flex-col
        `}
      >
        {feature.pattern({ isHovered })}
        <div className="p-8 mt-auto">
          <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
          <p className="text-zinc-400">{feature.description}</p>
        </div>
      </div>
    )
  }
} 