import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Model from './components/Model'
import Hightlights from './components/Hightlights'

import * as Sentry from '@sentry/react'

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
    </main>
  )
}

export default Sentry.withProfiler(App);