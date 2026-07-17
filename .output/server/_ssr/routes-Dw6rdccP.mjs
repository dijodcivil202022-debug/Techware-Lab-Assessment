import { n as __toESM } from "../_runtime.mjs";
import {
  N as require_react,
  g as require_jsx_runtime,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dw6rdccP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
gsapWithCSS.registerPlugin(ScrollTrigger);
function AssessmentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
  const [activeSection, setActiveSection] = (0, import_react.useState)("hero");
  const heroPinRef = (0, import_react.useRef)(null);
  const heroTextRef = (0, import_react.useRef)(null);
  const phoneRef = (0, import_react.useRef)(null);
  const glowRef = (0, import_react.useRef)(null);
  const leftCardRef = (0, import_react.useRef)(null);
  const rightCardRef = (0, import_react.useRef)(null);
  const orbitRingRef = (0, import_react.useRef)(null);
  const previewContainerRef = (0, import_react.useRef)(null);
  const footerRef = (0, import_react.useRef)(null);
  const [loadVideo, setLoadVideo] = (0, import_react.useState)(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = (0,
  import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      const sections = ["hero", "solution", "who-its-for", "preview", "footer"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    if (mediaQuery.addEventListener)
      mediaQuery.addEventListener("change", handleMotionChange);
    else mediaQuery.addListener(handleMotionChange);
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      observer.disconnect();
      if (mediaQuery.removeEventListener)
        mediaQuery.removeEventListener("change", handleMotionChange);
      else mediaQuery.removeListener(handleMotionChange);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.set(phoneRef.current, { y: 100 });
      gsapWithCSS.set(leftCardRef.current, {
        opacity: 0,
        y: 80,
      });
      gsapWithCSS.set(rightCardRef.current, {
        opacity: 0,
        y: 80,
      });
      gsapWithCSS.set(glowRef.current, {
        opacity: 0,
        scale: 0.8,
      });
      gsapWithCSS
        .timeline({
          scrollTrigger: {
            trigger: heroPinRef.current,
            start: "top top",
            end: "+=1000",
            scrub: 1,
            pin: true,
          },
        })
        .to(heroTextRef.current, {
          opacity: 0,
          y: -60,
          scale: 0.95,
          duration: 1,
        })
        .to(
          phoneRef.current,
          {
            y: -120,
            scale: 1.02,
            duration: 1.5,
          },
          "+=0.1",
        )
        .to(
          leftCardRef.current,
          {
            opacity: 1,
            y: -20,
            duration: 0.8,
          },
          "+=0.1",
        )
        .to(
          rightCardRef.current,
          {
            opacity: 1,
            y: -20,
            duration: 0.8,
          },
          "-=0.4",
        )
        .to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1.1,
            duration: 1,
          },
          "+=0.2",
        );
      const ring = orbitRingRef.current;
      if (ring) {
        gsapWithCSS.set(ring, {
          "--radius": 220,
          "--rotation": 0,
        });
        gsapWithCSS
          .timeline({
            scrollTrigger: {
              trigger: "#who-its-for",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          })
          .to(ring, {
            "--radius": 100,
            ease: "power1.out",
          });
        gsapWithCSS.to(ring, {
          "--rotation": 360,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
      const cards = gsapWithCSS.utils.toArray(".stack-card");
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        gsapWithCSS.to(card, {
          scale: 0.92 - index * 0.02,
          opacity: 0.6,
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top center+=100",
            end: "top top+=140",
            scrub: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: `
        :root {
            --navy: #0A192F;
            --deep-blue: #002966;
            --amber: #E88F00;
            --cream: #F8E9D2;
            --ink: #171717;
            --background: #F7F7F7;
        }

        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, 'Outfit', sans-serif;
            color: #1a1a1a;
            background-color: #F7F7F7;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Keyboard Accessibility & Focus States */
        a:focus-visible, button:focus-visible {
            outline: 2.5px solid #E88F00;
            outline-offset: 3px;
        }

        .btn-signin:focus-visible, .btn-primary:focus-visible, .btn-secondary:focus-visible {
            outline-offset: 1px;
            border-radius: 34px;
        }

        .nav-links li a:focus-visible {
            border-radius: 20px;
        }

        /* NAVBAR */
        header {
            position: sticky;
            top: 16px;
            z-index: 100;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 16px;
        }

        .navbar {
            width: 1200px;
            max-width: 100%;
            height: 59px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 29.5px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            position: relative;
        }

        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        .logo svg {
            width: 35px;
            height: 36px;
            display: block;
        }

        .nav-links {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            list-style: none;
            align-items: center;
            gap: 0;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
        }

        .nav-links li a {
            display: inline-flex;
            padding: 6px 13px;
            text-decoration: none;
            color: #929292;
            font-size: 14px;
            font-weight: 400;
            font-family: 'Outfit', sans-serif;
            line-height: 14px;
            transition: color 0.2s ease;
        }

        .nav-links li a:hover {
            color: #2B2B2B;
        }

        .nav-links li a.active {
            color: #E88F00;
            font-weight: 500;
        }

        .btn-signin {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            width: 86px;
            height: 34px;
            background: linear-gradient(135deg, #062d6b 0%, #031330 50%, #010816 100%);
            border-radius: 34px;
            color: #ffffff;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            text-decoration: none;
            transition: all 0.2s ease;
            flex-shrink: 0;
            box-shadow: 0 2px 8px rgba(3, 19, 48, 0.25);
        }

        .btn-signin:hover {
            opacity: 0.92;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(6, 45, 107, 0.35);
        }

        .btn-signin svg {
            width: 13px;
            height: 13px;
        }

        .hamburger {
            display: none;
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            padding: 6px;
        }

        @media (max-width: 768px) {
            .hamburger {
                display: block;
            }
        }

        /* HERO */
        .hero {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 80px 20px 0;
            width: 100%;
            min-height: 900px;
            overflow: hidden;
            background-image: url('/background.png');
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 80px;
            font-weight: 400;
            margin: 0 auto 20px;
            line-height: 1.1;
            color: #2B2B2B;
            text-align: center;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 50px;
            }
        }

        .text-gradient {
            display: inline-block;
            background: linear-gradient(180deg, #FBD944 0%, #E78F01 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }

        .hero-subtext {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 16px;
            color: #000000;
            opacity: 0.60;
            max-width: 476px;
            margin: 24px auto 30px;
            line-height: 1.6;
            text-align: center;
        }

        .hero-actions {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-bottom: 60px;
        }

        .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            padding: 14px;
            background: linear-gradient(174deg, #ffffff 0%, #E78F00 94%);
            border-radius: 43px;
            outline: 2px solid #ffffff;
            outline-offset: -1px;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            transition: opacity 0.2s;
        }

        .btn-primary:hover {
            opacity: 0.9;
        }

        .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 14px 18px;
            background: rgba(254.56, 254.56, 254.56, 0.70);
            border-radius: 39px;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #E78F01;
            transition: background 0.2s;
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.92);
        }

        .mockup-wrapper {
            position: relative;
            width: 100%;
            max-width: 900px;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            z-index: 3;
        }

        .hero-phone-glow {
            position: absolute;
            width: 500px;
            height: 559px;
            top: 0;
            left: 58px;
            background: white;
            border-radius: 72px;
            filter: blur(91.05px);
            box-shadow: 182.1px 182.1px 182.1px;
            z-index: 0;
            opacity: 0.7;
        }

        .hero-phone-body {
            position: relative;
            width: 395.50px;
            height: 817px;
            background: #000;
            border-radius: 62.20px;
            z-index: 2;
            margin-top: 40px;
            margin-left: 48px;
            box-shadow:
                9px 14px 37px rgba(0, 0, 0, 0.14),
                37px 55px 67px rgba(0, 0, 0, 0.12),
                84px 124px 90px rgba(0, 0, 0, 0.07),
                150px 220px 107px rgba(0, 0, 0, 0.02);
            outline: 5.57px solid #7D8383;
            outline-offset: -5.57px;
        }

        .hero-phone-body img.main-phone {
            position: absolute;
            width: 362.08px;
            height: 783.58px;
            left: 16.71px;
            top: 16.71px;
            border-radius: 45.49px;
            object-fit: cover;
        }

        .hero-phone-island {
            position: absolute;
            width: 117.91px;
            height: 33.42px;
            left: 138.33px;
            top: 26.92px;
            background: black;
            border-radius: 927.48px;
            z-index: 10;
        }

        .ph-btn {
            position: absolute;
            border: 0.19px solid #000;
            z-index: 10;
        }

        .ph-vol1 {
            width: 2.79px;
            height: 29.71px;
            left: -2.79px;
            top: 159.69px;
            border-radius: 1px;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .ph-vol2 {
            width: 2.79px;
            height: 60.35px;
            left: -2.79px;
            top: 219.11px;
            border-radius: 1px;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .ph-mute {
            width: 2.79px;
            height: 60.35px;
            left: -2.79px;
            top: 297.09px;
            border-radius: 1px;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .ph-power {
            width: 2.79px;
            height: 96.55px;
            left: 398.29px;
            top: 357.44px;
            border-radius: 1px;
            transform: rotate(180deg);
            transform-origin: top left;
            background: linear-gradient(90deg, black 22%, rgba(0, 0, 0, 0) 100%), #8F8F8A;
        }

        .stat-card {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 19px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.35);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border-radius: 16px;
            z-index: 20;
            opacity: 0;
            transform: translateY(40px);
        }

        .card-left {
            outline: 2px solid #999999;
            outline-offset: -2px;
            box-shadow: -7px 4px 18px rgba(0, 0, 0, 0.02);
            left: -160px;
            top: 320px;
        }

        .card-right {
            outline: 2px solid white;
            outline-offset: -2px;
            box-shadow: 18px 7px 42px rgba(0, 0, 0, 0.02);
            right: 0px;
            top: 440px;
        }

        @media (max-width: 1024px) {
            .card-left { left: -40px; }
            .card-right { right: -40px; }
        }

        @media (max-width: 768px) {
            .stat-card { display: none; }
        }

        .stat-avatars {
            display: flex;
            align-space: -10px;
        }

        .stat-avatars img {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            outline: 2px solid #F7F7F7;
            margin-right: -10px;
            object-fit: cover;
        }

        .stat-info {
            display: flex;
            flex-direction: column;
            text-align: left;
        }

        .stat-value {
            font-family: 'Outfit', sans-serif;
            font-size: 24px;
            font-weight: 400;
            color: #000;
            line-height: 24px;
        }

        .stat-label {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.60);
            line-height: 16px;
        }

        .hero-fade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 300px;
            background: linear-gradient(to top, #F7F7F7 0%, rgba(247, 247, 247, 0) 100%);
            z-index: 1;
            pointer-events: none;
        }

        /* STATEMENT */
        .statement {
            padding: 140px 20px;
            max-width: 1440px;
            margin: 0 auto;
            text-align: center;
        }

        .statement-text {
            font-family: 'Outfit', sans-serif;
            font-size: 60px;
            font-weight: 300;
            line-height: 1.1;
            color: #2B2B2B;
        }

        @media (max-width: 768px) {
            .statement-text {
                font-size: 36px;
            }
        }

        .statement-text .dim {
            color: rgba(42.69, 42.69, 42.69, 0.20);
        }

        /* WHO IT'S FOR */
        .who-its-for {
            padding: 100px 20px 0;
            text-align: center;
            background: #F7F7F7;
        }

        .section-label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            background: rgba(231, 177, 1, 0.1);
            border-radius: 30px;
            margin-bottom: 16px;
        }

        .section-label-dot {
            width: 6px;
            height: 6px;
            background: #E7B101;
            border-radius: 50%;
        }

        .section-label-text {
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #E7B101;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .who-its-for h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 60px;
            font-weight: 400;
            line-height: 1.1;
            color: #2B2B2B;
            max-width: 740px;
            margin: 0 auto 16px;
        }

        @media (max-width: 768px) {
            .who-its-for h2 {
                font-size: 36px;
            }
        }

        .who-its-for > p {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.60);
            max-width: 754px;
            margin: 0 auto 80px;
        }

        .who-diagram {
            position: relative;
            width: 650px;
            height: 650px;
            margin: 0 auto 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 768px) {
            .who-diagram {
                width: 320px;
                height: 320px;
            }
        }

        .orb-glow {
            position: absolute;
            width: 228px;
            height: 218px;
            background: #E7B101;
            box-shadow: 130.2px 130.2px 130.2px;
            border-radius: 50%;
            filter: blur(65.10px);
            opacity: 0.4;
            z-index: 1;
        }

        .orb {
            position: absolute;
            border-radius: 50%;
            border: 1px dashed rgba(10, 25, 47, 0.15);
        }

        .orb-icon {
            width: 90px;
            height: 90px;
            background: white;
            border-radius: 20px;
            outline: 3px solid white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
        }

        .orb-icon-inner {
            width: 35px;
            height: 36px;
            background: #E7B101;
            border-radius: 4px;
        }

        .who-pill {
            position: absolute;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 10px 24px;
            background: rgba(255, 255, 255, 0.70);
            border-radius: 80px;
            outline: 2px solid white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            transform-origin: center center;
            z-index: 5;
        }

        .who-pill-icon {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(231, 177, 1, 0.12);
            flex-shrink: 0;
        }

        .who-pill-icon svg {
            width: 24px;
            height: 24px;
            fill: none;
            stroke: #E7B101;
        }

        .who-pill-text {
            font-family: 'Outfit', sans-serif;
            font-size: 15px;
            font-weight: 500;
            color: #2B2B2B;
            text-align: left;
            white-space: nowrap;
        }

        /* PLATFORM PREVIEW */
        .platform-preview {
            padding: 100px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .platform-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 40px;
            margin-bottom: 80px;
        }

        @media (max-width: 768px) {
            .platform-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
            }
        }

        .platform-header h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 54px;
            font-weight: 400;
            line-height: 1.1;
            color: #2B2B2B;
            max-width: 740px;
        }

        @media (max-width: 768px) {
            .platform-header h2 {
                font-size: 36px;
            }
        }

        .platform-header p {
            font-family: 'PT Serif', Georgia, serif;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.60);
            max-width: 400px;
        }

        .feature-rows {
            display: flex;
            flex-direction: column;
            gap: 48px;
        }

        .stack-card {
            position: sticky;
            top: 120px;
            background: white;
            border-radius: 30px;
            outline: 1px solid #E0E0E0;
            overflow: hidden;
            min-height: 500px;
            display: flex;
            flex-direction: row;
            box-shadow: 0 20px 50px rgba(0,0,0,0.05);
        }

        @media (max-width: 768px) {
            .stack-card {
                flex-direction: column;
                min-height: auto;
                top: 80px;
            }
        }

        .feature-card-text {
            flex: 0 0 40%;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 18px;
        }

        @media (max-width: 768px) {
            .feature-card-text {
                padding: 40px 24px;
            }
        }

        .feature-card-text h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 30px;
            font-weight: 400;
            line-height: 1.2;
            color: #2B2B2B;
        }

        .feature-card-text p {
            font-family: 'PT Serif', Georgia, serif;
            font-style: italic;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.60);
        }

        .feature-card-browser {
            flex: 0 0 60%;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 768px) {
            .feature-card-browser {
                padding: 24px;
            }
        }

        .browser-chrome {
            width: 100%;
            background: #E2E2E2;
            border-radius: 15.46px;
            padding: 3px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
            overflow: hidden;
        }

        .browser-inner {
            background: white;
            border-radius: 13.44px;
            overflow: hidden;
        }

        .browser-topbar {
            height: 38px;
            background: #F2F2F2;
            display: flex;
            align-items: center;
            padding: 0 16px;
            gap: 6px;
        }

        .browser-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }

        .browser-dot-red { background: #F70C00; outline: 0.67px solid #CA2730; }
        .browser-dot-orange { background: #FF7305; outline: 0.67px solid #D06D19; }
        .browser-dot-green { background: #26C012; outline: 0.67px solid #4BA935; }

        .browser-url {
            margin: 0 auto;
            background: #F2F2F2;
            font-family: 'Albert Sans', sans-serif;
            font-size: 9px;
            font-weight: 500;
            color: #616161;
        }

        .browser-content img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
        }

        /* VIDEO FOOTER */
        .video-footer {
            position: relative;
            overflow: hidden;
            color: white;
            padding: 80px 40px 40px;
            margin-top: 80px;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            background-color: #000;
        }

        .footer-bg-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
            z-index: 0;
        }

        .footer-content {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            margin-bottom: 100px;
        }

        @media (max-width: 768px) {
            .footer-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .footer-grid {
                grid-template-columns: 1fr;
            }
        }

        .footer-col h4 {
            font-family: 'Outfit', sans-serif;
            font-size: 18px;
            margin-bottom: 24px;
            font-weight: 500;
            color: #ffffff;
        }

        .footer-col ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .footer-col a {
            color: #a0a0a0;
            text-decoration: none;
            transition: color 0.2s;
            font-size: 14px;
        }

        .footer-col a:hover {
            color: #ffffff;
        }

        .contact-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #a0a0a0;
            font-size: 14px;
        }

        .contact-list svg {
            color: #E7B101;
        }

        .social-icons {
            display: flex;
            gap: 16px;
        }

        .icon-link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 36px;
            height: 36px;
            border: 1px solid #a0a0a0;
            border-radius: 50%;
            color: #ffffff;
            transition: all 0.2s;
            text-decoration: none;
        }

        .icon-link:hover {
            background-color: #ffffff;
            color: #000000;
            border-color: #ffffff;
        }

        .footer-bottom-right {
            text-align: right;
            color: #555;
            font-size: 13px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 24px;
        }

        .mobile-dropdown {
            position: absolute;
            top: 65px;
            left: 0;
            width: 100%;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 100;
        }

        .mobile-dropdown a {
            color: #666;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 16px;
            padding: 8px 12px;
            border-radius: 8px;
            transition: background 0.2s;
        }

        .mobile-dropdown a:hover {
            background: #f5f5f5;
            color: #E88F00;
        }
      `,
          },
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-wrapper",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
                className: "navbar",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href: "#",
                    className: "logo",
                    "aria-label": "Home",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "svg",
                      {
                        width: "35",
                        height: "36",
                        viewBox: "0 0 35 36",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.8057 12.0561C21.5312 11.2045 20.0328 10.75 18.5 10.75V3C21.5656 3 24.5624 3.90906 27.1113 5.61222C29.6603 7.31538 31.6469 9.73615 32.8201 12.5684C33.9933 15.4006 34.3002 18.5172 33.7022 21.5239C33.1041 24.5306 31.6279 27.2925 29.4601 29.4601C27.2925 31.6279 24.5306 33.1041 21.5239 33.7022C18.5172 34.3002 15.4006 33.9933 12.5684 32.8201C9.73615 31.6469 7.31538 29.6603 5.61222 27.1113C3.90906 24.5624 3 21.5656 3 18.5H10.75C10.75 20.0328 11.2045 21.5312 12.0561 22.8057C12.9077 24.0802 14.1181 25.0735 15.5342 25.6601C16.9503 26.2467 18.5086 26.4001 20.0119 26.101C21.5153 25.802 22.8962 25.0639 23.9801 23.9801C25.0639 22.8962 25.802 21.5153 26.101 20.0119C26.4001 18.5086 26.2467 16.9503 25.6601 15.5342C25.0735 14.1181 24.0802 12.9077 22.8057 12.0561Z",
                            fill: "#D4AE4F",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.75 3C10.75 4.01775 10.5495 5.02552 10.1601 5.96579C9.77059 6.90607 9.19973 7.76042 8.48007 8.48008C7.76043 9.19974 6.90607 9.77059 5.96579 10.1601C5.02552 10.5495 4.01775 10.75 3 10.75L3 18.5C5.03549 18.5 7.05104 18.0991 8.9316 17.3201C10.8122 16.5412 12.5209 15.3995 13.9601 13.9601C15.3995 12.5209 16.5412 10.8122 17.3201 8.93159C18.0991 7.05104 18.5 5.03548 18.5 3L10.75 3Z",
                            fill: "#D4AE4F",
                          }),
                        ],
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                    className: "nav-links",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "a",
                          {
                            href: "#hero",
                            className: activeSection === "hero" ? "active" : "",
                            children: "Home",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "a",
                          {
                            href: "#solution",
                            className:
                              activeSection === "solution" ? "active" : "",
                            children: "Solution",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "a",
                          {
                            href: "#who-its-for",
                            className:
                              activeSection === "process" ? "active" : "",
                            children: "Process",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "a",
                          {
                            href: "#who-its-for",
                            className:
                              activeSection === "who-its-for" ? "active" : "",
                            children: "Industries",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "a",
                          {
                            href: "#preview",
                            className:
                              activeSection === "preview" ? "active" : "",
                            children: "Platform",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "a",
                          {
                            href: "#footer",
                            className:
                              activeSection === "footer" ? "active" : "",
                            children: "Contact",
                          },
                        ),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                    href: "#",
                    className: "btn-signin",
                    children: [
                      "Sign In",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
                        width: "13",
                        height: "13",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
                            x1: "7",
                            y1: "17",
                            x2: "17",
                            y2: "7",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "polyline",
                            { points: "7 7 17 7 17 17" },
                          ),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    className: "hamburger",
                    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                    "aria-label": "Toggle Menu",
                    "aria-expanded": mobileMenuOpen,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "svg",
                      {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M4 6h16M4 12h16M4 18h16",
                          },
                        ),
                      },
                    ),
                  }),
                  mobileMenuOpen &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "mobile-dropdown",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "#hero",
                          onClick: () => setMobileMenuOpen(false),
                          children: "Home",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "#solution",
                          onClick: () => setMobileMenuOpen(false),
                          children: "Solution",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "#who-its-for",
                          onClick: () => setMobileMenuOpen(false),
                          children: "Process",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "#who-its-for",
                          onClick: () => setMobileMenuOpen(false),
                          children: "Industries",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "#preview",
                          onClick: () => setMobileMenuOpen(false),
                          children: "Platform",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "#footer",
                          onClick: () => setMobileMenuOpen(false),
                          children: "Contact",
                        }),
                      ],
                    }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
              id: "hero",
              ref: heroPinRef,
              className: "hero",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "hero-blob",
                  style: {
                    position: "absolute",
                    right: 0,
                    top: "-100px",
                    width: "649px",
                    height: "1093px",
                    pointerEvents: "none",
                    zIndex: 0,
                    opacity: 0.85,
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "svg",
                    {
                      width: "649",
                      height: "1093",
                      viewBox: "0 0 649 1093",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
                          filter: "url(#hero_blur_amber)",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "ellipse",
                            {
                              cx: "400",
                              cy: "300",
                              rx: "350",
                              ry: "250",
                              fill: "#F1AD3E",
                              fillOpacity: "0.6",
                            },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
                          filter: "url(#hero_blur_yellow)",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "ellipse",
                            {
                              cx: "300",
                              cy: "500",
                              rx: "250",
                              ry: "180",
                              fill: "#FFD13D",
                              fillOpacity: "0.5",
                            },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "filter",
                              {
                                id: "hero_blur_amber",
                                x: "0",
                                y: "0",
                                width: "800",
                                height: "700",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: /* @__PURE__ */ (0,
                                import_jsx_runtime.jsx)("feGaussianBlur", {
                                  stdDeviation: "85.3",
                                  result: "blur",
                                }),
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "filter",
                              {
                                id: "hero_blur_yellow",
                                x: "0",
                                y: "200",
                                width: "600",
                                height: "560",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: /* @__PURE__ */ (0,
                                import_jsx_runtime.jsx)("feGaussianBlur", {
                                  stdDeviation: "58.9",
                                  result: "blur",
                                }),
                              },
                            ),
                          ],
                        }),
                      ],
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  ref: heroTextRef,
                  className: "hero-content",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                      children: [
                        "Verification That ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-gradient",
                          children: "Starts At The Source.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      className: "hero-subtext",
                      children: [
                        "Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        "lorem ipsum Lorem ipsum lorem ipsum",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "hero-actions",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                          href: "#",
                          className: "btn-primary",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              { children: "Book a Demo" },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "svg",
                              {
                                width: "28",
                                height: "28",
                                viewBox: "0 0 28 28",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "rect",
                                    {
                                      width: "28",
                                      height: "28",
                                      rx: "14",
                                      fill: "#FFAA20",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    {
                                      d: "M17.625 12.917C18.4583 13.3981 18.4583 14.6019 17.625 15.083L11.625 18.5469C10.7917 19.0279 9.75 18.4261 9.75 17.4639L9.75 10.5361C9.75 9.57392 10.7917 8.97211 11.625 9.45312L17.625 12.917Z",
                                      stroke: "white",
                                      strokeWidth: "1.5",
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                          href: "#",
                          className: "btn-secondary",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              { children: "See how it works" },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
                              width: "21",
                              height: "21",
                              viewBox: "0 0 21 21",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)("path", {
                                d: "M14.1787 14.1786V6.82126H6.82131M14.1787 6.82126L6.82131 14.1786",
                                stroke: "#E78F01",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mockup-wrapper",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      ref: leftCardRef,
                      className: "stat-card card-left",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "stat-avatars",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "https://i.pravatar.cc/34?img=1",
                              alt: "Org 1",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "https://i.pravatar.cc/34?img=2",
                              alt: "Org 2",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "https://i.pravatar.cc/34?img=3",
                              alt: "Org 3",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "https://i.pravatar.cc/34?img=4",
                              alt: "Org 4",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "stat-info",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "stat-value",
                              children: "250+",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "stat-label",
                              children: "trusted organizations",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      ref: glowRef,
                      className: "hero-phone-glow",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      ref: phoneRef,
                      className: "hero-phone-body",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          src: "/iPhone 14 Pro.png",
                          alt: "App Interface",
                          className: "main-phone",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "hero-phone-island",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "ph-btn ph-vol1",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "ph-btn ph-vol2",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "ph-btn ph-mute",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "ph-btn ph-power",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      ref: rightCardRef,
                      className: "stat-card card-right",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "stat-icon-wrap",
                          children: /* @__PURE__ */ (0,
                          import_jsx_runtime.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "1.5",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "rect",
                                {
                                  x: "3",
                                  y: "3",
                                  width: "14",
                                  height: "14",
                                  rx: "2",
                                  fill: "white",
                                  fillOpacity: "0.2",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "rect",
                                {
                                  x: "7",
                                  y: "7",
                                  width: "14",
                                  height: "14",
                                  rx: "2",
                                  fill: "white",
                                  fillOpacity: "0.4",
                                },
                              ),
                            ],
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "stat-info",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "stat-value",
                              children: "10,000+",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "stat-label",
                                children: [
                                  "credentials verified",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "br",
                                    {},
                                  ),
                                  "securely",
                                ],
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "hero-fade",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
              id: "solution",
              className: "statement",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "statement-text",
                children: [
                  "PDFs get forged. Emails get lost. Manual checks create liability.",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "dim",
                    children:
                      "Lorem replaces static documents with cryptographically signed credentials issued directly from the source, with a full audit trail.",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
              id: "who-its-for",
              className: "who-its-for",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "section-label",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "section-label-dot",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "section-label-text",
                      children: "Who It's For",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  children:
                    "Built for workflows where trust is non-negotiable.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children:
                    "Wherever credentials matter, Lorem handles the verification",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "who-diagram",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "orb-glow",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "orb w-[509px] h-[509px] rounded-full",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "orb w-[389px] h-[389px] rounded-full",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "orb w-[269px] h-[269px] rounded-full",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "orb-icon",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "div",
                        { className: "orb-icon-inner" },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      ref: orbitRingRef,
                      className:
                        "absolute inset-0 rounded-full flex items-center justify-center pointer-events-none",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "who-pill",
                          style: {
                            transform:
                              "rotate(calc(0deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(0deg - var(--rotation) * 1deg))",
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "who-pill-icon",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#E7B101",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "line",
                                    {
                                      x1: "12",
                                      y1: "3",
                                      x2: "12",
                                      y2: "21",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M5 6h14" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M3 14l3-6 3 6a3 3 0 0 1-6 0z" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M15 14l3-6 3 6a3 3 0 0 1-6 0z" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "line",
                                    {
                                      x1: "9",
                                      y1: "21",
                                      x2: "15",
                                      y2: "21",
                                    },
                                  ),
                                ],
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className: "who-pill-text",
                                children: [
                                  "Immigration",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "br",
                                    {},
                                  ),
                                  "Law Firms",
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "who-pill",
                          style: {
                            transform:
                              "rotate(calc(72deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-72deg - var(--rotation) * 1deg))",
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "who-pill-icon",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#E7B101",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    {
                                      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "circle",
                                    {
                                      cx: "9",
                                      cy: "7",
                                      r: "4",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M23 21v-2a4 4 0 0 0-3-3.87" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M16 3.13a4 4 0 0 1 0 7.75" },
                                  ),
                                ],
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className: "who-pill-text",
                                children: [
                                  "Compliance &",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "br",
                                    {},
                                  ),
                                  "Mobility Teams",
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "who-pill",
                          style: {
                            transform:
                              "rotate(calc(144deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-144deg - var(--rotation) * 1deg))",
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "who-pill-icon",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#E7B101",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "line",
                                    {
                                      x1: "12",
                                      y1: "3",
                                      x2: "12",
                                      y2: "21",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M5 6h14" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M3 14l3-6 3 6a3 3 0 0 1-6 0z" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M15 14l3-6 3 6a3 3 0 0 1-6 0z" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "line",
                                    {
                                      x1: "9",
                                      y1: "21",
                                      x2: "15",
                                      y2: "21",
                                    },
                                  ),
                                ],
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className: "who-pill-text",
                                children: [
                                  "Financial",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "br",
                                    {},
                                  ),
                                  "Institutions",
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "who-pill",
                          style: {
                            transform:
                              "rotate(calc(216deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-216deg - var(--rotation) * 1deg))",
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "who-pill-icon",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#E7B101",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    {
                                      d: "M7 11V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "rect",
                                    {
                                      x: "3",
                                      y: "11",
                                      width: "18",
                                      height: "4",
                                      rx: "2",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M12 15v3" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M8 22l2-4h4l2 4" },
                                  ),
                                ],
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className: "who-pill-text",
                                children: [
                                  "HR & Recruitment",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "br",
                                    {},
                                  ),
                                  "Firms",
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "who-pill",
                          style: {
                            transform:
                              "rotate(calc(288deg + var(--rotation) * 1deg)) translate(calc(var(--radius) * 1px)) rotate(calc(-288deg - var(--rotation) * 1deg))",
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "who-pill-icon",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#E7B101",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M22 10v6M2 10l10-5 10 5-10 5z" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "path",
                                    { d: "M6 12v5c3 3 9 3 12 0v-5" },
                                  ),
                                ],
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "span",
                              {
                                className: "who-pill-text",
                                children: [
                                  "Universities & Training",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "br",
                                    {},
                                  ),
                                  "Institutes",
                                ],
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
              id: "preview",
              ref: previewContainerRef,
              className: "platform-preview",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "platform-header",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "platform-label",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              { className: "platform-label-dot" },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className: "platform-label-text",
                                children: "Platform Preview",
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                          children: "Verify documents from a single dashboard.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children:
                        "One dashboard to request, track, and receive verified credentials, from anywhere in the world.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "feature-rows",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "stack-card",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "feature-card-text",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              children: "Create verification cases instantly",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              children:
                                "Add the applicant and issuer. Hit send. Lorem notifies everyone and tracks every step.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "feature-card-browser",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "div",
                            {
                              className: "browser-chrome",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("div", {
                                className: "browser-inner",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "browser-topbar",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-red",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-orange",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-green",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: "browser-url",
                                          children: "Lorem.com",
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "browser-content",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("img", {
                                        src: "/card1.png",
                                        alt: "Create verification cases dashboard",
                                      }),
                                    },
                                  ),
                                ],
                              }),
                            },
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "stack-card",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "feature-card-text",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              children: "Track real-time verification status",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              children:
                                "See exactly where each case stands. No chasing emails. No manual follow-ups.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "feature-card-browser",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "div",
                            {
                              className: "browser-chrome",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("div", {
                                className: "browser-inner",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "browser-topbar",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-red",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-orange",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-green",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: "browser-url",
                                          children: "Lorem.com",
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "browser-content",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("img", {
                                        src: "/card2.png",
                                        alt: "Real-time verification status dashboard",
                                      }),
                                    },
                                  ),
                                ],
                              }),
                            },
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "stack-card",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "feature-card-text",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              children: "View applicant approval activity",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              children:
                                "Know the moment an applicant consents. Every action is logged, timestamped, and auditable.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "feature-card-browser",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "div",
                            {
                              className: "browser-chrome",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("div", {
                                className: "browser-inner",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "browser-topbar",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-red",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-orange",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-green",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: "browser-url",
                                          children: "Lorem.com",
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "browser-content",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("img", {
                                        src: "/card3.png",
                                        alt: "Applicant approval activity dashboard",
                                      }),
                                    },
                                  ),
                                ],
                              }),
                            },
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "stack-card",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "feature-card-text",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              children: "Access issuer-verified documents",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              children:
                                "Signed at source. Delivered to your dashboard. Ready to reference whenever you need it.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "feature-card-browser",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "div",
                            {
                              className: "browser-chrome",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("div", {
                                className: "browser-inner",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "browser-topbar",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-red",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-orange",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-green",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: "browser-url",
                                          children: "Lorem.com",
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "browser-content",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("img", {
                                        src: "/card4.png",
                                        alt: "Issuer-verified documents dashboard",
                                      }),
                                    },
                                  ),
                                ],
                              }),
                            },
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "stack-card",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "feature-card-text",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              children: "Consolidate compliance reports",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              children:
                                "Instantly generate secure cryptographic audit trails for compliance verification records.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "feature-card-browser",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "div",
                            {
                              className: "browser-chrome",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsxs)("div", {
                                className: "browser-inner",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "browser-topbar",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-red",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-orange",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "browser-dot browser-dot-green",
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: "browser-url",
                                          children: "Lorem.com",
                                        }),
                                      ],
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "browser-content",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("img", {
                                        src: "/card1.png",
                                        alt: "Consolidate compliance reports dashboard",
                                      }),
                                    },
                                  ),
                                ],
                              }),
                            },
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
              ref: footerRef,
              id: "footer",
              className: "video-footer",
              style: {
                backgroundImage: "url('/who_it_is_for_gradient.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
              },
              children: [
                loadVideo &&
                  !prefersReducedMotion &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    className: "footer-bg-video",
                    style: { transition: "opacity 1s ease" },
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "source",
                      {
                        src: "/footer_video.mp4",
                        type: "video/mp4",
                      },
                    ),
                  }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "footer-content",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "footer-grid",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "footer-col",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              children: "Product",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Overview",
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Solutions",
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Process",
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Platform Preview",
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Pricing",
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Request Demo",
                                    }),
                                  },
                                ),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "footer-col",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              children: "Company & Resources",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Terms of Service",
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "Privacy Policy",
                                    }),
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "li",
                                  {
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsx)("a", {
                                      href: "#",
                                      children: "FAQs",
                                    }),
                                  },
                                ),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "footer-col",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              children: "Contact",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                              className: "contact-list",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "li",
                                  {
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("path", {
                                            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("circle", {
                                            cx: "12",
                                            cy: "10",
                                            r: "3",
                                          }),
                                        ],
                                      }),
                                      "USA",
                                    ],
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "li",
                                  {
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("path", {
                                          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                                        }),
                                      }),
                                      "+971 51 547 3625",
                                    ],
                                  },
                                ),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "footer-col",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                              children: "Connect",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "social-icons",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "a",
                                    {
                                      href: "#",
                                      className: "icon-link",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("path", {
                                            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("rect", {
                                            x: "2",
                                            y: "9",
                                            width: "4",
                                            height: "12",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("circle", {
                                            cx: "4",
                                            cy: "4",
                                            r: "2",
                                          }),
                                        ],
                                      }),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "a",
                                    {
                                      href: "#",
                                      className: "icon-link",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "20",
                                            height: "20",
                                            rx: "5",
                                            ry: "5",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("path", {
                                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("line", {
                                            x1: "17.5",
                                            y1: "6.5",
                                            x2: "17.51",
                                            y2: "6.5",
                                          }),
                                        ],
                                      }),
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "a",
                                    {
                                      href: "#",
                                      className: "icon-link",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("path", {
                                            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("polyline", {
                                            points: "22,6 12,13 2,6",
                                          }),
                                        ],
                                      }),
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "footer-bottom-right",
                      children: "© 2026 Lorem.app. All rights reserved.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    },
  );
}
var SplitComponent = AssessmentPage;
//#endregion
export { SplitComponent as component };
