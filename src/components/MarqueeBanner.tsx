import { motion } from 'motion/react';

const items = [
  'Haircuts',
  'Coloring',
  'Styling',
  'Beard Grooming',
  'Facials',
  'Keratin',
  'Highlights',
  'Head Spa',
  'Bridal',
  'Balayage',
];

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-ivory-dark py-6 overflow-hidden flex items-center group">
      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
        whileHover={{ animationDirection: 'reverse' }}
      >
        {/* Repeat items to create seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-gold font-serif text-2xl md:text-3xl italic tracking-wider">
              {item}
            </span>
            <span className="text-gold/50 text-xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
