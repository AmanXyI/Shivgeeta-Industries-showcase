import { CheckCircle2, Eye, Gem, Leaf, Target } from 'lucide-react'
import { COMPANY, img } from '../data'
import { Reveal, SectionHeading } from './ui'

const HIGHLIGHTS = [
  'In-house CNC fabrication, press-brake forming & powder coating',
  'Every door built to tested configurations and compliance standards',
  'Turnkey supply & installation across India',
  'Eco-conscious processes and recyclable infill materials',
]

const PILLARS = [
  {
    icon: Target, title: 'Our Mission', tone: 'bg-red-50 text-safety',
    body: 'To engineer doors and partition systems that protect lives, keep critical spaces sterile, and perform reliably for decades — delivered with honesty, precision and on-time execution.',
  },
  {
    icon: Eye, title: 'Our Vision', tone: 'bg-blue-50 text-clean',
    body: 'To be India’s most trusted name in life-safety and cleanroom building envelopes, recognised for engineering quality, compliance and sustainable manufacturing.',
  },
  {
    icon: Gem, title: 'Our Values', tone: 'bg-amber-50 text-amber-600',
    list: ['Safety First', 'Quality & Integrity', 'Customer Focus', 'Continuous Innovation', 'Sustainability', 'Teamwork & Respect'],
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="bg-dots absolute inset-x-0 top-0 h-64 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={img['cr-hero']} alt="Cleanroom corridor fitted with blue cleanroom doors and flush vision windows" className="aspect-[4/3] w-full rounded-2xl object-cover object-left shadow-xl" />
            <img src={img['shaft-electrical']} alt="Grey electrical shaft doors, single and double leaf" className="absolute -bottom-8 -right-4 hidden w-56 rounded-xl border-4 border-white object-cover shadow-xl sm:block" />
            <div className="absolute -left-4 -top-6 rounded-xl bg-navy-900 px-5 py-4 text-white shadow-xl">
              <p className="text-3xl font-extrabold">{COMPANY.established}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Established</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              center={false}
              eyebrow="About Shivgeeta Industries"
              title="Trusted solutions for safer, healthier spaces"
            />
            <div className="-mt-6 space-y-4 text-slate-600">
              <p>
                Shivgeeta Industries is a Nagpur-based manufacturer of <b className="text-navy-900">fire rated doors, cleanroom &amp; hospital doors,
                shaft doors, acoustic doors, lead-lined radiation doors</b> and <b className="text-navy-900">PUF modular wall &amp; ceiling panels</b>.
              </p>
              <p>
                From our modern facility at Savner, Nagpur, we combine precision engineering with strict quality control, so every
                opening meets the fire, hygiene, acoustic or shielding performance it was specified for — in hospitals, pharma plants,
                high-rise buildings, factories and institutions.
              </p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />{h}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              <Leaf size={18} className="shrink-0" /> Committed to safety compliance and sustainable, low-waste manufacturing.
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, tone, body, list }, i) => (
            <Reveal key={title} delay={i * 100} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${tone}`}><Icon size={24} /></span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              {body && <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>}
              {list && (
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  {list.map((v) => <li key={v} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-safety" />{v}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
