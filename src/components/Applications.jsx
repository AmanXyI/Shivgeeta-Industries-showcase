import { SECTORS, PROCESS } from '../data'
import { Reveal, SectionHeading } from './ui'

export default function Applications() {
  return (
    <section id="applications" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industry Applications"
          title="Solutions for every critical sector"
          text="From sterile operation theatres to high-rise escape routes, our doors and panels are specified wherever safety, hygiene and reliability are non-negotiable."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map(({ name, image, icon: Icon, text }, i) => (
            <Reveal as="li" key={name} delay={(i % 3) * 80} className="group relative h-64 overflow-hidden rounded-2xl">
              <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 backdrop-blur"><Icon size={20} /></span>
                <h3 className="mt-3 text-xl font-bold">{name}</h3>
                <p className="mt-1 text-sm text-slate-300">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-28">
          <SectionHeading
            eyebrow="Turnkey Execution"
            accent="text-clean"
            title="From concept to completion"
            text="A single accountable partner from first drawing to final handover."
          />
          <ol className="relative grid gap-8 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-safety via-slate-300 to-clean lg:block" aria-hidden />
            {PROCESS.map(({ title, text, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={i * 100} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-4 border-slate-50 bg-navy-900 text-white shadow-lg">
                  <Icon size={24} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-safety text-xs font-bold">{i + 1}</span>
                </span>
                <div>
                  <h3 className="font-bold lg:mt-4">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
