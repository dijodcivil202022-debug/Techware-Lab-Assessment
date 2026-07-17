import { useEffect, useState, useRef } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // Intersection observer for lazy loading the video
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it becomes visible, we can disconnect to stop observing
          observer.disconnect(); 
        }
      },
      { 
        // Start loading the video just before it enters the viewport
        rootMargin: '0px 0px 200px 0px' 
      }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className="footer" ref={footerRef}>
      {isVisible && !isReducedMotion && (
        <video
          className="footer-video-bg"
          autoPlay
          muted
          loop
          playsInline
          src="/footer_video.mp4"
        />
      )}
      <div className="footer-overlay" />
      
      <div className="footer-glow footer-glow--gold" />
      <div className="footer-glow footer-glow--blue" />
      <div className="footer-col">
        <h2>Product</h2>
        <a href="#hero">Overview</a>
        <a href="#solution">Solutions</a>
        <a href="#solution">Process</a>
        <a href="#platform">Platform Preview</a>
        <a href="#contact">Pricing</a>
        <a href="#contact">Request Demo</a>
      </div>
      <div className="footer-col">
        <h2>Company & Resources</h2>
        <a href="#contact">Terms of Service</a>
        <a href="#contact">Privacy Policy</a>
        <a href="#contact">FAQs</a>
      </div>
      <div className="footer-col">
        <h2>Contact</h2>
        <div className="contact-item">
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0C3.134 0 0 3.134 0 7C0 12.25 7 18 7 18C7 18 14 12.25 14 7C14 3.134 10.866 0 7 0ZM7 9.5C5.619 9.5 4.5 8.381 4.5 7C4.5 5.619 5.619 4.5 7 4.5C8.381 4.5 9.5 5.619 9.5 7C9.5 8.381 8.381 9.5 7 9.5Z" fill="#8C8C8C"/>
          </svg>
          <p>USA</p>
        </div>
        <div className="contact-item">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.545 11.233C13.468 11.233 12.417 11.06 11.419 10.73C11.107 10.627 10.757 10.7 10.518 10.941L8.983 12.871C6.671 11.815 4.793 9.937 3.737 7.625L5.668 6.09C5.908 5.851 5.98 5.501 5.877 5.19C5.547 4.192 5.375 3.141 5.375 2.063C5.375 1.478 4.9 1 4.313 1H1.5C0.914 1 0.231 1.258 0.057 1.838C-0.34 3.145 1.503 14.73 14.162 15.943C14.742 15.769 15 15.086 15 14.5V11.688C15 11.102 14.522 10.625 13.938 10.625H14.545V11.233Z" fill="#8C8C8C"/>
          </svg>
          <p>+971 51 547 3625</p>
        </div>
      </div>
      <div className="footer-col">
        <h2>Connect</h2>
        <div className="socials" aria-label="Social links">
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13333 14H0V4.66667H3.13333V14ZM1.56667 3.38333C0.7 3.38333 0 2.68333 0 1.81667C0 0.95 0.7 0.25 1.56667 0.25C2.43333 0.25 3.13333 0.95 3.13333 1.81667C3.13333 2.68333 2.43333 3.38333 1.56667 3.38333ZM14 14H10.8667V9.45C10.8667 8.36667 10.8667 6.96667 9.33333 6.96667C7.76667 6.96667 7.53333 8.18333 7.53333 9.36667V14H4.4V4.66667H7.4V5.93333H7.45C7.86667 5.13333 8.9 4.41667 10.2 4.41667C13.15 4.41667 14 6.35 14 8.9V14Z" fill="white"/></svg>
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 3.40039C5.01667 3.40039 3.4 5.01706 3.4 7.00039C3.4 8.98372 5.01667 10.6004 7 10.6004C8.98333 10.6004 10.6 8.98372 10.6 7.00039C10.6 5.01706 8.98333 3.40039 7 3.40039ZM7 9.40039C5.68333 9.40039 4.6 8.31706 4.6 7.00039C4.6 5.68372 5.68333 4.60039 7 4.60039C8.31667 4.60039 9.4 5.68372 9.4 7.00039C9.4 8.31706 8.31667 9.40039 7 9.40039ZM11.6 3.20039C11.6 3.64222 11.2418 4.00039 10.8 4.00039C10.3582 4.00039 10 3.64222 10 3.20039C10 2.75856 10.3582 2.40039 10.8 2.40039C11.2418 2.40039 11.6 2.75856 11.6 3.20039ZM13.9 4.15039C13.8667 3.01706 13.6167 2.05039 12.8333 1.26706C12.05 0.483724 11.0833 0.217057 9.95 0.183724C8.78333 0.150391 5.23333 0.150391 4.06667 0.183724C2.93333 0.217057 1.96667 0.483724 1.18333 1.26706C0.4 2.05039 0.133333 3.01706 0.1 4.15039C0.0666667 5.31706 0.0666667 8.86706 0.1 10.0337C0.133333 11.1671 0.4 12.1337 1.18333 12.9171C1.96667 13.7004 2.93333 13.9671 4.06667 14.0004C5.23333 14.0337 8.78333 14.0337 9.95 14.0004C11.0833 13.9671 12.05 13.7004 12.8333 12.9171C13.6167 12.1337 13.8667 11.1671 13.9 10.0337C13.9333 8.86706 13.9333 5.31706 13.9 4.15039ZM12.4333 11.3837C12.2 11.9837 11.75 12.4337 11.15 12.6671C10.2333 13.0337 7.91667 12.9504 7.01667 12.9504C6.11667 12.9504 3.78333 13.0337 2.88333 12.6671C2.28333 12.4337 1.83333 11.9837 1.6 11.3837C1.23333 10.4671 1.31667 8.15039 1.31667 7.25039C1.31667 6.35039 1.23333 4.01706 1.6 3.11706C1.83333 2.51706 2.28333 2.06706 2.88333 1.83372C3.8 1.46706 6.11667 1.55039 7.01667 1.55039C7.91667 1.55039 10.25 1.46706 11.15 1.83372C11.75 2.06706 12.2 2.51706 12.4333 3.11706C12.8 4.03372 12.7167 6.35039 12.7167 7.25039C12.7167 8.15039 12.8 10.4671 12.4333 11.3837Z" fill="white"/></svg>
          </a>
          <a href="mailto:hello@lorem.app" aria-label="Email">
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2222 0H1.77778C0.8 0 0.00888889 0.8 0.00888889 1.77778L0 12.4444C0 13.4222 0.8 14.2222 1.77778 14.2222H14.2222C15.2 14.2222 16 13.4222 16 12.4444V1.77778C16 0.8 15.2 0 14.2222 0ZM14.2222 3.55556L8 7.55556L1.77778 3.55556V1.77778L8 5.77778L14.2222 1.77778V3.55556Z" fill="white"/></svg>
          </a>
        </div>
      </div>
      <small className="footer-copyright">© 2026 Lorem.app. All rights reserved.</small>
    </footer>
  )
}
