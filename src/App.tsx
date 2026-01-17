import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-500/30">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;