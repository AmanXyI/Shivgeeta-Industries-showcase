import { useEffect, useState } from 'react'
import { CheckCircle2, FileText, Loader2, Mail, MapPin, MessageCircle, Phone, PhoneCall } from 'lucide-react'
import { CATEGORIES, COMPANY } from '../data'
import { SectionHeading } from './ui'

const EMPTY = { name: '', phone: '', email: '', company: '', category: '', message: '' }
const OPTIONS = [...CATEGORIES.filter((c) => c.id !== 'all').map((c) => c.label), 'Technical Catalog', 'Turnkey Project']

function validate(f) {
  const e = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^\+?[\d\s-]{10,15}$/.test(f.phone.trim())) e.phone = 'Enter a valid 10-digit phone number.'
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Enter a valid email address.'
  if (!f.category) e.category = 'Select a product category.'
  return e
}

export default function Contact({ preset }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!preset) return
    setStatus('idle')
    setForm((f) => ({ ...f, category: preset.category, message: preset.message ?? f.message }))
  }, [preset])

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    // No backend yet: simulate the request. Wire this to your CRM / email API.
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  const field = 'w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:border-clean focus:ring-4 focus:ring-blue-100'
  const cls = (k) => `${field} ${errors[k] ? 'border-red-400' : 'border-slate-200'}`
  const err = (k) => errors[k] ? <p id={`e-${k}`} className="mt-1 text-xs font-medium text-red-600">{errors[k]}</p> : null
  const aria = (k) => ({ id: `f-${k}`, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `e-${k}` : undefined })

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Request for Quotation"
          title="Let’s engineer your next project"
          text="Share your requirement and our technical team will call you back with specifications, drawings and pricing."
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            {status === 'sent' ? (
              <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={32} /></span>
                <h3 className="mt-5 text-2xl font-extrabold">Thank you, {form.name.split(' ')[0]}!</h3>
                <p className="mt-2 max-w-sm text-slate-600">
                  Your enquiry for <b>{form.category}</b> has been received. Our team will call you on <b>{form.phone}</b> shortly.
                </p>
                <button onClick={() => { setForm(EMPTY); setStatus('idle') }} className="mt-6 text-sm font-bold text-clean hover:underline">
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="mb-1.5 block text-sm font-semibold">Full Name *</label>
                  <input {...aria('name')} value={form.name} onChange={set('name')} autoComplete="name" className={cls('name')} placeholder="Your name" />
                  {err('name')}
                </div>
                <div>
                  <label htmlFor="f-phone" className="mb-1.5 block text-sm font-semibold">Phone Number *</label>
                  <input {...aria('phone')} type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" className={cls('phone')} placeholder="+91 98XXX XXXXX" />
                  {err('phone')}
                </div>
                <div>
                  <label htmlFor="f-email" className="mb-1.5 block text-sm font-semibold">Email *</label>
                  <input {...aria('email')} type="email" value={form.email} onChange={set('email')} autoComplete="email" className={cls('email')} placeholder="you@company.com" />
                  {err('email')}
                </div>
                <div>
                  <label htmlFor="f-company" className="mb-1.5 block text-sm font-semibold">Company Name</label>
                  <input {...aria('company')} value={form.company} onChange={set('company')} autoComplete="organization" className={cls('company')} placeholder="Hospital / Builder / Consultant" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-category" className="mb-1.5 block text-sm font-semibold">Product Category Required *</label>
                  <select {...aria('category')} value={form.category} onChange={set('category')} className={cls('category')}>
                    <option value="">Select a category</option>
                    {OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  {err('category')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-message" className="mb-1.5 block text-sm font-semibold">Specifications / Message</label>
                  <textarea {...aria('message')} rows={4} value={form.message} onChange={set('message')} className={cls('message')} placeholder="Door sizes, quantity, fire rating, project location…" />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 rounded-lg bg-safety py-3.5 font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 disabled:opacity-70 sm:col-span-2"
                >
                  {status === 'sending' ? <Loader2 size={18} className="animate-spin" /> : <PhoneCall size={18} />}
                  {status === 'sending' ? 'Sending…' : 'Request Instant Call Back'}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-navy-900 p-7 text-white">
              <h3 className="text-lg font-bold">Factory & Registered Office</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-red-400" /><address className="not-italic text-slate-300">{COMPANY.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</address></li>
                <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-red-400" />
                  <span className="flex flex-col">{COMPANY.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="text-slate-300 hover:text-white">{p}</a>)}</span>
                </li>
                <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-red-400" />
                  <span className="flex flex-col break-all">{COMPANY.emails.map((m) => <a key={m} href={`mailto:${m}`} className="text-slate-300 hover:text-white">{m}</a>)}</span>
                </li>
                <li className="flex gap-3"><FileText size={18} className="mt-0.5 shrink-0 text-red-400" /><span className="text-slate-300">GSTIN: <b className="text-white">{COMPANY.gst}</b></span></li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 rounded-lg bg-white/10 py-2.5 text-sm font-bold hover:bg-white/20"><Phone size={16} /> Call Now</a>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-bold hover:bg-emerald-700"><MessageCircle size={16} /> WhatsApp</a>
              </div>
            </div>
            <div className="min-h-64 flex-1 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Shivgeeta Industries factory location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent('Pipla Bhadi, Savner, Nagpur, Maharashtra 441107')}&output=embed`}
                className="h-full min-h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
