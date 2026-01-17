import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: ElementType, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="group p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-indigo-500/30 transition-colors">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const Features = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for <span className="text-indigo-400">velocity</span>.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl">
            We've redesigned the trading engine from the ground up to handle institutional throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Zap}
            title="Microsecond Latency"
            desc="Order matching engine capable of 100,000 TPS with sub-millisecond settlement."
            delay={0.1}
          />
          <FeatureCard 
            icon={Shield}
            title="Ironclad Security"
            desc="Multi-sig cold storage wallets and real-time fraud detection systems."
            delay={0.2}
          />
          <FeatureCard 
            icon={Globe}
            title="Global Liquidity"
            desc="Aggregated liquidity from top centralized and decentralized exchanges."
            delay={0.3}
          />
          <FeatureCard 
            icon={Layers}
            title="Cross-Chain"
            desc="Seamlessly bridge assets across Ethereum, Solana, and L2 networks."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};