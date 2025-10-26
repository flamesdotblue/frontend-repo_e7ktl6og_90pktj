import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
