import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled
        ? 'backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 shadow-sm'
        : 'bg-transparent'
    }`}
    aria-label="Main Navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-yellow-400 shadow-md" aria-hidden="true" />
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">BuildEdge</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900">
              Get Quote
            </a>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70 backdrop-blur hover:scale-105 transition"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70 backdrop-blur"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70 backdrop-blur"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 dark:text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
