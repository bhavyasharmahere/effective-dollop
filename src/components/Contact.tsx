import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's create something extraordinary.</h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <motion.a 
          href={`mailto:${PORTFOLIO_DATA.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-transform hover:bg-purple-50"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
          <Send className="w-4 h-4" />
        </motion.a>
      </motion.div>

      <footer className="mt-24 text-white/40 text-sm">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
      </footer>
    </section>
  );
};
