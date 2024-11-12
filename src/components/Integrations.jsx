import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  FiSlack, 
  FiGithub, 
  FiTrello, 
  FiDroplet, 
  FiBox, 
  FiDatabase,
  FiMail 
} from 'react-icons/fi'

const integrations = [
  { icon: FiSlack, name: 'Slack' },
  { icon: FiGithub, name: 'GitHub' },
  { icon: FiTrello, name: 'Trello' },
  { icon: FiDroplet, name: 'Asana' },
  { icon: FiBox, name: 'Notion' },
  { icon: FiDatabase, name: 'Airtable' },
]

export function Integrations() {
  const [isConnecting, setIsConnecting] = useState(false)

  return (
    <section className="w-full py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-zinc-400">
            Connect mailflow with your favorite tools
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Icon */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16"
          >
            <motion.button
              onClick={() => setIsConnecting(!isConnecting)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary-DEFAULT/20 blur-xl rounded-full" />
              <div className="relative w-20 h-20 bg-black border border-primary-DEFAULT/20 rounded-full flex items-center justify-center">
                <FiMail className="text-3xl text-primary-DEFAULT" />
              </div>
            </motion.button>
          </motion.div>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={integration.name} className="relative">
                {/* Connection Line */}
                <AnimatePresence>
                  {isConnecting && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ 
                          opacity: 1, 
                          pathLength: 1,
                          transition: { 
                            duration: 0.5,
                            delay: index * 0.1 
                          }
                        }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/2 top-0 w-[1px] h-16 bg-gradient-to-b from-primary-DEFAULT/50 to-transparent -translate-x-1/2 -translate-y-16"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: 1,
                          transition: { 
                            duration: 0.3,
                            delay: (index * 0.1) + 0.5
                          }
                        }}
                        exit={{ scale: 0 }}
                        className="absolute left-1/2 top-0 w-2 h-2 bg-primary-DEFAULT rounded-full -translate-x-1/2 -translate-y-16"
                      />
                    </>
                  )}
                </AnimatePresence>

                {/* Integration Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm flex flex-col items-center gap-3">
                    <integration.icon 
                      className={`text-2xl transition-colors duration-300 ${
                        isConnecting ? 'text-primary-DEFAULT' : 'text-zinc-400 group-hover:text-primary-DEFAULT'
                      }`}
                    />
                    <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
                      {integration.name}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 