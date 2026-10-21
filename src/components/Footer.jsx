import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY, NAV, PRODUCTS, CATEGORIES } from '../data'
import { Logo } from './Header'
import { goTo } from './ui'

export default function Footer({ onCategory }) {
  return (
    <footer className="bg-navy-950 text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 leading-relaxed">{COMPANY.tagline}</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/10 px-4 py-2.5">
            <span className="flex h-5 w-7 flex-col overflow-hidden rounded-sm" aria-hidden>
              <span className="flex-1 bg-orange-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-green-600" />
            </span>
            <span className="font-bold tracking-wide text-white">MAKE IN INDIA</span>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map(({ id, label }) => <li key={id}><button onClick={() => goTo(id)} className="hover:text-white">{label}</button></li>)}
          </ul>
        </nav>

        <nav aria-label="Product catalog">
          <h3 className="font-bold text-white">Products</h3>
          <ul className="mt-4 space-y-2.5">
            {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
              <li key={c.id}>
                <button onClick={() => onCategory(c.id)} className="hover:text-white">
                  {c.label} <span className="text-slate-600">({PRODUCTS.filter((p) => p.category === c.id).length})</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0" />{COMPANY.address}</li>
            <li className="flex gap-2.5"><Phone size={16} className="mt-0.5 shrink-0" /><a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="hover:text-white">{COMPANY.phones[0]}</a></li>
            <li className="flex gap-2.5"><Mail size={16} className="mt-0.5 shrink-0" /><a href={`mailto:${COMPANY.emails[0]}`} className="break-all hover:text-white">{COMPANY.emails[0]}</a></li>
          </ul>
          <p className="mt-4 rounded-md bg-white/5 px-3 py-2 text-xs">GSTIN: <b className="text-white">{COMPANY.gst}</b></p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl space-y-2 px-6 py-6 text-xs text-slate-500">
          <p>
            Disclaimer: Product images, specifications and ratings are indicative and may vary with configuration, size and site conditions.
            Fire, acoustic and radiation performance applies to tested assemblies installed as per manufacturer guidelines. Shivgeeta Industries
            reserves the right to modify designs and specifications without prior notice.
          </p>
          <p>© 2026 {COMPANY.name}. All rights reserved. Est. {COMPANY.established} · Nagpur, Maharashtra, India.</p>
        </div>
      </div>
    </footer>
  )
}
