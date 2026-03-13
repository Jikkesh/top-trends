import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Laurent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'The most luxurious salon experience I\'ve ever had. The attention to detail and the expertise of the stylists are unmatched. I left feeling like a completely new person.',
  },
  {
    id: 2,
    name: 'James Harrison',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Finally found a salon that understands men\'s grooming. The hot towel shave and precision fade were perfect. The atmosphere is incredibly relaxing and welcoming.',
  },
  {
    id: 3,
    name: 'Isabella Martinez',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    text: 'My balayage turned out exactly how I envisioned it! The color specialist really took the time to understand what I wanted. I\'ve received so many compliments.',
  },
  {
    id: 4,
    name: 'Michael Chang',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'Top Trends is my go-to place before any major event. The team is professional, the products are premium, and the results are consistently excellent.',
  },
  {
    id: 5,
    name: 'Emma Thompson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    text: 'The bridal package was a dream. They made me and my bridesmaids look and feel absolutely stunning. Thank you for making my special day perfect!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative large quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] md:text-[400px] font-serif text-gold/5 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative h-[350px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <div className="text-gold text-6xl font-serif leading-none mb-6">"</div>
              
              <p className="font-quote text-2xl md:text-3xl italic text-charcoal/80 mb-8 max-w-3xl leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="flex justify-center gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  loading="lazy"
                />
                <div className="text-left">
                  <h4 className="font-serif text-lg text-charcoal">{testimonials[currentIndex].name}</h4>
                  <span className="text-xs uppercase tracking-widest text-charcoal/50 font-medium">Verified Client</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gold w-8' : 'bg-charcoal/20 hover:bg-gold/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
