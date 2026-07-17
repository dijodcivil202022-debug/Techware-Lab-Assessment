import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
export function useLandingAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      /**
       * Global defaults
       */
      gsap.defaults({
        ease: "power3.out",
        duration: 0.9,
      })
      /**
       * HERO INTRO
       */
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      })
      heroTimeline
        .from(".navbar", {
          y: -28,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".hero-copy img",
          {
            y: 46,
            opacity: 0,
            duration: 1,
          },
          "-=0.35"
        )
        .from(
          ".hero-actions .button",
          {
            y: 22,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".phone-img",
          {
            y: 80,
            scale: 0.94,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.45"
        )
      // Hero parallax animations are now handled inside Hero.jsx
      // Floating cards animations are now handled inside Hero.jsx
      gsap.to(".hero-glow", {
        y: -80,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      })
      /**
       * PROBLEM PANEL REVEAL
       */
      gsap.from(".problem-card", {
        y: 80,
        scale: 0.96,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".problem",
          start: "top 72%",
        },
      })
      gsap.from(".problem-card h2", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        scrollTrigger: {
          trigger: ".problem-card",
          start: "top 68%",
        },
      })
      gsap.from(".problem-card p", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        delay: 0.12,
        scrollTrigger: {
          trigger: ".problem-card",
          start: "top 68%",
        },
      })
      /**
       * AUDIENCE SECTION
       */
      gsap.from(".audience .section-heading > *", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.85,
        scrollTrigger: {
          trigger: ".audience",
          start: "top 72%",
        },
      })
      gsap.from(".orbit-label", {
        scale: 0.7,
        opacity: 0,
        stagger: 0.09,
        duration: 0.8,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".orbit",
          start: "top 72%",
        },
      })

      const orbitState = { angle: 0, radius: 255 }
      const badges = gsap.utils.toArray(".orbit-label")

      const updateBadges = () => {
        badges.forEach((badge, i) => {
          const angleOffset = (i / badges.length) * Math.PI * 2
          const currentAngle = orbitState.angle + angleOffset
          const x = Math.cos(currentAngle) * orbitState.radius
          const y = Math.sin(currentAngle) * orbitState.radius

          gsap.set(badge, { x, y })
        })
      }

      updateBadges()

      gsap.to(orbitState, {
        angle: Math.PI * 2,
        duration: 20,
        ease: "none",
        repeat: -1,
        onUpdate: updateBadges,
      })

      gsap.to(orbitState, {
        radius: 195,
        duration: 8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      /**
       * FOOTER REVEAL
       */
      gsap.from(".footer", {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 82%",
        },
      })
      gsap.from(".footer-col", {
        y: 32,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 75%",
        },
      })
      gsap.to(".footer-glow--gold", {
        x: 60,
        scale: 1.12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.to(".footer-glow--blue", {
        x: -60,
        scale: 1.15,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

    })
    return () => ctx.revert()
  }, [])
}
