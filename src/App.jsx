import Navbar from "./components/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import Problem from "./sections/Problem.jsx"
import Audience from "./sections/Audience.jsx"
import PlatformPreview from "./sections/PlatformPreview.jsx"
import Footer from "./components/Footer.jsx"
import { useLandingAnimations } from "./hooks/useLandingAnimations.js"

export default function App() {
  useLandingAnimations()
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Audience />
        <PlatformPreview />
      </main>
      <Footer />
    </div>
  )
}
