import { useEffect, useState } from 'react'
import { FileText, MapPin, Menu, Phone, X } from 'lucide-react'
import { COMPANY, NAV } from '../data'
import { goTo } from './ui'

export function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-navy-900 ring-1 ring-white/10">
        <span className="h-6 w-4 rounded-[3px] bg-safety" />
        <span className="absolute left-[15px] top-[11px] h-2.5 w-1.5 rounded-sm bg-blue-200" />
      </span>
      <span className="leading-tight">
        <span className={`block text-[15px] font-extrabold tracking-wide ${light ? 'text-white' : 'text-navy-900'}`}>SHIVGEETA</span>
        <span className={`block text-[10px] font-bold tracking-[0.3em] ${light ? 'text-slate-400' : 'text-slate-500'}`}>INDUSTRIES</span>
      </span>
    </span>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const nav = (id) => {
    setOpen(false)
    goTo(id)
  }

  return (
    <>
      <div className="hidden bg-navy-950 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><FileText size={13} className="text-slate-400" /> GSTIN: <b className="font-semibold text-white">{COMPANY.gst}</b></span>
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-slate-400" /> Nagpur, Maharashtra</span>
            <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone size={13} className="text-slate-400" /> {COMPANY.phones[0]}
            </a>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 font-semibold">
            <span className="flex h-3 w-4 flex-col overflow-hidden rounded-[2px]" aria-hidden>
              <span className="flex-1 bg-orange-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-green-600" />
            </span>
            Make in India
          </span>
        </div>
      </div>

      <header className={`sticky top-0 z-40 border-b transition-all ${scrolled ? 'border-slate-200 bg-white/90 shadow-sm backdrop-blur' : 'border-transparent bg-white'}`}>
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
          <button onClick={() => nav('home')} aria-label="Shivgeeta Industries home"><Logo /></button>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => nav(id)}
                    aria-current={active === id ? 'true' : undefined}
                    className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition-colors ${active === id ? 'text-safety' : 'text-slate-600 hover:text-navy-900'}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => nav('contact')} className="hidden whitespace-nowrap rounded-lg bg-safety px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 sm:block">
              Get a Quote
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-slate-200 bg-white px-6 pb-6 xl:hidden">
            <ul className="py-2">
              {NAV.map(({ id, label }) => (
                <li key={id}>
                  <button onClick={() => nav(id)} className={`w-full py-3 text-left font-semibold ${active === id ? 'text-safety' : 'text-slate-700'}`}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => nav('contact')} className="w-full rounded-lg bg-safety py-3 font-bold text-white">Get a Quote</button>
          </nav>
        )}
      </header>
    </>
  )
}
