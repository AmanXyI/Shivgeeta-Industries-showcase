import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Check, Factory, Search, SearchX, X } from 'lucide-react'
import { CATEGORIES, PRODUCTS } from '../data'
import { SectionHeading } from './ui'

const catLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label
const isFire = (p) => p.category === 'fire' || p.category === 'shaft'

export default function Products({ cat, setCat, onQuote }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PRODUCTS.filter((p) => {
      if (cat !== 'all' && p.category !== cat) return false
      if (!q) return true
      return [p.title, p.desc, ...p.tags, ...p.sectors, catLabel(p.category)].join(' ').toLowerCase().includes(q)
    })
  }, [cat, query])

  const counts = useMemo(
    () => Object.fromEntries(CATEGORIES.map((c) => [c.id, c.id === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c.id).length])),
    [],
  )

  return (
    <section id="products" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Product Showcase"
          title="Engineered doors & panels for critical environments"
          text="Filter by category or search by feature, standard or application. Open any product for its full technical specification."
        />

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label="Product categories" className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cat === c.id}
                onClick={() => setCat(c.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  cat === c.id ? 'border-navy-900 bg-navy-900 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                }`}
              >
                {c.label}
                <span className={`rounded-full px-1.5 text-[11px] ${cat === c.id ? 'bg-white/15' : 'bg-slate-100'}`}>{counts[c.id]}</span>
              </button>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Search products</span>
            <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search e.g. SS 304, X-ray, panic bar"
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-clean focus:ring-4 focus:ring-blue-100"
            />
          </label>
        </div>

        <p className="sr-only" aria-live="polite">{list.length} products shown</p>

        {list.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <SearchX className="mx-auto text-slate-400" size={36} />
            <p className="mt-3 font-semibold">No products match “{query}”</p>
            <button onClick={() => { setQuery(''); setCat('all') }} className="mt-3 text-sm font-semibold text-clean hover:underline">Clear filters</button>
          </div>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((p) => (
              <li key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-slate-100 to-white">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105" />
                  <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${isFire(p) ? 'bg-safety' : 'bg-clean'}`}>
                    {catLabel(p.category)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">{t}</li>)}
                  </ul>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                  <button
                    onClick={() => setSelected(p)}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-navy-900 py-2.5 text-sm font-bold transition group-hover:bg-navy-900 group-hover:text-white"
                  >
                    View Technical Specs <ArrowRight size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selected && <SpecModal product={selected} onClose={() => setSelected(null)} onQuote={onQuote} />}
    </section>
  )
}

function SpecModal({ product: p, onClose, onQuote }) {
  const closeRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const prev = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return
      const items = panelRef.current.querySelectorAll('button, a[href]')
      const first = items[0], last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [onClose])

  const accent = isFire(p) ? 'text-safety' : 'text-clean'

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-navy-950/70 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="spec-title"
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-2xl flex-col overflow-hidden bg-white shadow-2xl animate-[slidein_.3s_ease-out]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${accent}`}>{catLabel(p.category)}</p>
            <h3 id="spec-title" className="mt-1 text-2xl font-extrabold">{p.title}</h3>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close specifications" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 hover:bg-slate-50">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="grid gap-6 sm:grid-cols-[200px_1fr]">
            <img src={p.image} alt={p.title} className="mx-auto max-h-64 w-full rounded-xl bg-slate-50 object-contain p-3" />
            <div>
              <p className="text-slate-600">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{t}</li>)}
              </ul>
            </div>
          </div>

          <h4 className="mt-8 text-sm font-bold uppercase tracking-widest text-slate-500">Technical Specifications</h4>
          <table className="mt-3 w-full overflow-hidden rounded-xl text-sm ring-1 ring-slate-200">
            <tbody>
              {Object.entries(p.specs).map(([k, v], i) => (
                <tr key={k} className={i % 2 ? 'bg-white' : 'bg-slate-50'}>
                  <th scope="row" className="w-2/5 px-4 py-2.5 text-left font-semibold text-slate-700">{k}</th>
                  <td className="px-4 py-2.5 text-slate-600">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Features & Hardware</h4>
              <ul className="mt-3 space-y-2">
                {p.features.map((f) => <li key={f} className="flex gap-2 text-sm text-slate-700"><Check size={16} className={`mt-0.5 shrink-0 ${accent}`} />{f}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Ideal For</h4>
              <ul className="mt-3 space-y-2">
                {p.sectors.map((s) => <li key={s} className="flex gap-2 text-sm text-slate-700"><Factory size={16} className="mt-0.5 shrink-0 text-slate-400" />{s}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row">
          <button
            onClick={() => { onClose(); onQuote(p.category, p.title) }}
            className={`flex-1 rounded-lg py-3 font-bold text-white ${isFire(p) ? 'bg-safety hover:bg-red-700' : 'bg-clean hover:bg-blue-700'}`}
          >
            Request Quote for this Product
          </button>
          <button onClick={onClose} className="rounded-lg border border-slate-300 px-6 py-3 font-semibold hover:bg-white">Close</button>
        </div>
      </div>
    </div>
  )
}
