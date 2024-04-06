import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Model from './components/Model'
import Hightlights from './components/Hightlights'

import * as Sentry from '@sentry/react'
import Features from './components/Features'

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
    </main>
  )
}

export default Sentry.withProfiler(App);