import { motion } from 'motion/react';
import { Instagram, Facebook, Star } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Elena Rossi',
    role: 'Senior Hair Stylist',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    experience: '15 Years',
    specialty: 'Precision Cuts & Balayage',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Color Specialist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    experience: '10 Years',
    specialty: 'Vivid Colors & Color Correction',
  },
  {
    id: 3,
    name: 'David Miller',
    role: 'Beard Artist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    experience: '8 Years',
    specialty: 'Fades & Hot Towel Shaves',
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Skin Expert',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    experience: '12 Years',
    specialty: 'Bridal Makeup & Facials',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Meet Our Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-charcoal/70"
          >
            The artists behind your transformation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="group perspective-1000"
            >
              <div className="relative w-full aspect-square rounded-full mb-6 preserve-3d transition-transform duration-700 group-hover:[transform:rotateY(180deg)] cursor-pointer">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-ivory shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-gold rounded-full flex flex-col items-center justify-center p-6 text-white text-center shadow-lg">
                  <span className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">Experience</span>
                  <span className="text-2xl font-serif italic mb-4">{member.experience}</span>
                  <span className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">Specialty</span>
                  <span className="text-lg font-serif italic">{member.specialty}</span>
                  
                  <div className="flex gap-4 mt-6">
                    <a href="#" className="hover:text-charcoal transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-charcoal transition-colors"><Facebook className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif text-charcoal mb-1">{member.name}</h3>
                <p className="text-charcoal/60 text-sm uppercase tracking-widest font-medium mb-3">{member.role}</p>
                <div className="flex justify-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
