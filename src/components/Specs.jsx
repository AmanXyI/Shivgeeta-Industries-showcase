import { Reveal, SectionHeading } from './ui'

const COLS = ['Fire Rated', 'Cleanroom & Hospital', 'Shaft & Utility', 'Acoustic', 'Radiation Shielding', 'PUF Panels']

const ROWS = [
  ['Key Performance', ['Up to 120 min (IS / BS / EN 1634-1)', 'Airtight, flush, antimicrobial', 'Fire-rated & secure riser access', 'STC 40 – 48 dB', '1.0 / 1.5 / 2.0 / 3.0 mm Pb', 'Air tightness ≤ 0.3 m³/hr/m²']],
  ['Core / Infill', ['Rockwool + GI stiffeners', 'Honeycomb / PUF', 'Rockwool / Honeycomb', 'Acoustic mineral wool', 'Lead sheet + Honeycomb', 'PUF / Aluminium honeycomb']],
  ['Material', ['GI / Galvalume', 'GI powder coated / SS 304', 'GI powder coated', 'GI / Galvalume', 'GI / Galvalume, SS optional', 'PPGI / SS 304 skins']],
  ['Leaf / Panel Thickness', ['40 / 50 / 60 mm', '40 / 50 / 60 mm', '40 / 50 mm', '50 mm (custom)', '50 mm (custom)', '50 / 60 / 80 / 100 mm']],
  ['Sealing', ['Intumescent smoke seal', 'EPDM airtight gasket', 'Smoke / dust seal', 'Perimeter + drop seal', 'Radiation & drop seal', 'Silicone-sealed T&G']],
  ['Variants', ['Single, Double, Unequal, Solid, Vision', 'GI, SS 304, Double glazed, Hatch', 'Fire, Electrical, LV', 'Single, Double, with / without glass', 'Single, Double, custom', 'Wall, Ceiling, Coving, Corners']],
  ['Standards', ['IS / BS / EN 1634-1, EN 1125, EN 1154', 'GMP practices', 'National Building Code', 'STC tested configs', 'AERB, NCRP, IAEA', 'GMP / cleanroom practices']],
]

export default function Specs() {
  return (
    <section id="specs" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technical Specs"
          accent="text-clean"
          title="Compare specifications at a glance"
          text="Standard configurations for each product family. Every opening can be customised to your drawings, sizes and compliance requirements."
        />
        <Reveal className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[960px] text-left text-sm">
            <caption className="sr-only">Specification comparison across Shivgeeta product families</caption>
            <thead className="bg-navy-900 text-white">
              <tr>
                <th scope="col" className="sticky left-0 bg-navy-900 px-5 py-4 font-bold">Parameter</th>
                {COLS.map((c, i) => (
                  <th key={c} scope="col" className="px-5 py-4 font-bold">
                    <span className={`mr-2 inline-block h-2 w-2 rounded-full ${i === 0 || i === 2 ? 'bg-red-500' : 'bg-blue-400'}`} />{c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, vals], r) => (
                <tr key={label} className={r % 2 ? 'bg-slate-50' : 'bg-white'}>
                  <th scope="row" className={`sticky left-0 px-5 py-4 font-semibold text-navy-900 ${r % 2 ? 'bg-slate-50' : 'bg-white'}`}>{label}</th>
                  {vals.map((v, i) => <td key={i} className="px-5 py-4 text-slate-600">{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-4 text-xs text-slate-500">Max standard sizes: single leaf up to 1200 × 2500 mm, double leaf up to 2400 × 2500 mm. Larger openings on request.</p>
      </div>
    </section>
  )
}
