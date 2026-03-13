import { motion } from 'motion/react';
import { Scissors, Palette, UserCircle, Sparkles, Droplets, Smile } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Haircuts & Styling',
    description: 'Precision cuts and bespoke styling tailored to your face shape and lifestyle.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Hair Coloring',
    description: 'From subtle highlights to bold transformations using premium color products.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Beard & Grooming',
    description: 'Expert beard shaping, trimming, and hot towel shaves for the modern gentleman.',
    icon: UserCircle,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Keratin Treatment',
    description: 'Smooth, frizz-free hair that lasts for months with our advanced keratin formula.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Head Spa',
    description: 'Relaxing scalp massage and deep conditioning treatments for healthy hair growth.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Makeup & Skin',
    description: 'Professional makeup application and rejuvenating skin treatments for any occasion.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-charcoal/70"
          >
            Tailored services for every style
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-beige hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              <div className="p-8">
                <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-serif text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal/70 mb-6 line-clamp-2">{service.description}</p>
                
                <a href="#book" className="inline-flex items-center text-gold font-medium hover:text-charcoal transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
