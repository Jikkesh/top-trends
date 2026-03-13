import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(end, 2000, isInView);

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start gap-2">
      <span className="text-4xl md:text-5xl font-serif text-gold italic">
        {count}{suffix}
      </span>
      <span className="text-sm uppercase tracking-widest text-charcoal/60 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Image */}
        <motion.div
          className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Salon Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl m-4 pointer-events-none" />
          </div>
          
          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-full shadow-xl border border-beige flex items-center justify-center w-32 h-32"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="text-center">
              <span className="block text-sm uppercase tracking-widest text-charcoal/60 mb-1">Est.</span>
              <span className="block text-2xl font-serif text-gold italic">2012</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4">Our Story</span>
          
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight mb-8">
            Crafted for Every Style, <br />
            <span className="italic text-gold">Made for Everyone</span>
          </h2>
          
          <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed mb-12">
            <p>
              At Top Trends, we believe that true elegance knows no boundaries. Since 2012, we have been redefining the salon experience, offering a luxurious, inclusive space where everyone can discover their best look.
            </p>
            <p>
              Our team of master stylists and color specialists are dedicated to the art of transformation. Whether you're seeking a classic cut, a bold color change, or a complete grooming overhaul, we tailor every service to your unique personality and lifestyle.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full border-t border-beige pt-12">
            <Counter end={12} suffix="+" label="Years" />
            <Counter end={500} suffix="+" label="Happy Clients" />
            <Counter end={20} suffix="+" label="Expert Stylists" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
