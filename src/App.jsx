import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Model from './components/Model'
import Hightlights from './components/Hightlights'

import * as Sentry from '@sentry/react'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default Sentry.withProfiler(App);