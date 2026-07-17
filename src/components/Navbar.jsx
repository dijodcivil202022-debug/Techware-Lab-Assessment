import { useState } from "react"
import { ASSETS } from "../constants/assets.js"

const links = [
  ["Home", "#hero"],
  ["Solution", "#solution"],
  ["Process", "#solution"],
  ["Industries", "#industries"],
  ["Platform", "#platform"],
  ["Contact", "#contact"],
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#hero" className="nav-logo" aria-label="Lorem home">
          <img src={ASSETS.logo} alt="Lorem logo" />
        </a>
        
        <div className="nav-links" aria-label="Page sections">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={label === "Home" ? "is-active" : ""}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="sign-in" href="#contact">
            Sign In ↗
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-content">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="sign-in-mobile"
            onClick={() => setIsOpen(false)}
            style={{ color: 'var(--gold)', fontWeight: 700 }}
          >
            Sign In ↗
          </a>
        </div>
      </div>
    </header>
  )
}
