import { motion } from 'motion/react';

export default function BookingCTA() {
  return (
    <section id="book" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: -50 }}
        whileInView={{ y: 50 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "linear" }}
      >
        <img
          src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Salon Interior"
          className="w-full h-[120%] object-cover object-center"
          loading="lazy"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-ivory/80 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-gold font-serif italic text-2xl md:text-3xl mb-6"
        >
          Your Best Look Awaits
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight mb-12"
        >
          Ready for Your <br />
          <span className="italic text-gold">Transformation?</span>
        </motion.h2>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gold text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-charcoal transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Book Your Appointment Today
        </motion.a>
      </div>
    </section>
  );
}
