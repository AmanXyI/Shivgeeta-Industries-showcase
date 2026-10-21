import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { FINISHES, INFILLS, RAL_COLOURS } from '../data'
import { Reveal, SectionHeading } from './ui'

const isLight = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 > 150
}

export default function Infill() {
  const [core, setCore] = useState(INFILLS[1].id)
  const active = INFILLS.find((c) => c.id === core)

  return (
    <section id="infill" className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <div className="bg-grid-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          dark
          eyebrow="In-Fill Technology"
          title="What’s inside matters"
          text="The core of every door decides its fire, thermal, acoustic and shielding performance. Explore the infill engineered for each application."
        />

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Infill cores" aria-orientation="vertical" className="flex gap-3 overflow-x-auto lg:flex-col">
            {INFILLS.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={core === id}
                aria-controls="infill-panel"
                onClick={() => setCore(id)}
                className={`flex min-w-60 items-center gap-3 rounded-xl border p-4 text-left transition lg:min-w-0 ${
                  core === id ? 'border-red-500 bg-white/10' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'
                }`}
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${core === id ? 'bg-safety' : 'bg-white/10'}`}><Icon size={20} /></span>
                <span className="font-semibold">{name}</span>
              </button>
            ))}
          </div>

          <div id="infill-panel" role="tabpanel" aria-labelledby={`tab-${core}`} key={core} className="grid gap-6 rounded-2xl bg-white p-6 text-navy-900 md:grid-cols-2 animate-[fadein_.35s_ease-out]">
            <img src={active.image} alt={`${active.name} cross-section`} className="w-full rounded-xl bg-slate-50 object-contain" />
            <div>
              <h3 className="text-2xl font-extrabold">{active.name}</h3>
              <p className="mt-3 text-slate-600">{active.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {active.points.map((pt) => <li key={pt} className="flex gap-2 text-sm"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />{pt}</li>)}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {active.badges.map((b) => <li key={b} className="rounded-full bg-navy-900 px-3 py-1 text-xs font-bold text-white">{b}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <Reveal className="mt-20">
          <FinishPreviewer />
        </Reveal>
      </div>
    </section>
  )
}

function FinishPreviewer() {
  const [colour, setColour] = useState(RAL_COLOURS[0])
  const [finish, setFinish] = useState(FINISHES[0])
  const glass = isLight(colour.hex) ? '#9DB4C8' : '#BFDBFE'

  return (
    <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
      <div className="flex justify-center">
        <figure className="relative" aria-label={`Door preview in ${colour.code} ${colour.name}, ${finish.name} finish`}>
          <div className="relative h-[360px] w-[200px] rounded-sm bg-slate-300 p-2.5 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-[2px] transition-colors duration-500" style={{ backgroundColor: colour.hex }}>
              {finish.id !== 'matt' && finish.id !== 'glossy' && (
                <img src={finish.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay" />
              )}
              {finish.id === 'glossy' && <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-transparent to-transparent" />}
              {finish.id === 'metallic' && <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/5" />}
              <div className="absolute left-1/2 top-12 h-24 w-14 -translate-x-1/2 rounded-sm border-[3px] border-black/20" style={{ backgroundColor: glass }} />
              <div className="absolute right-4 top-[170px] h-20 w-2.5 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 shadow" />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-slate-300 to-slate-400 opacity-80" />
            </div>
          </div>
          <figcaption className="mt-4 text-center text-sm">
            <b>{colour.code}</b> · {colour.name} · <span className="text-slate-400">{finish.name}</span>
          </figcaption>
        </figure>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Finishes & Colours</p>
        <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">RAL colour previewer</h3>
        <p className="mt-3 text-slate-300">80-micron powder coating in any RAL shade. Pick a colour and finish to preview it on a door leaf.</p>

        <fieldset className="mt-7">
          <legend className="text-sm font-semibold text-slate-300">Colour</legend>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {RAL_COLOURS.map((c) => (
              <button
                key={c.code}
                onClick={() => setColour(c)}
                aria-pressed={colour.code === c.code}
                className={`rounded-lg p-1.5 text-left transition ${colour.code === c.code ? 'bg-white text-navy-900' : 'hover:bg-white/10'}`}
              >
                <span className="block h-10 rounded-md ring-1 ring-black/10" style={{ backgroundColor: c.hex }} />
                <span className="mt-1.5 block text-[11px] font-bold leading-tight">{c.code}</span>
                <span className={`block text-[10px] ${colour.code === c.code ? 'text-slate-500' : 'text-slate-400'}`}>{c.name}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-sm font-semibold text-slate-300">Finish</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {FINISHES.map((f) => (
              <button
                key={f.id}
                onClick={() => setFinish(f)}
                aria-pressed={finish.id === f.id}
                title={f.note}
                className={`flex items-center gap-2 rounded-full border py-1 pl-1 pr-4 text-sm font-semibold transition ${
                  finish.id === f.id ? 'border-white bg-white text-navy-900' : 'border-white/15 hover:bg-white/10'
                }`}
              >
                <img src={f.image} alt="" className="h-7 w-7 rounded-full object-cover" />{f.name}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-400">{finish.note}</p>
        </fieldset>
      </div>
    </div>
  )
}
