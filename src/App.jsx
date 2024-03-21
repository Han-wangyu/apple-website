import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Model from './components/Model'
import Hightlights from './components/Hightlights'


export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
    </main>
  )
}