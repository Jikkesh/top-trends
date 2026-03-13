import { useState, FocusEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleFocus = (name: string) => setFocusedInput(name);
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!e.target.value) setFocusedInput(null);
  };

  const isFocused = (name: string) => focusedInput === name;

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Contact Form */}
        <motion.div
          className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-beige"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-2">Get in Touch</h2>
          <p className="text-charcoal/60 mb-8">We'd love to hear from you. Fill out the form below.</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-beige py-3 px-0 text-charcoal focus:outline-none focus:border-gold transition-colors peer"
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused('name') || document.getElementById('name')?.nodeValue
                      ? '-top-3 text-xs text-gold'
                      : 'top-3 text-charcoal/50'
                  }`}
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-transparent border-b border-beige py-3 px-0 text-charcoal focus:outline-none focus:border-gold transition-colors peer"
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  required
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused('phone') || document.getElementById('phone')?.nodeValue
                      ? '-top-3 text-xs text-gold'
                      : 'top-3 text-charcoal/50'
                  }`}
                >
                  Phone
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border-b border-beige py-3 px-0 text-charcoal focus:outline-none focus:border-gold transition-colors peer"
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  isFocused('email') || document.getElementById('email')?.nodeValue
                    ? '-top-3 text-xs text-gold'
                    : 'top-3 text-charcoal/50'
                }`}
              >
                Email
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="w-full bg-transparent border-b border-beige py-3 px-0 text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none"
                  onFocus={() => handleFocus('service')}
                  onBlur={handleBlur}
                  required
                  defaultValue=""
                >
                  <option value="" disabled hidden></option>
                  <option value="haircut">Haircut & Styling</option>
                  <option value="coloring">Hair Coloring</option>
                  <option value="beard">Beard Grooming</option>
                  <option value="spa">Head Spa</option>
                  <option value="makeup">Makeup & Skin</option>
                </select>
                <label
                  htmlFor="service"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused('service') || document.getElementById('service')?.nodeValue
                      ? '-top-3 text-xs text-gold'
                      : 'top-3 text-charcoal/50'
                  }`}
                >
                  Service
                </label>
                <div className="absolute right-0 top-4 pointer-events-none text-charcoal/50">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full bg-transparent border-b border-beige py-3 px-0 text-charcoal focus:outline-none focus:border-gold transition-colors"
                  onFocus={() => handleFocus('date')}
                  onBlur={handleBlur}
                  required
                />
                <label
                  htmlFor="date"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    isFocused('date') || document.getElementById('date')?.nodeValue
                      ? '-top-3 text-xs text-gold'
                      : '-top-3 text-xs text-gold' // Date input always has value or placeholder
                  }`}
                >
                  Preferred Date
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-beige py-3 px-0 text-charcoal focus:outline-none focus:border-gold transition-colors resize-none peer"
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  isFocused('message') || document.getElementById('message')?.nodeValue
                    ? '-top-3 text-xs text-gold'
                    : 'top-3 text-charcoal/50'
                }`}
              >
                Message (Optional)
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-charcoal text-white py-4 rounded-full font-medium hover:bg-gold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl mt-4"
            >
              Send Request
            </button>
          </form>
        </motion.div>

        {/* Right: Info & Map */}
        <motion.div
          className="flex-1 flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">Visit Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gold shrink-0 shadow-sm border border-beige">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-1">Address</h4>
                  <p className="text-charcoal/70">123 Style Street, Fashion District<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gold shrink-0 shadow-sm border border-beige">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-1">Phone</h4>
                  <p className="text-charcoal/70">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gold shrink-0 shadow-sm border border-beige">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-1">Email</h4>
                  <p className="text-charcoal/70">hello@toptrends.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gold shrink-0 shadow-sm border border-beige">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-1">Hours</h4>
                  <p className="text-charcoal/70">Mon–Sat: 9:00 AM – 8:00 PM<br />Sun: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-64 bg-beige/30 rounded-2xl overflow-hidden border border-beige relative group">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-charcoal/40 font-medium">Google Maps Embed</span>
            </div>
            {/* Real map iframe would go here */}
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1621530000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 transition-all duration-500 group-hover:filter-none"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
