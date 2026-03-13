import { motion } from 'motion/react';
import { Scissors } from 'lucide-react';

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ivory"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Scissors className="w-12 h-12 text-gold" strokeWidth={1.5} />
        </motion.div>
        
        <h1 className="font-serif text-4xl italic text-charcoal tracking-wide">
          Top Trends
        </h1>
        
        <div className="w-32 h-[1px] bg-beige overflow-hidden relative mt-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
