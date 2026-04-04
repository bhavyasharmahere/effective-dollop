import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const SocialIcon = ({ icon, href }: { icon: string, href: string }) => {
  const icons: Record<string, React.ReactNode> = {
    github: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-1.51-2-2.88-3.65-2.88-2.35 0-4.32 1.78-4.32 4.12 0 .74.2 1.45.5 2.09C8.48 11.33 7.33 11.1 6.13 11.1C2.8 11.1 0 13.9 0 17.22c0 3.32 2.2 6.12 5.5 6.12 1.4 0 2.7-.4 3.8-1.1a2.4 2.4 0 0 0 2.4 0c1.1.7 2.4 1.1 3.8 1.1C21.8 23.34 24 20.54 24 17.22c0-3.32-2.2-6.12-5.5-6.12-1.4 0-2.7.4-3.8 1.1a2.4 2.4 0 0 0-2.4 0c-1.1-.7-2.4-1.1-3.8-1.1C2.8 11.1 0 8.3 0 5.01z" /></svg>,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
    twitter: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.4-20.4 13.9s1.4-13.9 13.9-16.4c1.3-.3 2.6-.5 3.9-.5z"/></svg>,
  };

  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
    >
      {icons[icon] || <span className="w-5 h-5">?</span>}
    </motion.a>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-purple-400 uppercase bg-purple-400/10 border border-purple-400/20 rounded-full">
            Available for hire
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8">
            {PORTFOLIO_DATA.name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            {PORTFOLIO_DATA.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 group transition-colors hover:bg-purple-100"
            >
              View Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            <div className="flex items-center gap-3">
              {PORTFOLIO_DATA.socials.map((social) => (
                <SocialIcon key={social.name} icon={social.icon} href={social.url} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
