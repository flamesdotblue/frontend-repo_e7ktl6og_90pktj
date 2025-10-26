import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Clock, Users, Star } from 'lucide-react';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const features = [
  { icon: Building2, title: 'End-to-End Control', desc: 'From planning to handover with transparent reporting.' },
  { icon: Shield, title: 'Risk Mitigation', desc: 'Compliance-first approach, safety and budget certainty.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Scheduling discipline powered by real-time dashboards.' },
  { icon: Users, title: 'Trusted Network', desc: 'Curated partners and vendors for any project scale.' },
];

const services = [
  {
    title: 'Project Planning',
    desc: 'Feasibility, budgeting, and critical path scheduling for predictable outcomes.',
  },
  {
    title: 'Design Management',
    desc: 'Coordination across architects, engineers, and consultants with version control.',
  },
  {
    title: 'Construction Oversight',
    desc: 'Quality control, site safety, and progress tracking with daily logs.',
  },
  {
    title: 'Procurement',
    desc: 'Vendor selection, contract administration, and material logistics at scale.',
  },
];

const projects = [
  {
    id: 1,
    title: 'Skyline Tower',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Harbor Residences',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'North Industrial Park',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1759070910017-dbb2df88b852?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3J0aCUyMEluZHVzdHJpYWwlMjBQYXJrfGVufDB8MHx8fDE3NjE0ODg0MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Metro HQ',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 5,
    title: 'Courtyard Homes',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 6,
    title: 'Logistics Hub',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

const testimonials = [
  { name: 'Alex Rivera', role: 'Director, MetroBuild', quote: 'Disciplined processes and impeccable delivery. We finished ahead of schedule.', avatar: 'https://i.pravatar.cc/100?img=11' },
  { name: 'Priya Desai', role: 'Partner, Harbor Group', quote: 'Their reporting clarity and risk management made complex work simple.', avatar: 'https://i.pravatar.cc/100?img=32' },
  { name: 'Daniel Wu', role: 'CEO, Skyline Dev', quote: 'The team you want when quality and certainty truly matter.', avatar: 'https://i.pravatar.cc/100?img=5' },
];

export default function Showcase() {
  return (
    <div>
      <WhyUs />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Partners />
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mx-auto max-w-3xl">
      <p className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>
      )}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-white/40 dark:border-white/10 p-6 shadow-sm">
      {children}
    </div>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.12),transparent_50%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Reliable outcomes through disciplined management"
          subtitle="A framework designed for certainty: quality, timing, and budget."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-yellow-400 p-[2px]">
                    <div className="h-full w-full rounded-[10px] bg-white dark:bg-slate-950 flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Expertise across the construction lifecycle"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-900 dark:text-white">{s.title}</h3>
                <Star className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-blue-600">Learn more</summary>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Our team deploys proven PMO practices, detailed risk registers, and weekly reporting cadence to keep all stakeholders aligned.</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const categories = ['All', 'Commercial', 'Residential', 'Industrial'];
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setLightbox(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="projects" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Projects" title="Selected work" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === c
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur"
            >
              <ImageWithPlaceholder src={p.image} alt={p.title} className="aspect-[4/3]" onClick={() => setLightbox(p)} />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-gradient-to-t from-slate-900/70 to-transparent text-white">
                <div>
                  <h4 className="font-medium">{p.title}</h4>
                  <p className="text-xs opacity-80">{p.category}</p>
                </div>
                <span className="text-xs rounded-full bg-white/20 px-2 py-1">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
            onClick={() => setLightbox(null)}
          >
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={lightbox.image} alt={lightbox.title} className="w-full rounded-xl" />
              <div className="mt-3 text-white/90">
                <h4 className="text-lg font-medium">{lightbox.title}</h4>
                <p className="text-sm opacity-80">{lightbox.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: 'Planning', desc: 'Scope, budget, schedule, and risk register.' },
    { title: 'Design', desc: 'Iterative design management and approvals.' },
    { title: 'Execution', desc: 'Site supervision, QA/QC, and progress control.' },
    { title: 'Handover', desc: 'Commissioning, documentation, and closeout.' },
  ];
  return (
    <section id="process" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Process" title="Our workflow" />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-white/40 dark:border-white/10 p-6"
            >
              <div className="absolute -top-3 left-6 h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 shadow" />
              <h4 className="font-medium text-slate-900 dark:text-white">{i + 1}. {s.title}</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="testimonials" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="Clients who trust us" />
        <div className="mt-10">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-full px-4">
                  <div className="mx-auto max-w-3xl rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-white/40 dark:border-white/10 p-8 text-center shadow">
                    <img src={t.avatar} alt={t.name} className="mx-auto h-14 w-14 rounded-full object-cover" />
                    <p className="mt-6 text-lg text-slate-800 dark:text-slate-200">“{t.quote}”</p>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">{t.name} · {t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${index === i ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_N_logo.svg/320px-Netflix_2015_N_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Logo.svg/320px-Google_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png',
  ];
  return (
    <section className="relative pb-10 -mt-6">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="Partner logo" className="mx-auto h-8 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
