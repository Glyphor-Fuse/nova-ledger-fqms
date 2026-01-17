import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlyphorBadge = () => {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      const hidden = localStorage.getItem('glyphor-badge-hidden');
      return !hidden;
    } catch {
      return false;
    }
  });

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('glyphor-badge-hidden', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 py-2 px-4 rounded-full shadow-2xl shadow-black/50"
        >
          <span className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
            Made with 
            <img src="/glyphor-logo-white.png" alt="Glyphor" className="h-3 w-auto opacity-90" />
            Fuse
          </span>
          <button 
            onClick={handleClose}
            className="text-zinc-500 hover:text-white transition-colors p-1 hover:bg-zinc-800 rounded-full"
          >
            <X size={12} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};