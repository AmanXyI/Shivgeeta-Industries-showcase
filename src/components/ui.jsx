import { useEffect, useRef, useState } from 'react'

export function SectionHeading({ eyebrow, title, text, dark = false, center = true, accent = 'text-safety' }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${accent}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}

// Fades children in once they scroll into view.
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true)
        io.disconnect()
      }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

// Counts up to `to` when first visible.
export function Counter({ to, suffix = '', duration = 1400 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1)
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

export const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
