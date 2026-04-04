import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Expertise' },
  { id: 'contact', label: 'Connect' },
];

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeSection === item.id 
                ? "bg-white text-black" 
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};
