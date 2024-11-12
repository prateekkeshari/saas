import { FiMail, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <FiMail className="text-primary-DEFAULT" />
              <span>mailflow</span>
            </div>
            <p className="text-zinc-400">
              Beautiful email marketing platform for modern teams
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Templates', 'Integrations'].map(item => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Security'].map(item => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © 2024 mailflow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[FiGithub, FiTwitter, FiLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-all duration-200"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 