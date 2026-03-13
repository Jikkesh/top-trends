import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹499',
    description: 'Essential grooming for a quick refresh.',
    features: ['Haircut & Styling', 'Hair Wash', 'Blowdry', 'Basic Trimming'],
    highlighted: false,
    buttonText: 'Book Basic',
  },
  {
    name: 'Premium',
    price: '₹1299',
    description: 'Our most popular package for a complete look.',
    features: ['Haircut & Styling', 'Premium Hair Color', 'Deep Conditioning Treatment', 'Beard Grooming / Cleanup', 'Head Massage (15 min)', 'Styling Product Application'],
    highlighted: true,
    buttonText: 'Book Premium',
    badge: 'Most Popular',
  },
  {
    name: 'Luxury',
    price: '₹2499',
    description: 'The ultimate pampering experience.',
    features: ['Full Service Package', 'Advanced Spa Treatment', 'Skin Rejuvenation Facial', 'Keratin / Smoothening Touch-up', 'Premium Color & Highlights', 'Scalp Detox', 'Hot Towel Shave', 'Complimentary Beverage'],
    highlighted: false,
    buttonText: 'Book Luxury',
  },
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-charcoal/70"
          >
            Choose the perfect package for your needs
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'border-2 border-gold shadow-2xl scale-105 z-10'
                  : 'border border-beige shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif text-charcoal mb-2">{plan.name}</h3>
                <p className="text-charcoal/60 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-serif text-gold italic">{plan.price}</span>
                  <span className="text-charcoal/50 text-sm font-medium">/visit</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-gold/10 p-1 rounded-full text-gold">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-charcoal/80 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className={`block w-full py-4 rounded-full text-center font-medium transition-all duration-300 hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gold text-white hover:bg-charcoal hover:shadow-lg'
                    : 'bg-transparent text-charcoal border border-beige hover:border-gold hover:text-gold'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
