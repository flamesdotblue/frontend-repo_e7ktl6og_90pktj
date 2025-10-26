import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            Precision Construction Management for Modern Builders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl"
          >
            We orchestrate planning, design, and execution with data-driven workflows, real-time oversight, and trusted partners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition">
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-5 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition">
              View Projects
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { label: 'Years', value: '12+' },
              { label: 'Projects', value: '320+' },
              { label: 'Partners', value: '80+' },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-white/40 dark:border-white/10 p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-semibold text-slate-900 dark:text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl border border-white/40 dark:border-white/10 bg-white/20 dark:bg-slate-900/20 backdrop-blur shadow-xl" />
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-yellow-400/10" />
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-500/20 to-yellow-300/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-slate-400/10 to-blue-300/10 blur-3xl" aria-hidden="true" />
    </section>
  );
}
