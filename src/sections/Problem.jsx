import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const containerRef = useRef(null);
  const mainTextRef = useRef(null);
  const subTextRef = useRef(null);

  const [active, setActive] = useState(null);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActive(index);
    }
  };

  const getStyle = (index) => ({
    color: active === index ? '#2A2A2A' : 'rgba(43, 43, 43, 0.5)',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  });

  useGSAP(() => {
    gsap.set([mainTextRef.current, subTextRef.current], {
      y: 40,
      opacity: 0
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      }
    });

    tl.to(mainTextRef.current, {
      y: 0,
      opacity: 1,
      ease: 'power2.out'
    })
    .to(subTextRef.current, {
      y: 0,
      opacity: 1,
      ease: 'power2.out'
    }, "-=0.2");
  }, { scope: containerRef });

  return (
    <section id="solution" className="problem section" ref={containerRef} style={{ background: 'transparent' }}>
      <div className="problem-card" style={{ position: 'relative', padding: 0, background: 'transparent', border: 'none', boxShadow: 'none', width: '90%', margin: '0 auto', transformOrigin: 'bottom center' }}>
        <img
          src="/Folders.png"
          alt="Illustration of folders stacked securely"
          style={{ width: "100%", height: "auto", display: "block" }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '20%', background: 'linear-gradient(to bottom, transparent, var(--bg))', pointerEvents: 'none' }} />

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', padding: '0 8%', zIndex: 2 }}>
          <p ref={mainTextRef} style={{ margin: '0', textAlign: 'left' }}>
            <span className="sentence" style={getStyle(0)} role="button" tabIndex={0} onClick={() => setActive(0)} onKeyDown={(e) => handleKeyDown(e, 0)}>PDFs get forged. Emails get lost. Manual checks create liability.</span>
          </p>
          <p ref={subTextRef} style={{ margin: '0', textAlign: 'left' }}>
            <span className="sentence" style={getStyle(1)} role="button" tabIndex={0} onClick={() => setActive(1)} onKeyDown={(e) => handleKeyDown(e, 1)}>
              Lorem replaces static documents with cryptographically signed credentials issued directly from the source, with a full audit trail.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
