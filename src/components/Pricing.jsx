import { motion } from 'framer-motion'
import { FiCheck, FiStar } from 'react-icons/fi'
import { Button } from './ui/Button'

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small businesses',
    features: [
      '10,000 emails/month',
      'Basic analytics',
      '5 team members',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '79',
    description: 'For growing companies',
    popular: true,
    features: [
      '50,000 emails/month',
      'Advanced analytics',
      '15 team members',
      'Priority support',
      'Custom templates',
      'A/B testing'
    ]
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large organizations',
    features: [
      'Unlimited emails',
      'Custom analytics',
      'Unlimited team members',
      '24/7 support',
      'Custom integration',
      'Dedicated manager'
    ]
  }
]

export function Pricing() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-zinc-400">
            No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative p-8 rounded-2xl 
                bg-[#111111] border border-white/10
                shadow-[inset_0px_0px_20px_rgba(255,255,255,0.03)]
                hover:shadow-[inset_0px_0px_100px_rgba(255,255,255,0.02)]
                transition-all duration-500
                ${plan.popular ? 'ring-1 ring-primary-DEFAULT/50' : ''}
              `}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 
                    bg-primary-DEFAULT/10 rounded-full border border-primary-DEFAULT/20"
                >
                  <FiStar className="text-primary-DEFAULT text-xs" />
                  <span className="text-xs text-primary-DEFAULT">Popular</span>
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-zinc-400">/month</span>
              </div>

              <ul className="space-y-4 mb-8 min-h-[280px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <FiCheck className="mt-1 text-primary-DEFAULT" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'default' : 'secondary'}
                className="w-full justify-center group"
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 