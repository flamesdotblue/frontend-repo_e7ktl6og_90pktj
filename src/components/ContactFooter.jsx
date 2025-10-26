import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  message: z.string().min(10, 'Please provide a short message'),
});

export default function ContactFooter() {
  const formSchema = useMemo(() => schema, []);
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({ resolver: zodResolver(formSchema) });

  function onSubmit() {
    // Frontend-only: emulate success
    setTimeout(() => {
      reset();
      const el = document.getElementById('contact-success');
      if (el) {
        el.classList.remove('hidden');
        setTimeout(() => el.classList.add('hidden'), 3000);
      }
    }, 400);
  }

  return (
    <div>
      <section id="contact" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.12),transparent_50%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Let’s build with certainty</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Share a few details and our team will reach out within one business day.</p>
            <div className="mt-8 space-y-4 text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600" /> hello@buildedge.co</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-600" /> +1 (555) 123-9876</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600" /> 120 Market St, San Francisco, CA</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-white/40 dark:border-white/10 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                <input {...register('name')} className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" placeholder="Jane Doe" />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                <input {...register('email')} type="email" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" placeholder="you@company.com" />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Phone</label>
                <input {...register('phone')} className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" placeholder="(555) 000-0000" />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                <textarea {...register('message')} rows={4} className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about your project" />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-500">Send Message</button>
            <p id="contact-success" className={`mt-3 text-sm text-green-600 ${isSubmitSuccessful ? '' : 'hidden'}`}>Thanks! We’ll get back to you shortly.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-yellow-400" aria-hidden="true" />
            <div>
              <p className="font-medium text-slate-900 dark:text-white">BuildEdge</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Precision Construction Management</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#services" className="hover:text-slate-900 dark:hover:text-white">Services</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href="#process" className="hover:text-slate-900 dark:hover:text-white">Process</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} BuildEdge Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
