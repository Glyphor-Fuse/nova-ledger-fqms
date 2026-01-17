import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TickerItem = ({ symbol, price, change }: { symbol: string, price: string, change: string }) => (
  <div className="flex items-center gap-3 px-6 py-2 border-r border-white/5">
    <span className="font-bold text-zinc-300">{symbol}</span>
    <span className="text-white font-mono">{price}</span>
    <span className={`text-xs ${change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
      {change}
    </span>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-indigo-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            V2.0 is live: Zero gas fees on deposits
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]"
          >
            <span className="block text-white">The architecture</span>
            <span className="block text-zinc-600">of modern wealth.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Execute trades with institutional-grade latency. Secure, decentralized, and built for the next generation of financial markets.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              Start Trading <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors"
            >
              View Documentation
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Ticker */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 w-full bg-zinc-900/50 backdrop-blur border-t border-white/5 py-3"
      >
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex">
                <TickerItem symbol="BTC" price="$64,231.40" change="+2.4%" />
                <TickerItem symbol="ETH" price="$3,452.12" change="+1.8%" />
                <TickerItem symbol="SOL" price="$148.90" change="+5.2%" />
                <TickerItem symbol="AVAX" price="$38.20" change="-0.4%" />
                <TickerItem symbol="LINK" price="$18.45" change="+3.1%" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};