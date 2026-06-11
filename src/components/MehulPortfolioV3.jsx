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

// Drop the Higgsfield clip here once rendered (e.g. '/videos/hero.mp4').
// While null, the hero shows the animated Milky Way still + CSS starfield.
const HERO_VIDEO = null

// ─── Wardrobe doors (three professional facets) ───────────────────────────────
const WARDROBE_DOORS = [
  {
    id: 'analyst',
    label: 'The Analyst',
    role: 'AMD · Data & Automation',
    photo: PHOTOS.AMD_BW,
    photoPosition: '50% 20%',
    tag: '01',
    headline: 'I turn noise into signal.',
    body: 'At AMD I build Python automation and ETL pipelines, Monte Carlo schedule-risk simulations, and Jira dashboards tracking 200+ data-center builds. As an intern I cut a reporting job from 10 minutes to 5 seconds — 120× faster.',
    stats: [
      { value: '120×', label: 'pipeline speedup' },
      { value: '300M+', label: 'rows modeled' },
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
    body: 'XGBoost + SHAP on 300M-row datasets. An LLM/RAG system over 200+ documents at GEI Consultants. Gaussian Process research with Active Learning at UofT. BASc Engineering Science (Machine Intelligence) — Canada\'s most selective engineering program.',
    stats: [
      { value: 'RAG', label: '200+ docs · GEI' },
      { value: 'GPR', label: 'active learning · UofT' },
      { value: 'XGB', label: 'SHAP interpretability' },
    ],
  },
  {
    id: 'observer',
    label: 'The Observer',
    role: 'The eye behind the work',
    photo: PHOTOS.LIONESS,
    photoPosition: '50% 40%',
    tag: '03',
    headline: 'I notice things others miss.',
    body: 'Thousands of wildlife frames taught me the trait my analytics depend on: the signal is always there — you just have to be patient and positioned correctly. The same eye that finds the leopard in the grass finds the anomaly in the data.',
    stats: [
      { value: 'Patience', label: 'under uncertainty' },
      { value: 'Precision', label: 'every frame' },
      { value: 'The eye', label: 'noise → subject' },
    ],
  },
]

// ─── Experience (recruiter timeline) ──────────────────────────────────────────
const EXPERIENCE = [
  {
    company: 'AMD',
    title: 'Data Analyst — Automation & Program Analytics',
    date: 'Jul 2025 – Present',
    type: 'Full-time',
    points: [
      'Python automation & ETL pipelines for task classification across data-center programs',
      'Monte Carlo simulations & velocity-based forecasting for schedule-risk analysis',
      'Jira dashboards tracking 200+ builds; weekly analytical reports for leadership',
    ],
    stack: ['Python', 'ETL', 'Monte Carlo', 'Jira', 'Forecasting'],
  },
  {
    company: 'AMD',
    title: 'Data Scientist Intern',
    date: 'May 2024 – Sept 2024',
    type: 'Internship',
    points: [
      'Built an XGBoost model with SHAP interpretability on a 300M+ row, 500+ column dataset',
      'Engineered 10 specialized datasets from Snowflake cloud data',
      'Anomaly-detection pipeline using k-means clustering',
    ],
    stack: ['XGBoost', 'SHAP', 'Snowflake', 'Pandas', 'K-means'],
  },
  {
    company: 'AMD',
    title: 'Project Manager Intern',
    date: 'May 2023 – Sept 2024',
    type: 'Internship',
    points: [
      'Reduced data processing from 10+ minutes to under 5 seconds with Python automation',
      'Deployed a real-time supply–demand dashboard for 200+ NPI builds',
      'Documented workflows to streamline onboarding for 10+ team members',
    ],
    stack: ['Python', 'Dashboards', 'Supply Chain', 'Automation'],
  },
  {
    company: 'University of Toronto',
    title: 'Undergraduate Research Assistant',
    date: 'Sept 2024 – Present',
    type: 'Research',
    points: [
      'Gaussian Process Regression with Active Learning for lithium-sulfide manufacturing optimization',
      'Interactive 3D visualizations for Bayesian Optimization',
      'Imputation & feature engineering in a low-data regime',
    ],
    stack: ['Gaussian Process', 'Bayesian Opt', 'Active Learning', 'Python'],
  },
  {
    company: 'GEI Consultants',
    title: 'AI/ML Engineer — Capstone',
    date: 'Sept 2024 – Feb 2025',
    type: 'Capstone',
    points: [
      'AI-driven RFP response system using LLMs via the OpenAI API',
      'RAG implementation with Hugging Face embeddings across 200+ documents',
      'Custom retrieval functions to prevent hallucinations',
    ],
    stack: ['LLMs', 'RAG', 'OpenAI API', 'Hugging Face'],
  },
]

const EDUCATION = {
  school: 'University of Toronto',
  degree: 'BASc, Engineering Science — Machine Intelligence',
  date: '2020 – 2025',
  detail: 'Canada\'s most selective engineering program. Specialized in deep learning, neural networks, probabilistic reasoning, and AI systems design. Engineering Science thesis in ML.',
  courses: ['Machine Learning', 'Neural Networks & Deep Learning', 'Artificial Intelligence', 'Probabilistic Reasoning', 'Machine Intelligence Software'],
}

// ─── Field Notes (projects as investigations) ─────────────────────────────────
const FIELD_NOTES = [
  {
    tag: 'FN · 01',
    question: 'Can a reporting job run 120× faster without changing the output?',
    finding: 'Yes — the bottleneck was sequential I/O, not compute. Rebuilt in Python with vectorized ops and parallel batch writes.',
    metric: '10 min → 5 sec',
    label: 'AMD · Automation & Program Analytics',
  },
  {
    tag: 'FN · 02',
    question: 'Can an LLM reason over live internal documents — or does it just hallucinate?',
    finding: 'With a well-structured RAG pipeline it reasons correctly. The failure mode isn\'t hallucination — it\'s retrieval precision.',
    metric: '200+ docs · GEI Consultants',
    label: 'LLM / RAG System',
  },
  {
    tag: 'FN · 03',
    question: 'How do you make an ML model tell you why it was wrong?',
    finding: 'SHAP values on XGBoost. The 6% error rate was more informative than the 94% accuracy — anomalies are where the signal hides.',
    metric: 'XGBoost · SHAP · 300M rows',
    label: 'AMD Data Science',
  },
]

// ─── Eye grid photos (no place names — subject captions only) ──────────────────
const EYE_GRID = [
  { src: PHOTOS.ELEPHANTS,   alt: 'Elephant herd beneath a snow-capped peak',  caption: 'The Herd',       pos: '50% 60%' },
  { src: PHOTOS.LIONESS,     alt: 'Lioness, direct eye contact at dusk',        caption: 'The Stare',      pos: '50% 30%' },
  { src: PHOTOS.CHEETAH,     alt: 'Cheetah portrait against a dark background',  caption: 'The Portrait',   pos: '50% 40%' },
  { src: PHOTOS.LEOPARD_ISO, alt: 'Colour-isolated leopard in dry grass',       caption: 'The Edit',       pos: '50% 50%' },
  { src: PHOTOS.LEOPARD_CUB, alt: 'Leopard cub looking into the lens',          caption: 'The Patience',   pos: '50% 40%' },
  { src: PHOTOS.ELK,         alt: 'Bull elk in velvet at golden hour',          caption: 'The Velvet',     pos: '50% 50%' },
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
  .nav-links { display: flex; gap: 2.25rem; list-style: none; }
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
  .hero-bg, .hero-video {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover;
    background-size: cover; background-position: 50% 35%;
    animation: heroDrift 24s ease-in-out infinite alternate;
  }
  @keyframes heroDrift { from { transform: scale(1.04) translateY(0); } to { transform: scale(1.12) translateY(-2%); } }
  .hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(to top, rgba(13,11,9,0.96) 0%, rgba(13,11,9,0.5) 40%, rgba(13,11,9,0.15) 100%);
  }
  /* animated amber glow that breathes from the lower edge */
  .hero-glow {
    position: absolute; left: 50%; bottom: -20%; z-index: 1;
    width: 120vw; height: 60vh; transform: translateX(-50%);
    background: radial-gradient(ellipse at center, rgba(196,136,46,0.35) 0%, rgba(196,136,46,0.08) 35%, transparent 65%);
    filter: blur(40px);
    animation: glowPulse 7s ease-in-out infinite;
    pointer-events: none;
  }
  @keyframes glowPulse { 0%,100% { opacity: 0.55; transform: translateX(-50%) scale(1); } 50% { opacity: 0.9; transform: translateX(-50%) scale(1.08); } }
  /* drifting starfield */
  .starfield { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
  .star { position: absolute; width: 2px; height: 2px; border-radius: 50%; background: rgba(242,235,217,0.8); animation: twinkle var(--tw, 4s) ease-in-out infinite; }
  @keyframes twinkle { 0%,100% { opacity: 0.15; } 50% { opacity: 0.95; } }

  .hero-content { position: relative; z-index: 2; padding: 0 3rem 5rem; max-width: 920px; }
  .hero-eyebrow {
    font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.2em;
    color: var(--amber); text-transform: uppercase; margin-bottom: 1.5rem;
    display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;
  }
  .hero-eyebrow span { opacity: 0.6; }
  .hero-headline {
    font-family: var(--serif); font-size: clamp(3rem, 7vw, 6.5rem);
    font-weight: 900; line-height: 1.0; margin-bottom: 1.75rem; letter-spacing: -0.02em;
  }
  .hero-headline em { font-style: italic; color: var(--amber); }
  .hero-headline .line { display: block; overflow: hidden; }
  .hero-headline .line > span { display: block; animation: lineRise 0.9s cubic-bezier(0.16,1,0.3,1) both; }
  .hero-headline .line:nth-child(2) > span { animation-delay: 0.15s; }
  @keyframes lineRise { from { transform: translateY(105%); } to { transform: translateY(0); } }
  .hero-sub {
    font-family: var(--sans); font-size: 1.05rem; font-weight: 300;
    color: rgba(242,235,217,0.78); line-height: 1.6; max-width: 560px; margin-bottom: 2.25rem;
    animation: fadeUp 1s ease 0.5s both;
  }
  .hero-sub strong { color: var(--text); font-weight: 500; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  .hero-meta {
    display: flex; gap: 2.5rem; flex-wrap: wrap;
    font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em;
    color: var(--muted); text-transform: uppercase;
    animation: fadeUp 1s ease 0.7s both;
  }
  .hero-meta-item span:last-child { color: var(--text); margin-left: 0.5rem; }
  .live-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--amber2); margin-right: 0.5rem; box-shadow: 0 0 0 0 rgba(232,168,74,0.7); animation: livePulse 2s infinite; }
  @keyframes livePulse { 0% { box-shadow: 0 0 0 0 rgba(232,168,74,0.6); } 70% { box-shadow: 0 0 0 8px rgba(232,168,74,0); } 100% { box-shadow: 0 0 0 0 rgba(232,168,74,0); } }
  .hero-scroll {
    position: absolute; right: 3rem; bottom: 5rem; z-index: 2;
    display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
    font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase;
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
  .section-label::after { content: ''; flex: 1; max-width: 60px; height: 1px; background: linear-gradient(to right, var(--amber), transparent); }
  .section-title { font-family: var(--serif); font-size: clamp(2rem,4vw,3rem); font-weight: 700; line-height: 1.1; }
  .section-title em { font-style: italic; color: var(--amber); }
  .section-intro { font-family: var(--sans); color: var(--muted); font-size: 0.92rem; margin-top: 0.9rem; max-width: 460px; line-height: 1.6; }

  /* ── Wardrobe ── */
  .wardrobe-section { padding: 7rem 3rem; }
  .wardrobe-inner { max-width: 1200px; margin: 0 auto; }
  .wardrobe-header { margin-bottom: 4rem; }
  .wardrobe-doors { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; border: 1.5px solid var(--border); }
  .wardrobe-door { position: relative; aspect-ratio: 3/4; overflow: hidden; cursor: pointer; background: var(--bg3); }
  .wardrobe-door-photo {
    position: absolute; inset: 0; background-size: cover; background-repeat: no-repeat;
    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s;
    opacity: 0.35; transform: scale(1.08);
  }
  .wardrobe-door:hover .wardrobe-door-photo, .wardrobe-door.open .wardrobe-door-photo { opacity: 0.9; transform: scale(1.0); }
  .wardrobe-door-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(13,11,9,0.97) 0%, rgba(13,11,9,0.5) 50%, rgba(13,11,9,0.1) 100%); }
  .wardrobe-door-closed { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: opacity 0.35s; z-index: 2; }
  .wardrobe-door:hover .wardrobe-door-closed, .wardrobe-door.open .wardrobe-door-closed { opacity: 0; pointer-events: none; }
  .wardrobe-door-tag { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.25em; color: var(--amber); margin-bottom: 1rem; }
  .wardrobe-door-name { font-family: var(--serif); font-size: 1.6rem; font-weight: 700; color: var(--text); text-align: center; line-height: 1.2; }
  .wardrobe-door-role { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.12em; color: var(--muted); margin-top: 0.6rem; text-transform: uppercase; text-align: center; }
  .wardrobe-door-hanger { width: 1px; height: 3rem; background: var(--border); position: absolute; top: 0; left: 50%; }
  .wardrobe-door-open { position: absolute; inset: 0; padding: 2rem 1.5rem; display: flex; flex-direction: column; justify-content: flex-end; opacity: 0; transition: opacity 0.35s 0.1s; z-index: 3; pointer-events: none; }
  .wardrobe-door:hover .wardrobe-door-open, .wardrobe-door.open .wardrobe-door-open { opacity: 1; pointer-events: auto; }
  .wardrobe-door-open-tag { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.18em; color: var(--amber); margin-bottom: 0.75rem; text-transform: uppercase; }
  .wardrobe-door-headline { font-family: var(--serif); font-size: 1.15rem; font-weight: 700; line-height: 1.3; margin-bottom: 0.75rem; }
  .wardrobe-door-body { font-size: 0.78rem; line-height: 1.55; color: rgba(242,235,217,0.75); margin-bottom: 1.25rem; }
  .wardrobe-door-stats { display: flex; gap: 1.1rem; flex-wrap: wrap; }
  .wardrobe-stat-val { font-family: var(--mono); font-size: 0.95rem; color: var(--amber); display: block; }
  .wardrobe-stat-label { font-family: var(--mono); font-size: 0.52rem; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; }

  /* ── Experience ── */
  .exp-section { padding: 7rem 3rem; background: var(--bg2); }
  .exp-inner { max-width: 1200px; margin: 0 auto; }
  .exp-grid { display: grid; grid-template-columns: 1fr; margin-top: 3rem; border-left: 1px solid var(--border); }
  .exp-row {
    position: relative; padding: 2rem 0 2rem 2.5rem;
    border-bottom: 1px solid var(--border);
    display: grid; grid-template-columns: 220px 1fr; gap: 2.5rem; align-items: start;
    transition: background 0.25s;
  }
  .exp-row:hover { background: rgba(196,136,46,0.04); }
  .exp-row::before {
    content: ''; position: absolute; left: -5px; top: 2.5rem;
    width: 9px; height: 9px; border-radius: 50%; background: var(--bg2);
    border: 1.5px solid var(--amber); transition: all 0.25s;
  }
  .exp-row:hover::before { background: var(--amber); box-shadow: 0 0 12px rgba(196,136,46,0.7); }
  .exp-meta-company { font-family: var(--serif); font-size: 1.15rem; font-weight: 700; color: var(--text); }
  .exp-meta-date { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; margin-top: 0.4rem; }
  .exp-meta-type { display: inline-block; margin-top: 0.6rem; font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.12em; color: var(--amber); border: 1px solid var(--border); padding: 0.2rem 0.6rem; text-transform: uppercase; }
  .exp-title { font-family: var(--sans); font-size: 1rem; font-weight: 500; color: var(--text); margin-bottom: 0.85rem; }
  .exp-points { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }
  .exp-points li { position: relative; padding-left: 1.1rem; font-size: 0.85rem; line-height: 1.5; color: rgba(242,235,217,0.72); }
  .exp-points li::before { content: '→'; position: absolute; left: 0; color: var(--amber); }
  .exp-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .exp-chip { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.05em; color: var(--muted); border: 1px solid var(--border); padding: 0.25rem 0.6rem; }
  /* education card */
  .edu-card { margin-top: 2.5rem; border: 1px solid var(--border); padding: 2.5rem; display: grid; grid-template-columns: 220px 1fr; gap: 2.5rem; background: var(--bg3); }
  .edu-detail { font-size: 0.88rem; line-height: 1.6; color: rgba(242,235,217,0.75); margin-bottom: 1rem; }

  /* ── Field Notes ── */
  .notes-section { padding: 7rem 3rem; }
  .notes-inner { max-width: 1200px; margin: 0 auto; }
  .notes-grid { display: grid; gap: 1.5px; margin-top: 3rem; }
  .note-card { background: var(--bg3); border: 1px solid var(--border); padding: 2.5rem; display: grid; grid-template-columns: auto 1fr auto; gap: 2.5rem; align-items: start; transition: border-color 0.25s, background 0.25s; }
  .note-card:hover { border-color: rgba(196,136,46,0.5); background: #1c1508; }
  .note-tag { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; color: var(--amber); white-space: nowrap; padding-top: 0.2rem; }
  .note-q { font-family: var(--serif); font-size: 1.15rem; font-style: italic; line-height: 1.45; margin-bottom: 0.85rem; }
  .note-finding { font-size: 0.85rem; line-height: 1.6; color: rgba(242,235,217,0.7); margin-bottom: 0.75rem; }
  .note-label { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; }
  .note-metric { font-family: var(--mono); font-size: 0.8rem; color: var(--amber); white-space: nowrap; padding-top: 0.2rem; text-align: right; }

  /* ── Two Gazes ── */
  .gazes-section { padding: 7rem 3rem; background: var(--bg2); }
  .gazes-inner { max-width: 1100px; margin: 0 auto; }
  .gazes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; margin: 3rem 0; }
  .gaze-photo { aspect-ratio: 4/5; overflow: hidden; position: relative; }
  .gaze-photo img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
  .gaze-photo:hover img { transform: scale(1.04); }
  .gaze-photo-caption { position: absolute; bottom: 1.25rem; left: 1.25rem; font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.18em; color: rgba(242,235,217,0.75); text-transform: uppercase; }
  .gazes-quote { font-family: var(--serif); font-size: clamp(1.5rem, 3vw, 2.4rem); font-style: italic; font-weight: 400; text-align: center; color: var(--text); line-height: 1.4; max-width: 700px; margin: 0 auto; }
  .gazes-quote em { color: var(--amber); }

  /* ── The Eye ── */
  .eye-section { padding: 7rem 3rem; }
  .eye-inner { max-width: 1200px; margin: 0 auto; }
  .eye-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; margin-top: 3rem; }
  .eye-cell { position: relative; overflow: hidden; cursor: pointer; }
  .eye-cell:nth-child(1), .eye-cell:nth-child(4) { aspect-ratio: 3/4; }
  .eye-cell:nth-child(2), .eye-cell:nth-child(5) { aspect-ratio: 4/3; }
  .eye-cell:nth-child(3), .eye-cell:nth-child(6) { aspect-ratio: 3/4; }
  .eye-cell img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
  .eye-cell:hover img { transform: scale(1.06); }
  .eye-cell-caption { position: absolute; inset: 0; background: linear-gradient(to top, rgba(13,11,9,0.85) 0%, transparent 50%); display: flex; align-items: flex-end; padding: 1rem; opacity: 0; transition: opacity 0.3s; }
  .eye-cell:hover .eye-cell-caption { opacity: 1; }
  .eye-cell-caption span { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.15em; color: var(--text); text-transform: uppercase; }
  .eye-note { font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; margin-top: 1.5rem; text-align: right; }

  /* ── Contact ── */
  .contact-section { padding: 7rem 3rem; border-top: 1px solid var(--border); }
  .contact-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
  .contact-headline { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; line-height: 1.15; margin-bottom: 1.25rem; }
  .contact-headline em { font-style: italic; color: var(--amber); }
  .contact-sub { font-size: 0.9rem; line-height: 1.65; color: rgba(242,235,217,0.65); max-width: 360px; }
  .contact-links { display: flex; flex-direction: column; gap: 0; }
  .contact-link { display: flex; align-items: center; justify-content: space-between; padding: 1.4rem 0; border-bottom: 1px solid var(--border); text-decoration: none; color: var(--text); transition: padding-left 0.2s, color 0.2s; }
  .contact-link:hover { padding-left: 0.75rem; color: var(--amber); }
  .contact-link-k { font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
  .contact-link:hover .contact-link-k { color: var(--amber); }
  .contact-link-v { font-family: var(--sans); font-size: 0.9rem; }
  .contact-link-arrow { font-size: 0.8rem; color: var(--muted); transition: color 0.2s, transform 0.2s; }
  .contact-link:hover .contact-link-arrow { color: var(--amber); transform: translateX(4px); }

  /* ── Footer ── */
  .footer { padding: 2.5rem 3rem; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.15em; color: var(--muted); text-transform: uppercase; }
  .footer-coords { opacity: 0.5; }

  /* ── Reveal animation ── */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    section, .wardrobe-section, .exp-section, .gazes-section, .notes-section, .eye-section, .contact-section { padding: 5rem 1.5rem; }
    .hero-content { padding: 0 1.5rem 4rem; }
    .hero-scroll { right: 1.5rem; bottom: 4rem; }
    .hero-meta { gap: 1.25rem; }
    .wardrobe-doors { grid-template-columns: 1fr; }
    .wardrobe-door { aspect-ratio: 4/3; }
    .wardrobe-door-open { opacity: 0; }
    .wardrobe-door.open .wardrobe-door-open { opacity: 1; pointer-events: auto; }
    .exp-row { grid-template-columns: 1fr; gap: 1rem; }
    .edu-card { grid-template-columns: 1fr; gap: 1.25rem; padding: 1.75rem; }
    .note-card { grid-template-columns: 1fr; gap: 1rem; }
    .note-metric { text-align: left; }
    .gazes-grid { grid-template-columns: 1fr; }
    .gaze-photo { aspect-ratio: 4/3; }
    .eye-grid { grid-template-columns: repeat(2, 1fr); }
    .eye-cell:nth-child(n) { aspect-ratio: 1/1; }
    .eye-note { text-align: left; }
    .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
    .footer { flex-direction: column; gap: 0.75rem; text-align: center; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-bg, .hero-video, .hero-glow, .star, .live-dot, .hero-scroll-line { animation: none !important; }
    .hero-headline .line > span, .hero-sub, .hero-meta { animation: none !important; }
  }
`

// pre-computed starfield positions
const STARS = Array.from({ length: 42 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  tw: `${3 + (i % 5)}s`,
  delay: `${(i % 7) * 0.4}s`,
  size: i % 4 === 0 ? 3 : 2,
}))

// ─── Component ────────────────────────────────────────────────────────────────
export default function MehulPortfolioV3() {
  const [openDoor, setOpenDoor] = useState(null)
  const revealRefs = useRef([])

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
          <li><a href="#wardrobe">Identity</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#notes">Field Notes</a></li>
          <li><a href="#eye">The Eye</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Contact</a>
      </nav>

      {/* ── Hero ── */}
      <div className="hero">
        {HERO_VIDEO ? (
          <video className="hero-video" autoPlay muted loop playsInline poster={PHOTOS.MILKY_WAY}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <div className="hero-bg" style={{ backgroundImage: `url(${PHOTOS.MILKY_WAY})` }} />
        )}
        <div className="starfield">
          {STARS.map((s, i) => (
            <span key={i} className="star" style={{ left: s.left, top: s.top, width: s.size, height: s.size, ['--tw']: s.tw, animationDelay: s.delay }} />
          ))}
        </div>
        <div className="hero-glow" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Mehul Bhardwaj</span><span>/</span><span>Data · AI · ML</span><span>/</span><span>MMXXVI</span>
          </div>
          <h1 className="hero-headline">
            <span className="line"><span>I notice things</span></span>
            <span className="line"><span><em>others miss.</em></span></span>
          </h1>
          <p className="hero-sub">
            <strong>Data Analyst at AMD</strong> — automation, ML, and program analytics.
            BASc <strong>Engineering Science (Machine Intelligence)</strong>, University of Toronto.
            I build the pipelines and models that turn 300M rows of noise into the one number that changes a decision.
          </p>
          <div className="hero-meta">
            <div className="hero-meta-item"><span><span className="live-dot" />// Status</span><span>Open to opportunities</span></div>
            <div className="hero-meta-item"><span>// Currently</span><span>Data Analyst · AMD Toronto</span></div>
            <div className="hero-meta-item"><span>// Education</span><span>EngSci ML · UofT</span></div>
          </div>
        </div>

        <div className="hero-scroll"><span>Scroll</span><div className="hero-scroll-line" /></div>
      </div>

      {/* ── The Wardrobe ── */}
      <div className="wardrobe-section" id="wardrobe">
        <div className="wardrobe-inner">
          <div className="wardrobe-header reveal" ref={addReveal}>
            <div className="section-label">Identity</div>
            <h2 className="section-title">Three doors.<br /><em>One operator.</em></h2>
            <p className="section-intro">Hover to open. The analyst, the builder, the observer are the same curiosity pointed in three directions — and all three show up in the work.</p>
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
                <div className="wardrobe-door-photo" style={{ backgroundImage: `url(${door.photo})`, backgroundPosition: door.photoPosition }} />
                <div className="wardrobe-door-overlay" />
                <div className="wardrobe-door-hanger" />
                <div className="wardrobe-door-closed">
                  <div className="wardrobe-door-tag">{door.tag}</div>
                  <div className="wardrobe-door-name">{door.label}</div>
                  <div className="wardrobe-door-role">{door.role}</div>
                </div>
                <div className="wardrobe-door-open">
                  <div className="wardrobe-door-open-tag">{door.tag} · {door.role}</div>
                  <div className="wardrobe-door-headline">{door.headline}</div>
                  <div className="wardrobe-door-body">{door.body}</div>
                  <div className="wardrobe-door-stats">
                    {door.stats.map((s, i) => (
                      <div key={i}><span className="wardrobe-stat-val">{s.value}</span><span className="wardrobe-stat-label">{s.label}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Experience ── */}
      <div className="exp-section" id="experience">
        <div className="exp-inner">
          <div className="reveal" ref={addReveal}>
            <div className="section-label">Experience</div>
            <h2 className="section-title">Three years at <em>AMD.</em> Research at <em>UofT.</em></h2>
            <p className="section-intro">Data science, AI, and program management — from 300M-row models to LLM systems to leadership-facing analytics.</p>
          </div>

          <div className="exp-grid">
            {EXPERIENCE.map((job, i) => (
              <div className="exp-row reveal" key={i} ref={addReveal}>
                <div>
                  <div className="exp-meta-company">{job.company}</div>
                  <div className="exp-meta-date">{job.date}</div>
                  <div className="exp-meta-type">{job.type}</div>
                </div>
                <div>
                  <div className="exp-title">{job.title}</div>
                  <ul className="exp-points">
                    {job.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                  <div className="exp-stack">
                    {job.stack.map((s, j) => <span className="exp-chip" key={j}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="edu-card reveal" ref={addReveal}>
            <div>
              <div className="exp-meta-company">{EDUCATION.school}</div>
              <div className="exp-meta-date">{EDUCATION.date}</div>
              <div className="exp-meta-type">Education</div>
            </div>
            <div>
              <div className="exp-title">{EDUCATION.degree}</div>
              <p className="edu-detail">{EDUCATION.detail}</p>
              <div className="exp-stack">
                {EDUCATION.courses.map((c, j) => <span className="exp-chip" key={j}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Field Notes ── */}
      <div className="notes-section" id="notes">
        <div className="notes-inner">
          <div className="reveal" ref={addReveal}>
            <div className="section-label">Field Notes</div>
            <h2 className="section-title">Projects as <em>investigations.</em></h2>
            <p className="section-intro">Every project started with a question I couldn't leave alone.</p>
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

      {/* ── Two Gazes ── */}
      <div className="gazes-section" id="gazes">
        <div className="gazes-inner">
          <div className="reveal" ref={addReveal}><div className="section-label">Two Gazes</div></div>
          <div className="gazes-grid reveal" ref={addReveal}>
            <div className="gaze-photo">
              <img src={PHOTOS.LIONESS} alt="Lioness, direct eye contact" />
              <div className="gaze-photo-caption">The wild looks back</div>
            </div>
            <div className="gaze-photo">
              <img src={PHOTOS.MILKY_WAY} alt="Mehul beneath the Milky Way" />
              <div className="gaze-photo-caption">I look up</div>
            </div>
          </div>
          <p className="gazes-quote reveal" ref={addReveal}>
            "I've learned to be comfortable<br />in <em>both directions.</em>"
          </p>
        </div>
      </div>

      {/* ── The Eye ── */}
      <div className="eye-section" id="eye">
        <div className="eye-inner">
          <div className="reveal" ref={addReveal}>
            <div className="section-label">The Eye</div>
            <h2 className="section-title">The same eye, <em>off the clock.</em></h2>
            <p className="section-intro">Wildlife photography is where the trait my work depends on was trained: patience, precision, and noticing the subject before anyone else does.</p>
          </div>
          <div className="eye-grid reveal" ref={addReveal}>
            {EYE_GRID.map((photo, i) => (
              <div className="eye-cell" key={i}>
                <img src={photo.src} alt={photo.alt} style={{ objectPosition: photo.pos }} />
                <div className="eye-cell-caption"><span>{photo.caption}</span></div>
              </div>
            ))}
          </div>
          <p className="eye-note">Shot on safari & in the Rockies · @photography_mehul</p>
        </div>
      </div>

      {/* ── Contact ── */}
      <div className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="reveal" ref={addReveal}>
            <div className="section-label">Contact</div>
            <h2 className="contact-headline">Working on something <em>hard?</em></h2>
            <p className="contact-sub">I'm open to roles in data, AI, and ML. If you're building something that needs someone who asks "but what are the actual numbers?" — let's talk.</p>
          </div>
          <div className="contact-links reveal" ref={addReveal}>
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
        <span className="footer-coords">Toronto · Canada</span>
      </footer>
    </>
  )
}
