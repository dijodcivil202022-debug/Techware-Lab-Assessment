import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ASSETS } from "../constants/assets.js"
import Button from "../components/Button.jsx"
import Reveal from "../components/Reveal.jsx"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const phoneRef = useRef(null)
  const leftCardRef = useRef(null)
  const rightCardRef = useRef(null)

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1025px)",
      isTablet: "(min-width: 810px) and (max-width: 1024px)",
      isMobile: "(max-width: 809px)"
    }, (context) => {
      let { isMobile, isTablet } = context.conditions;

      const yPhone = isMobile ? 100 : 120;
      const yLeft = isMobile ? 160 : 180;
      const yRight = isMobile ? 180 : 200;

      gsap.set(phoneRef.current, { y: yPhone })
      gsap.set(leftCardRef.current, { y: yLeft })
      gsap.set(rightCardRef.current, { y: yRight })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      })

      tl.to(phoneRef.current, { y: 0, ease: "none" }, 0)
        .to(leftCardRef.current, { y: 0, ease: "none" }, 0)
        .to(rightCardRef.current, { y: 0, ease: "none" }, 0)
    });
  }, { scope: containerRef })

  return (
    <section id="hero" className="hero section" ref={containerRef}>
      <img
        className="hero-glow"
        src={ASSETS.heroGradient}
        alt=""
        aria-hidden="true"
      />
      <Reveal className="hero-copy">
        <img
          src="/heading1.png"
          alt="Verification That Starts At The Source"
          style={{ width: "100%", maxWidth: "1420px", margin: "0 auto", display: "block" }}
        />
        <div className="hero-actions">
          <Button href="#contact">
            Book a Demo
            <b>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </b>
          </Button>
          <Button href="#platform" variant="secondary">
            See how it works ↗
          </Button>
        </div>
      </Reveal>
      <div className="hero-product">
        <img
          ref={phoneRef}
          className="phone-img"
          src={ASSETS.phone}
          alt="Mobile verification dashboard preview"
        />
        <div ref={leftCardRef} className="floating-card floating-card--left" style={{ zIndex: 30 }}>
          <div className="avatar-stack" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div>
            <strong>250+</strong>
            <span>trusted organizations</span>
          </div>
        </div>
        <div ref={rightCardRef} className="floating-card floating-card--right" style={{ zIndex: 30 }}>
          <div className="seal" style={{ background: '#ffffff', opacity: 0.9, border: '1px solid #f0f0f0' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-5deg)' }}>
              <rect x="3" y="3" width="14" height="14" rx="2" fill="#ffffff" />
              <rect x="7" y="7" width="14" height="14" rx="2" fill="#ffffff" />
            </svg>
          </div>
          <div>
            <strong>10,000+</strong>
            <span>credentials verified securely</span>
          </div>
        </div>
      </div>
    </section>
  )
}
