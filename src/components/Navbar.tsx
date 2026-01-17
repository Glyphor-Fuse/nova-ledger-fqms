import { motion } from 'framer-motion';
import { Menu, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4"
    >
      <div className="w-full max-w-6xl glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">AETHER</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Markets</a>
          <a href="#" className="hover:text-white transition-colors">Exchange</a>
          <a href="#" className="hover:text-white transition-colors">Governance</a>
          <a href="#" className="hover:text-white transition-colors">Learn</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Log In
          </a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-white text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <button className="md:hidden text-white p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};