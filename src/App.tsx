import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-500/30">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <GlyphorBadge />
      </div>
    </Router>
  );
}

export default App;