import { motion } from 'motion/react';
import { Scissors } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="flex-1 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <Scissors className="w-5 h-5 text-gold" />
          <span className="text-sm font-medium tracking-widest uppercase text-charcoal/60">Premium Unisex Salon</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-serif italic text-charcoal mb-6"
        >
          Where Style <br /> Meets Elegance
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-md font-sans"
        >
          Experience a luxurious, inclusive salon environment tailored for every style and everyone.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
          <a
            href="#book"
            className="bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-charcoal transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full font-medium text-charcoal border border-beige hover:border-gold hover:text-gold transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-4 text-sm font-medium text-charcoal/80">
          <span>✦ 500+ Happy Clients</span>
          <span className="w-1 h-1 rounded-full bg-gold"></span>
          <span>12 Years of Excellence</span>
        </motion.div>
      </motion.div>

      {/* Right Images Collage */}
      <motion.div
        className="flex-1 relative w-full h-[500px] lg:h-[600px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="absolute top-0 right-0 w-[60%] h-[70%] rounded-2xl overflow-hidden shadow-2xl z-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
            alt="Women's Haircut"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-[10%] w-[50%] h-[60%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-ivory"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
            alt="Men's Haircut"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="absolute top-[20%] left-0 w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-lg z-10 opacity-80"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
            alt="Salon Interior"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gold/20 rounded-full -z-10" />
        
        <motion.div
          className="absolute top-1/4 right-1/4 z-40 text-gold/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <Scissors className="w-24 h-24" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
