import { motion } from 'framer-motion'
import { FiMail, FiSettings, FiUser, FiMenu } from 'react-icons/fi'

export function Navigation() {
  return (
    <div className="w-full flex justify-center px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 w-full max-w-6xl backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl z-50"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <FiMail className="text-primary-DEFAULT" />
            <span>mailflow</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Analytics', 'Campaigns', 'Templates', 'Audience'].map((item) => (
              <button 
                key={item}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <FiSettings className="text-zinc-400" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-DEFAULT/10 text-primary-DEFAULT rounded-xl hover:bg-primary-DEFAULT/20 transition-all duration-300"
            >
              <FiUser />
              <span>Account</span>
            </motion.button>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  )
} 