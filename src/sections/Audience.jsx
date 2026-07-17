import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ASSETS } from "../constants/assets.js"
import Reveal from "../components/Reveal.jsx"
import orabSvg from "../../orab.svg"

gsap.registerPlugin(ScrollTrigger)

const labels = [
  { className: "label-compliance", image: "/badge-compliance.png" },
  { className: "label-immigration", image: "/badge-immigration.png" },
  { className: "label-financial", image: "/Financial Institutions.png" },
  { className: "label-hr", image: "/HR & Recruitment Firms.png" },
  { className: "label-university", image: "/badge-university.png" },
]

export default function Audience() {
  const containerRef = useRef(null)
  const badgesRef = useRef([])

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 809
      const startRadius = isMobile ? 130 : 300
      const endRadius = isMobile ? 60 : 130
      const angleOffset = (Math.PI * 2) / labels.length

      const orbitState = { angle: 0, radius: startRadius }

      const updatePositions = () => {
        badgesRef.current.forEach((badge, index) => {
          if (!badge) return
          const currentAngle = -(orbitState.angle + index * angleOffset)
          const x = Math.cos(currentAngle) * orbitState.radius
          const y = Math.sin(currentAngle) * orbitState.radius

          gsap.set(badge, { x: x, y: y, xPercent: -50, yPercent: -50 })
        })
      }

      updatePositions()

      gsap.to(orbitState, {
        angle: Math.PI * 2,
        duration: 25,
        ease: "none",
        repeat: -1,
        onUpdate: updatePositions,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="industries" className="audience section" ref={containerRef} style={{ position: 'relative', zIndex: 4, background: 'transparent' }}>
      <img
        className="audience-glow"
        src={ASSETS.audienceGradient}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <Reveal className="section-heading">
        <span className="eyebrow">• Who It’s For</span>
        <h2 style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
          Built for workflows where <br />
          trust is non-negotiable.
        </h2>
        <p>Wherever credentials matter, Lorem handles the verification</p>
      </Reveal>
      <Reveal className="orbit" delay={0.1}>
        <img src={orabSvg} alt="" aria-hidden="true" className="orbit-bg" loading="lazy" />

        {labels.map((item, i) => (
          <div
            key={i}
            className={`orbit-label ${item.className}`}
            ref={(el) => (badgesRef.current[i] = el)}
          >
            <img src={item.image} alt="" aria-hidden="true" loading="lazy" />
          </div>
        ))}
      </Reveal>
    </section>
  )
}
