import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="flex flex-col items-center justify-center p-6 border-l border-zinc-800 first:border-l-0 w-full">
    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
    <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{label}</div>
  </div>
);

export default function Index() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="border-y border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
              <StatItem value="$82B+" label="Quarterly Volume" />
              <StatItem value="2M+" label="Verified Users" />
              <StatItem value="<50ms" label="Order Latency" />
            </div>
          </div>
        </section>

        <Features />

        {/* Platform Showcase */}
        <section className="py-32 px-6 relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Professional grade. <br /><span className="text-zinc-600">For everyone.</span></h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Advanced charting, real-time depth, and one-click execution. The power of Wall Street in your pocket.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-zinc-800 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
              
              {/* Fake UI Header */}
              <div className="h-12 bg-zinc-900/90 border-b border-zinc-800 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
                <div className="ml-4 px-3 py-1 rounded bg-zinc-800/50 text-xs text-zinc-400 font-mono w-64">
                  aether.exchange/trade/BTC-USD
                </div>
              </div>

              {/* Main Image */}
              <div className="relative aspect-video bg-zinc-900">
                <img 
                  src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/32299899/pexels-photo-32299899.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Modern workspace with screens displaying cryptocurrency market data and trends."
    width="3000"
    height="2001"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/dynamic-workspace-for-cryptocurrency-analysis-32299899/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Jakub Zerdzicki on Pexels
    </a>
  </div>
</div>" 
                  alt="Trading Interface"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-indigo-950 to-zinc-950 border border-indigo-500/20 p-12 md:p-24 overflow-hidden text-center">
              
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to ascend?</h2>
                <p className="text-xl text-indigo-200 mb-10 max-w-xl mx-auto">
                  Join 2 million users trading on the most reliable crypto exchange platform.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="px-10 py-4 bg-white text-indigo-950 font-bold rounded-full hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-xl shadow-indigo-500/20">
                    Create Free Account
                  </button>
                  <button className="px-10 py-4 bg-transparent border border-indigo-400/30 text-indigo-100 font-medium rounded-full hover:bg-indigo-900/30 transition-all">
                    Contact Sales
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}