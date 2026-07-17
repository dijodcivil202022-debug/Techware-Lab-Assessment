import { ASSETS } from "../constants/assets.js"
import Reveal from "../components/Reveal.jsx"

const cards = [
  {
    title: "Create verification cases instantly",
    description: "Add the applicant and issuer. Hit send. Lorem notifies everyone and tracks every step.",
    image: "/card1.png",
  },
  {
    title: "Track real-time verification status",
    description: "See exactly where each case stands. No chasing emails. No manual follow-ups.",
    image: "/card2.png",
  },
  {
    title: "View applicant approval activity",
    description: "Know the moment an applicant consents. Every action is logged, timestamped, and auditable.",
    image: "/card3.png",
  },
  {
    title: "Access issuer-verified documents",
    description: "Signed at source. Delivered to your dashboard. Ready to reference whenever you need it.",
    image: "/card4.png",
  },
]

export default function PlatformPreview() {
  return (
    <section id="platform" className="platform section">
      <div className="platform-header">
        <div>
          <span className="eyebrow">• Platform Preview</span>
          <h2>Verify documents from a single dashboard.</h2>
        </div>
        <p>
          One dashboard to request, track, and receive verified credentials,
          from anywhere in the world.
        </p>
      </div>
      <div className="preview-stack">
        {cards.map((card, index) => {
          const topOffset = 15 + index * 4

          return (
            <div
              key={card.title}
              className="preview-card"
              style={{ top: `${topOffset}vh`, zIndex: index + 1 }}
            >
              <div className="preview-copy">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <img
                src={card.image}
                alt={`${card.title} preview`}
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
