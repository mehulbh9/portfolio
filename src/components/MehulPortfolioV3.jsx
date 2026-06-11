import { useState, useEffect, useRef } from 'react'

// ─── Photo manifest ───────────────────────────────────────────────────────────
const PHOTOS = {
  MILKY_WAY:   '/images/milky-way-mehul.webp',
  LIONESS:     '/images/lioness-stare.webp',
  CHEETAH:     '/images/cheetah-portrait.webp',
  ELEPHANTS:   '/images/elephants-kilimanjaro.webp',
  LEOPARD_CUB: '/images/leopard-cub.webp',
  LEOPARD_ISO: '/images/leopard-isolated.webp',
  ELK:         '/images/elk-banff.webp',
  LAKE_LOUISE: '/images/lake-louise.webp',
  AMD_BW:      '/images/amd-bw.webp',
}

// ─── Wardrobe doors ───────────────────────────────────────────────────────────
const WARDROBE_DOORS = [
  {
    id: 'analyst',
    label: 'The Analyst',
    role: 'AMD · Toronto',
    photo: PHOTOS.AMD_BW,
    photoPosition: '50% 20%',
    tag: '01',
    headline: 'I turn noise into signal.',
    body: 'At AMD I built Python pipelines that cut processing from 10 min to 5 sec — 120× faster. Monte Carlo simulations. Jira dashboards tracking 200+ builds. 300M+ row datasets. I find the number that changes the decision.',
    stats: [
      { value: '120×', label: 'pipeline speedup' },
      { value: '300M+', label: 'rows processed' },
      { value: '200+', label: 'builds tracked' },
    ],
  },
  {
    id: 'builder',
    label: 'The Builder',
    role: 'AI · ML · Research',
    photo: PHOTOS.CHEETAH,
    photoPosition: '50% 30%',
    tag: '02',
    headline: 'I build things that think.',
    body: 'LLM/RAG systems over 200+ documents at GEI Consultants. Gaussian Process research with Active Learning at UofT. XGBoost, SHAP, Bayesian Optimization. BASc Engineering Science (Machine Intelligence) — the most rigorous engineering program in Canada.',
    stats: [
      { value: '200+', label: 'docs in RAG system' },
      { value: 'UofT', label: 'EngSci ML' },
      { value: 'GP', label: 'active learning research' },
    ],
  },
  {
    id: 'observer',
    label: 'The Observer',
    role: 'Kenya · Tanzania · Banff',
    photo: PHOTOS.LIONESS,
    photoPosition: '50% 40%',
    tag: '03',
    headline: 'I notice things others miss.',
    body: 'Thousands of frames across the Masai Mara and Ngorongoro. Wildlife photography taught me that the signal is always there — you just have to be patient and positioned correctly. The same eye I bring to data, I brought to Africa.',
    stats: [
      { value: 'Kenya', label: '+ Tanzania' },
      { value: 'Banff', label: 'elk in velvet' },
      { value: '∞', label: 'frames shot' },
    ],
  },
]

// ─── Field Notes (projects as investigations) ─────────────────────────────────
const FIELD_NOTES = [
  {
    tag: 'FN · 01',
    question: 'Can a data pipeline run 120× faster without changing the output?',
    finding: 'Yes — the bottleneck was sequential I/O, not compute. Rebuilt in Python with vectorized ops and parallel batch writes.',
    metric: '10 min → 5 sec',
    label: 'AMD · Automation & Program Analytics',
  },
  {
    tag: 'FN · 02',
    question: 'Can an LLM actually reason over live internal documents — or does it hallucinate?',
    finding: 'With a well-structured RAG pipeline, it reasons correctly. The failure mode isn\'t hallucination — it\'s retrieval precision.',
    metric: '200+ docs · GEI Consultants',
    label: 'LLM / RAG System',
  },
  {
    tag: 'FN · 03',
    question: 'How do you make an ML model tell you why it was wrong?',
    finding: 'SHAP values on XGBoost. The 6% error rate was more informative than the 94% accuracy — anomalies are where the real signal hides.',
    metric: 'XGBoost · SHAP · Active Learning',
    label: 'UofT Research',
  },
]

// ─── Eye grid photos ──────────────────────────────────────────────────────────
const EYE_GRID = [
  { src: PHOTOS.ELEPHANTS,   alt: 'Elephants with Kilimanjaro, Amboseli',     caption: 'Amboseli · Kenya',          pos: '50% 60%' },
  { src: PHOTOS.LIONESS,     alt: 'Post-kill lioness, direct eye contact',    caption: 'Masai Mara · Kenya',        pos: '50% 30%' },
  { src: PHOTOS.CHEETAH,     alt: 'Cheetah portrait, dark background',        caption: 'Serengeti · Tanzania',      pos: '50% 40%' },
  { src: PHOTOS.LEOPARD_ISO, alt: 'Colour-isolated leopard in dry grass',     caption: 'Ngorongoro · Tanzania',     pos: '50% 50%' },
  { src: PHOTOS.LEOPARD_CUB, alt: 'Leopard cub looking into lens',            caption: 'Masai Mara · Kenya',        pos: '50% 40%' },
  { src: PHOTOS.ELK,         alt: 'Bull elk in velvet, Banff',                caption: 'Banff · Alberta',           pos: '50% 50%' },
]

// ─── Styles ───────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #0D0B09;
    --bg2:      #131008;
    --bg3:      #1A1408;
    --text:     #F2EBD9;
    --muted:    #8A7E6A;
    --amber:    #C4882E;
    --amber2:   #E8A84A;
    --border:   rgba(196,136,46,0.18);
    --serif:    'Playfair Display', Georgia, serif;
    --sans:     'Inter', system-ui, sans-serif;
    --mono:     'Space Mono', monospace;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: var(--sans); overflow-x: hidden; }

  /* ── Nav ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.25rem 3rem;
    background: linear-gradient(to bottom, rgba(13,11,9,0.95) 0%, transparent 100%);
    backdrop-filter: blur(8px);
  }
  .nav-logo { font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.15em; color: var(--amber); text-decoration: none; }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a { font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
  .nav-links a:hover { color: var(--text); }
  .nav-cta { font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.12em; padding: 0.5rem 1.25rem; border: 1px solid var(--amber); color: var(--amber); text-decoration: none; transition: all 0.2s; }
  .nav-cta:hover { background: var(--amber); color: var(--bg); }

  /* ── Hero ── */
  .hero {
    position: relative; height: 100vh; min-height: 700px;
    display: flex; flex-direction: column; justify-content: flex-end;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background-image: url('/images/milky-way-mehul.webp');
    background-size: cover; background-position: 50% 35%;
    transform: scale(1.05);
    transition: transform 8s ease-out;
  }
  .hero-bg::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(13,11,9,0.96) 0%, rgba(13,11,9,0.5) 40%, rgba(13,11,9,0.15) 100%);
  }
  .hero-content {
    position: relative; z-index: 2;
    padding: 0 3rem 5rem;
    max-width: 900px;
  }
  .hero-eyebrow {
    font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.2em;
    color: var(--amber); text-transform: uppercase; margin-bottom: 1.5rem;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .hero-eyebrow span { opacity: 0.6; }
  .hero-headline {
    font-family: var(--serif); font-size: clamp(3rem, 7vw, 6.5rem);
    font-weight: 900; line-height: 1.0; margin-bottom: 1.75rem;
    letter-spacing: -0.02em;
  }
  .hero-headline em { font-style: italic; color: var(--amber); }
  .hero-sub {
    font-family: var(--sans); font-size: 1.05rem; font-weight: 300;
    color: rgba(242,235,217,0.75); line-height: 1.6; max-width: 540px;
    margin-bottom: 2.5rem;
  }
  .hero-meta {
    display: flex; gap: 2.5rem; flex-wrap: wrap;
    font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em;
    color: var(--muted); text-transform: uppercase;
  }
  .hero-meta-item span:last-child { color: var(--text); margin-left: 0.5rem; }
  .hero-scroll {
    position: absolute; right: 3rem; bottom: 5rem; z-index: 2;
    display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
    font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em;
    color: var(--muted); text-transform: uppercase;
  }
  .hero-scroll-line { width: 1px; height: 60px; background: linear-gradient(to bottom, var(--amber), transparent); animation: scrollPulse 2s ease-in-out infinite; }
  @keyframes scrollPulse { 0%,100% { opacity: 0.4; transform: scaleY(1); } 50% { opacity: 1; transform: scaleY(1.2); } }

  /* ── Section base ── */
  section { padding: 7rem 3rem; max-width: 1200px; margin: 0 auto; }
  .section-label {
    font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.25em;
    text-transform: uppercase; color: var(--amber); margin-bottom: 1rem;
    display: flex; align-items: center; gap: 1rem;
  }
  .section-label::after { content: ''; flex: 1; max-width: 60px; height: 1px; background: var(--amber); opacity: 0.4; }

  /* ── Wardrobe ── */
  .wardrobe-section { padding: 7rem 3rem; }
  .wardrobe-inner { max-width: 1200px; margin: 0 auto; }
  .wardrobe-header { margin-bottom: 4rem; }
  .wardrobe-title { font-family: var(--serif); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; line-height: 1.1; }
  .wardrobe-title em { font-style: italic; color: var(--amber); }
  .wardrobe-subtitle { font-family: var(--sans); color: var(--muted); font-size: 0.95rem; margin-top: 1rem; max-width: 460px; line-height: 1.6; }
  .wardrobe-doors {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px;
    border: 1.5px solid var(--border);
  }
  .wardrobe-door {
    position: relative; aspect-ratio: 3/4; overflow: hidden; cursor: pointer;
    background: var(--bg3);
  }
  .wardrobe-door-photo {
    position: absolute; inset: 0;
    background-size: cover; background-repeat: no-repeat;
    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s;
    opacity: 0.35; transform: scale(1.08);
  }
  .wardrobe-door:hover .wardrobe-door-photo,
  .wardrobe-door.open .wardrobe-door-photo { opacity: 0.9; transform: scale(1.0); }
  .wardrobe-door-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(13,11,9,0.97) 0%, rgba(13,11,9,0.5) 50%, rgba(13,11,9,0.1) 100%);
    transition: opacity 0.4s;
  }
  .wardrobe-door-closed {
    position: absolute; inset: 0;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: opacity 0.35s;
    z-index: 2;
  }
  .wardrobe-door:hover .wardrobe-door-closed,
  .wardrobe-door.open .wardrobe-door-closed { opacity: 0; pointer-events: none; }
  .wardrobe-door-tag {
    font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.25em;
    color: var(--amber); margin-bottom: 1rem;
  }
  .wardrobe-door-name {
    font-family: var(--serif); font-size: 1.6rem; font-weight: 700;
    color: var(--text); text-align: center; line-height: 1.2;
  }
  .wardrobe-door-role {
    font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.15em;
    color: var(--muted); margin-top: 0.6rem; text-transform: uppercase;
  }
  .wardrobe-door-hanger {
    width: 1px; height: 3rem; background: var(--border); position: absolute; top: 0; left: 50%;
  }
  .wardrobe-door-open {
    position: absolute; inset: 0; padding: 2rem 1.5rem;
    display: flex; flex-direction: column; justify-content: flex-end;
    opacity: 0; transition: opacity 0.35s 0.1s; z-index: 3; pointer-events: none;
  }
  .wardrobe-door:hover .wardrobe-door-open,
  .wardrobe-door.open .wardrobe-door-open { opacity: 1; pointer-events: auto; }
  .wardrobe-door-open-tag { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; color: var(--amber); margin-bottom: 0.75rem; }
  .wardrobe-door-headline { font-family: var(--serif); font-size: 1.15rem; font-weight: 700; line-height: 1.3; margin-bottom: 0.75rem; }
  .wardrobe-door-body { font-size: 0.8rem; line-height: 1.55; color: rgba(242,235,217,0.75); margin-bottom: 1.25rem; }
  .wardrobe-door-stats { display: flex; gap: 1.25rem; flex-wrap: wrap; }
  .wardrobe-stat-val { font-family: var(--mono); font-size: 1rem; color: var(--amber); display: block; }
  .wardrobe-stat-label { font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.15em; color: var(--muted); text-transform: uppercase; }

  /* ── Two Gazes ── */
  .gazes-section { padding: 7rem 3rem; background: var(--bg2); }
  .gazes-inner { max-width: 1200px; margin: 0 auto; }
  .gazes-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 3px;
    margin: 3rem 0;
  }
  .gaze-photo {
    aspect-ratio: 4/5; overflow: hidden; position: relative;
  }
  .gaze-photo img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
  .gaze-photo:hover img { transform: scale(1.04); }
  .gaze-photo-caption {
    position: absolute; bottom: 1.25rem; left: 1.25rem;
    font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.18em;
    color: rgba(242,235,217,0.7); text-transform: uppercase;
  }
  .gazes-quote {
    font-family: var(--serif); font-size: clamp(1.5rem, 3vw, 2.4rem);
    font-style: italic; font-weight: 400; text-align: center;
    color: var(--text); line-height: 1.4; max-width: 700px; margin: 0 auto;
  }
  .gazes-quote em { color: var(--amber); }

  /* ── Field Notes ── */
  .notes-section { padding: 7rem 3rem; }
  .notes-inner { max-width: 1200px; margin: 0 auto; }
  .notes-grid { display: grid; gap: 1.5px; margin-top: 3rem; }
  .note-card {
    background: var(--bg3); border: 1px solid var(--border);
    padding: 2.5rem; display: grid; grid-template-columns: auto 1fr auto;
    gap: 2.5rem; align-items: start;
    transition: border-color 0.25s, background 0.25s;
  }
  .note-card:hover { border-color: rgba(196,136,46,0.5); background: #1c1508; }
  .note-tag { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; color: var(--amber); white-space: nowrap; padding-top: 0.2rem; }
  .note-q { font-family: var(--serif); font-size: 1.15rem; font-style: italic; line-height: 1.45; margin-bottom: 0.85rem; }
  .note-finding { font-size: 0.85rem; line-height: 1.6; color: rgba(242,235,217,0.7); margin-bottom: 0.75rem; }
  .note-label { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; }
  .note-metric { font-family: var(--mono); font-size: 0.8rem; color: var(--amber); white-space: nowrap; padding-top: 0.2rem; text-align: right; }

  /* ── The Eye ── */
  .eye-section { padding: 7rem 3rem; background: var(--bg2); }
  .eye-inner { max-width: 1200px; margin: 0 auto; }
  .eye-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px;
    margin-top: 3rem;
  }
  .eye-cell {
    position: relative; overflow: hidden; cursor: pointer;
  }
  .eye-cell:nth-child(1), .eye-cell:nth-child(4) { aspect-ratio: 3/4; }
  .eye-cell:nth-child(2), .eye-cell:nth-child(5) { aspect-ratio: 4/3; }
  .eye-cell:nth-child(3), .eye-cell:nth-child(6) { aspect-ratio: 3/4; }
  .eye-cell img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
  .eye-cell:hover img { transform: scale(1.06); }
  .eye-cell-caption {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(13,11,9,0.85) 0%, transparent 50%);
    display: flex; align-items: flex-end; padding: 1rem;
    opacity: 0; transition: opacity 0.3s;
  }
  .eye-cell:hover .eye-cell-caption { opacity: 1; }
  .eye-cell-caption span { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.15em; color: var(--text); text-transform: uppercase; }

  /* ── Contact ── */
  .contact-section { padding: 7rem 3rem; border-top: 1px solid var(--border); }
  .contact-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
  .contact-headline { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; line-height: 1.15; margin-bottom: 1.25rem; }
  .contact-headline em { font-style: italic; color: var(--amber); }
  .contact-sub { font-size: 0.9rem; line-height: 1.65; color: rgba(242,235,217,0.65); max-width: 360px; }
  .contact-links { display: flex; flex-direction: column; gap: 0; }
  .contact-link {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.4rem 0; border-bottom: 1px solid var(--border);
    text-decoration: none; color: var(--text);
    transition: padding-left 0.2s, color 0.2s;
    group: true;
  }
  .contact-link:hover { padding-left: 0.75rem; color: var(--amber); }
  .contact-link-k { font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
  .contact-link:hover .contact-link-k { color: var(--amber); }
  .contact-link-v { font-family: var(--sans); font-size: 0.9rem; }
  .contact-link-arrow { font-size: 0.8rem; color: var(--muted); transition: color 0.2s, transform 0.2s; }
  .contact-link:hover .contact-link-arrow { color: var(--amber); transform: translateX(4px); }

  /* ── Footer ── */
  .footer {
    padding: 2.5rem 3rem; border-top: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
    font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.15em;
    color: var(--muted); text-transform: uppercase;
  }
  .footer-coords { opacity: 0.5; }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    section, .wardrobe-section, .gazes-section, .notes-section, .eye-section, .contact-section { padding: 5rem 1.5rem; }
    .hero-content { padding: 0 1.5rem 4rem; }
    .hero-scroll { right: 1.5rem; bottom: 4rem; }
    .hero-meta { gap: 1.25rem; }
    .wardrobe-doors { grid-template-columns: 1fr; }
    .wardrobe-door { aspect-ratio: 4/3; }
    .wardrobe-door-open { opacity: 0; }
    .wardrobe-door.open .wardrobe-door-open { opacity: 1; pointer-events: auto; }
    .gazes-grid { grid-template-columns: 1fr; }
    .gaze-photo { aspect-ratio: 4/3; }
    .note-card { grid-template-columns: 1fr; gap: 1rem; }
    .note-metric { text-align: left; }
    .eye-grid { grid-template-columns: repeat(2, 1fr); }
    .eye-cell:nth-child(n) { aspect-ratio: 1/1; }
    .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
    .footer { flex-direction: column; gap: 0.75rem; text-align: center; }
  }

  /* ── Reveal animation ── */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
`

// ─── Component ────────────────────────────────────────────────────────────────
export default function MehulPortfolioV3() {
  const [openDoor, setOpenDoor] = useState(null)
  const revealRefs = useRef([])

  // Intersection observer for reveal animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    revealRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const addReveal = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  const toggleDoor = (id) => setOpenDoor(prev => prev === id ? null : id)

  return (
    <>
      <style>{css}</style>

      {/* ── Nav ── */}
      <nav className="nav">
        <a href="#" className="nav-logo">MB</a>
        <ul className="nav-links">
          <li><a href="#wardrobe">The Wardrobe</a></li>
          <li><a href="#gazes">Two Gazes</a></li>
          <li><a href="#notes">Field Notes</a></li>
          <li><a href="#eye">The Eye</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Contact</a>
      </nav>

      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Mehul Bhardwaj</span>
            <span>/</span>
            <span>Portfolio III</span>
            <span>/</span>
            <span>MMXXVI</span>
          </div>
          <h1 className="hero-headline">
            I notice things<br />
            <em>others miss.</em>
          </h1>
          <p className="hero-sub">
            In data. In the field. In how systems fail.
            Data Analyst at AMD · Engineering Science (ML) · University of Toronto.
            AMD · Masai Mara · Ngorongoro · Banff.
          </p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span>// Status</span>
              <span>Open to opportunities</span>
            </div>
            <div className="hero-meta-item">
              <span>// Currently</span>
              <span>Data Analyst · AMD Toronto</span>
            </div>
            <div className="hero-meta-item">
              <span>// Based</span>
              <span>Toronto · Canada</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>

      {/* ── The Wardrobe ── */}
      <div className="wardrobe-section" id="wardrobe">
        <div className="wardrobe-inner">
          <div className="wardrobe-header" ref={addReveal}>
            <div className="section-label">The Wardrobe</div>
            <h2 className="wardrobe-title">
              Three doors.<br />
              <em>One person.</em>
            </h2>
            <p className="wardrobe-subtitle">
              Hover to open. Every facet is genuine — the analyst, the builder, the observer are all the same curiosity applied differently.
            </p>
          </div>

          <div className="wardrobe-doors">
            {WARDROBE_DOORS.map((door) => (
              <div
                key={door.id}
                className={`wardrobe-door${openDoor === door.id ? ' open' : ''}`}
                onClick={() => toggleDoor(door.id)}
                onMouseEnter={() => { if (window.innerWidth > 768) setOpenDoor(door.id) }}
                onMouseLeave={() => { if (window.innerWidth > 768) setOpenDoor(null) }}
              >
                <div
                  className="wardrobe-door-photo"
                  style={{ backgroundImage: `url(${door.photo})`, backgroundPosition: door.photoPosition }}
                />
                <div className="wardrobe-door-overlay" />
                <div className="wardrobe-door-hanger" />

                {/* Closed state */}
                <div className="wardrobe-door-closed">
                  <div className="wardrobe-door-tag">{door.tag}</div>
                  <div className="wardrobe-door-name">{door.label}</div>
                  <div className="wardrobe-door-role">{door.role}</div>
                </div>

                {/* Open state */}
                <div className="wardrobe-door-open">
                  <div className="wardrobe-door-open-tag">{door.tag} · {door.role}</div>
                  <div className="wardrobe-door-headline">{door.headline}</div>
                  <div className="wardrobe-door-body">{door.body}</div>
                  <div className="wardrobe-door-stats">
                    {door.stats.map((s, i) => (
                      <div key={i}>
                        <span className="wardrobe-stat-val">{s.value}</span>
                        <span className="wardrobe-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Two Gazes ── */}
      <div className="gazes-section" id="gazes">
        <div className="gazes-inner">
          <div ref={addReveal}>
            <div className="section-label">Two Gazes</div>
          </div>

          <div className="gazes-grid" ref={addReveal}>
            <div className="gaze-photo">
              <img src={PHOTOS.LIONESS} alt="Post-kill lioness, Masai Mara" />
              <div className="gaze-photo-caption">Masai Mara · Kenya</div>
            </div>
            <div className="gaze-photo">
              <img src={PHOTOS.MILKY_WAY} alt="Mehul under the Milky Way" />
              <div className="gaze-photo-caption">Tanzania · East Africa</div>
            </div>
          </div>

          <p className="gazes-quote reveal" ref={addReveal}>
            "I've learned to be comfortable<br />
            in <em>both directions.</em>"
          </p>
        </div>
      </div>

      {/* ── Field Notes ── */}
      <div className="notes-section" id="notes">
        <div className="notes-inner">
          <div ref={addReveal}>
            <div className="section-label">Field Notes</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.5rem' }}>
              Projects as <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>investigations.</em>
            </h2>
            <p style={{ fontFamily: 'var(--sans)', color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.75rem', maxWidth: '440px', lineHeight: 1.6 }}>
              Every project started with a question I couldn't leave alone.
            </p>
          </div>

          <div className="notes-grid">
            {FIELD_NOTES.map((note, i) => (
              <div className="note-card reveal" key={i} ref={addReveal}>
                <div className="note-tag">{note.tag}</div>
                <div>
                  <div className="note-q">{note.question}</div>
                  <div className="note-finding">{note.finding}</div>
                  <div className="note-label">{note.label}</div>
                </div>
                <div className="note-metric">{note.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── The Eye ── */}
      <div className="eye-section" id="eye">
        <div className="eye-inner">
          <div ref={addReveal}>
            <div className="section-label">The Eye</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1 }}>
              Kenya · Tanzania · <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>Banff.</em>
            </h2>
            <p style={{ fontFamily: 'var(--sans)', color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.75rem', maxWidth: '440px', lineHeight: 1.6 }}>
              I travel to where the fauna is. These are my frames — not a tour group, not an iPhone.
            </p>
          </div>

          <div className="eye-grid" ref={addReveal}>
            {EYE_GRID.map((photo, i) => (
              <div className="eye-cell" key={i}>
                <img src={photo.src} alt={photo.alt} style={{ objectPosition: photo.pos }} />
                <div className="eye-cell-caption">
                  <span>{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact ── */}
      <div className="contact-section" id="contact">
        <div className="contact-inner">
          <div ref={addReveal}>
            <div className="section-label">Contact</div>
            <h2 className="contact-headline">
              Working on something <em>hard?</em>
            </h2>
            <p className="contact-sub">
              I'm open to data, AI, and ML roles. If you're building something that needs someone who asks "but what are the actual numbers?" — let's talk.
            </p>
          </div>

          <div className="contact-links" ref={addReveal}>
            {[
              { k: 'Email', v: 'mehulbh9@gmail.com', href: 'mailto:mehulbh9@gmail.com' },
              { k: 'LinkedIn', v: 'in/mehulbh9', href: 'https://linkedin.com/in/mehulbh9' },
              { k: 'GitHub', v: '@mehulbh9', href: 'https://github.com/mehulbh9' },
              { k: 'Photography', v: '@photography_mehul', href: 'https://instagram.com/photography_mehul' },
              { k: 'Resume', v: 'Download PDF · 2025', href: '/2025_CV_MEHUL.pdf' },
            ].map((link) => (
              <a key={link.k} href={link.href} className="contact-link" target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <span className="contact-link-k">{link.k}</span>
                <span className="contact-link-v">{link.v}</span>
                <span className="contact-link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <span>Mehul Bhardwaj · MMXXVI</span>
        <span>mehulbhardwaj.ca</span>
        <span className="footer-coords">43.6532°N · 79.3832°W · Toronto</span>
      </footer>
    </>
  )
}
