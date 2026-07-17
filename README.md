# Techware Lab Assessment - Lorem Landing Page

A beautifully animated and highly responsive landing page built for the Techware Lab Assessment.

## 🚀 Setup & Run Instructions

This project was bootstrapped using Vite and React.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ Tech Choices & Substitutions

* **React + Vite:** Chosen for lightning-fast HMR and an optimized production build process.
* **Vanilla CSS:** Utilized pure CSS (`global.css`) leveraging CSS Variables (`--bg`, `--navy`, `--gold`) to maintain full flexibility without the overhead of heavy styling libraries. It allowed for granular control over micro-animations and responsiveness.
* **GSAP (GreenSock):** Adopted for high-performance scroll animations. The `@gsap/react` plugin and `ScrollTrigger` were used to map intricate scroll-based fades, slide-ups, and the smooth orbital badge animations in the Audience section.
* **Image Assets vs. Typography:** The main hero heading was implemented using the provided image asset (`heading1.png`) to preserve perfect typographical fidelity with the Figma design. Other areas heavily utilized responsive `clamp()` functions to match font-sizing smoothly across viewports.

## ⚠️ Known Limitations

* **Device-Specific Browser Nuances:** High-intensity gradients and nested drop-shadows combined with scroll-linked opacity animations can sometimes perform slightly differently depending on the specific mobile browser rendering engine. GPU-accelerated properties (like `y` and `transform`) were prioritized for smoothness.
* **No Server/Backend:** The "Sign In" and form inputs on the contact section are fully functional visually but do not send data to any backend API.
* **Static Routing:** As a single-page landing application, navigation links smoothly anchor down the page rather than routing to distinct standalone pages.

## 🎨 Notes on Figma Interpretation

* **Mobile Responsive Fidelity:** Rather than just arbitrarily stacking everything on mobile, I interpreted the Figma's implied breakpoints to ensure components like the Hero section maintain their exact relative composition (e.g., buttons remaining side-by-side and floating cards flanking the phone) through `transform: scale()` down to small viewports.
* **Dynamic Aesthetics:** Where static screenshots didn't explicitly detail interactions, I inferred premium dynamic behaviors. A standout feature is the "Who It's For" section, which utilizes **GSAP** combined with **Superellipse (Squircle) parametric equations** (`Math.pow`) to perfectly map an infinite clockwise orbit that traces rounded-rectangular paths. This is paired with a dynamic `ResizeObserver` that calculates exact proportional radii 60 times a second, ensuring flawless math on any viewport.
* **Overlaps and Negative Space:** The Figma featured tight overlapping sections (like the golden folder over the Hero). Instead of brittle hardcoded pixels, I heavily utilized **percentage-based responsive negative margins** (e.g., `margin-top: -15vw;`) coupled with zero-height containers. This ensures the layered, immersive visual overlap scales perfectly in proportion to the screen width on tablet and mobile without creating dead space.
