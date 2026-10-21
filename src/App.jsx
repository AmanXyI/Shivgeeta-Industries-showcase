import { useState } from 'react'
import { CATEGORIES } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Specs from './components/Specs'
import Infill from './components/Infill'
import Applications from './components/Applications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { goTo } from './components/ui'

export default function App() {
  const [cat, setCat] = useState('all')
  const [preset, setPreset] = useState(null)

  const quote = (category, message) => {
    setPreset({ category, message })
    goTo('contact')
  }

  return (
    <>
      <a href="#products" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
        Skip to products
      </a>
      <Header />
      <main>
        <Hero onCatalog={() => quote('Technical Catalog', 'Please share your complete technical catalog and price list.')} />
        <About />
        <Products
          cat={cat}
          setCat={setCat}
          onQuote={(id, title) => quote(CATEGORIES.find((c) => c.id === id).label, `Enquiry for: ${title}\nSize / quantity: `)}
        />
        <Specs />
        <Infill />
        <Applications />
        <Contact preset={preset} />
      </main>
      <Footer onCategory={(id) => { setCat(id); goTo('products') }} />
    </>
  )
}
