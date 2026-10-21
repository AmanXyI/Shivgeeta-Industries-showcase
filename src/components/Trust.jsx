import { Award } from 'lucide-react'
import { CERTS } from '../data'

export default function Trust() {
  return (
    <section aria-labelledby="trust-title" className="border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="trust-title" className="text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
          Certified Quality · Compliance You Can Trust
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {CERTS.map(({ title, sub }) => (
            <li key={title} className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-5 text-center transition hover:border-navy-900 hover:bg-white">
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-dashed border-navy-800 text-navy-800">
                <Award size={22} />
              </span>
              <span className="mt-3 text-sm font-extrabold leading-tight">{title}</span>
              <span className="mt-0.5 text-[11px] text-slate-500">{sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
