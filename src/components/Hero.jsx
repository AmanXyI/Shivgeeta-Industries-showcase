import { ArrowRight, BadgeCheck, Download, Flame, ShieldCheck, Sparkles } from 'lucide-react'
import { img } from '../data'
import { Counter, goTo } from './ui'

const STATS = [
  { value: <><Counter to={120} /> Min</>, label: 'Fire Rating' },
  { value: <Counter to={6} />, label: 'Product Families' },
  { value: 'Est. 2022', label: 'Nagpur, India' },
  { value: <Counter to={100} suffix="%" />, label: 'Precision Engineered' },
]

export default function Hero({ onCatalog }) {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-safety/25 blur-3xl" aria-hidden />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-clean/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-200">
            <Sparkles size={14} className="text-amber-400" /> Built for Protection. Engineered for Life Safety.
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Engineered Spaces for a <span className="text-red-500">Safer</span> &amp; <span className="text-blue-400">Cleaner</span> Tomorrow
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Fire rated doors tested up to 120 minutes, airtight cleanroom &amp; hospital doors, acoustic and lead-lined
            radiation shielding doors, and PUF modular panels — manufactured in Nagpur for critical environments across India.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => goTo('products')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-safety px-6 py-3.5 font-bold shadow-xl shadow-red-900/40 transition hover:bg-red-700">
              Explore Products <ArrowRight size={18} />
            </button>
            <button onClick={onCatalog} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-bold transition hover:bg-white/10">
              <Download size={18} /> Request Technical Catalog
            </button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            {['Fire Rated up to 120 Min', 'Airtight Cleanroom Doors', 'Lead-Lined X-Ray Protection'].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><BadgeCheck size={16} className="text-emerald-400" />{t}</li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="grid grid-cols-5 grid-rows-6 gap-3 sm:h-[480px]">
            <figure className="col-span-3 row-span-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={img['fire-hero']} alt="Red double leaf fire exit door with panic bars" className="h-full w-full object-cover" />
            </figure>
            <figure className="col-span-2 row-span-3 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={img['range-cleanroom']} alt="Blue hospital cleanroom door with kick plate" className="h-full w-full object-cover object-top" />
            </figure>
            <figure className="col-span-2 row-span-3 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={img['puf-ot']} alt="Modular operation theatre with flush cleanroom door" className="h-full w-full object-cover" />
            </figure>
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-navy-900 shadow-2xl sm:-left-6">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-red-50 text-safety"><Flame size={20} /></span>
            <span className="text-sm leading-tight"><b className="block">Up to 120 Minutes</b><span className="text-slate-500">Fire integrity</span></span>
          </div>
          <div className="absolute -top-4 right-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-navy-900 shadow-2xl">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-clean"><ShieldCheck size={20} /></span>
            <span className="text-sm leading-tight"><b className="block">Airtight EPDM</b><span className="text-slate-500">Sterile sealing</span></span>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/60">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 px-6 lg:grid-cols-4 lg:divide-x">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-7 text-center lg:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
