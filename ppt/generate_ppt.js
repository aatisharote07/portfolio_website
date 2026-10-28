const PptxGenJS = require('pptxgenjs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const icons = require('react-icons/fa');
const mdIcons = require('react-icons/md');
const siIcons = require('react-icons/si');
const hiIcons = require('react-icons/hi');

// ── PALETTE ─────────────────────────────────────────────────────────────────
// Deep navy + electric teal + crisp white — premium tech feel
const C = {
  navy:    '0D1B2A',  // darkest bg
  navyMid: '1B2B3A',  // slide bg
  navyLt:  '1E3A4F',  // card bg
  teal:    '00C9B1',  // primary accent
  tealDim: '009E8C',  // secondary teal
  blue:    '4A9EFF',  // highlight blue
  white:   'FFFFFF',
  offWhite:'E8F4F8',
  muted:   '8BAFC4',
  gold:    'FFD166',
  slate:   '2D4A60',
};

// ── ICON HELPER ──────────────────────────────────────────────────────────────
async function iconPng(IconComp, color = '#FFFFFF', size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComp, { color, size: String(size) })
  );
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}

// ── SLIDE HELPERS ────────────────────────────────────────────────────────────
function navyBg(slide) {
  slide.background = { color: C.navyMid };
}

function addTitle(slide, text, y = 0.25) {
  slide.addText(text, {
    x: 0.5, y, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.teal,
    fontFace: 'Calibri', align: 'left', margin: 0,
  });
  // Subtle teal bar under title
  slide.addShape('rect', {
    x: 0.5, y: y + 0.58, w: 1.2, h: 0.04,
    fill: { color: C.teal },
    line: { color: C.teal, width: 0 },
  });
}

function addCard(slide, x, y, w, h, opts = {}) {
  slide.addShape('rect', {
    x, y, w, h,
    fill: { color: opts.fill || C.navyLt },
    line: { color: opts.border || C.slate, width: opts.borderW || 1 },
    shadow: opts.shadow
      ? { type: 'outer', color: '000000', blur: 8, offset: 3, angle: 135, opacity: 0.2 }
      : undefined,
  });
}

function chipBadge(slide, x, y, label, color) {
  const w = label.length * 0.11 + 0.35;
  slide.addShape('roundRect', {
    x, y, w, h: 0.26, rectRadius: 0.08,
    fill: { color: color || C.teal, transparency: 20 },
    line: { color: color || C.teal, width: 1 },
  });
  slide.addText(label, {
    x, y: y + 0.01, w, h: 0.24,
    fontSize: 9, bold: true, color: C.white,
    fontFace: 'Calibri', align: 'center', margin: 0,
  });
  return w;
}

// ── BUILD ────────────────────────────────────────────────────────────────────
async function build() {
  const pres = new PptxGenJS();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'AI Resume Analyzer';

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 1 — TITLE
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    slide.background = { color: C.navy };

    // Large teal circle accent (top-right)
    slide.addShape('ellipse', {
      x: 7.8, y: -1.2, w: 4, h: 4,
      fill: { color: C.teal, transparency: 85 },
      line: { color: C.teal, width: 0 },
    });
    slide.addShape('ellipse', {
      x: -1.5, y: 3.5, w: 3.5, h: 3.5,
      fill: { color: C.blue, transparency: 88 },
      line: { color: C.blue, width: 0 },
    });

    // Chip: Major Project
    chipBadge(slide, 0.55, 0.7, '  MAJOR PROJECT — GROUP 09  ', C.teal);

    // Title
    slide.addText('AI-Powered', {
      x: 0.5, y: 1.15, w: 9, h: 0.9,
      fontSize: 52, bold: true, color: C.white,
      fontFace: 'Calibri', align: 'left', margin: 0,
    });
    slide.addText('Resume Analyzer', {
      x: 0.5, y: 1.95, w: 9, h: 0.9,
      fontSize: 52, bold: true, color: C.teal,
      fontFace: 'Calibri', align: 'left', margin: 0,
    });

    slide.addText('Intelligent candidate screening using Groq LPU + Llama-4 Scout', {
      x: 0.5, y: 2.9, w: 8, h: 0.4,
      fontSize: 15, color: C.muted, fontFace: 'Calibri', align: 'left', margin: 0,
    });

    // Divider
    slide.addShape('rect', {
      x: 0.5, y: 3.42, w: 4.5, h: 0.03,
      fill: { color: C.teal }, line: { color: C.teal, width: 0 },
    });

    // Team
    const members = [
      'Aatish Ramdas Arote   (02)',
      'Viraj Vilas Gawari       (12)',
      'Aarya Pramod Koli       (25)',
      'Amey Anand Sarode    (51)',
    ];
    members.forEach((m, i) => {
      slide.addText(m, {
        x: 0.55, y: 3.6 + i * 0.3, w: 4.5, h: 0.28,
        fontSize: 12, color: C.offWhite, fontFace: 'Calibri', align: 'left', margin: 0,
      });
    });

    slide.addText('Guide: Prof. D. S. Tharwani', {
      x: 0.55, y: 4.88, w: 4.5, h: 0.28,
      fontSize: 11, color: C.teal, fontFace: 'Calibri', italic: true, align: 'left', margin: 0,
    });
    slide.addText('Dept. of Computer Engineering | KGCE, Karjat | 2025–26', {
      x: 0.55, y: 5.2, w: 5, h: 0.25,
      fontSize: 10, color: C.muted, fontFace: 'Calibri', align: 'left', margin: 0,
    });

    // Right panel — stat boxes
    const stats = [
      { n: '95%', l: 'Accuracy Rate' },
      { n: '10K+', l: 'Resumes Analyzed' },
      { n: '<1s', l: 'Response Time' },
    ];
    stats.forEach((s, i) => {
      const bx = 6.8, by = 1.6 + i * 1.22;
      addCard(slide, bx, by, 2.8, 1.0, { fill: C.navyLt, border: C.teal, borderW: 1, shadow: true });
      slide.addText(s.n, {
        x: bx, y: by + 0.05, w: 2.8, h: 0.55,
        fontSize: 34, bold: true, color: C.teal, fontFace: 'Calibri', align: 'center', margin: 0,
      });
      slide.addText(s.l, {
        x: bx, y: by + 0.62, w: 2.8, h: 0.28,
        fontSize: 11, color: C.muted, fontFace: 'Calibri', align: 'center', margin: 0,
      });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 2 — TABLE OF CONTENTS
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Agenda');

    const items = [
      ['01', 'Introduction & Problem Statement'],
      ['02', 'Literature Survey'],
      ['03', 'System Architecture & Design'],
      ['04', 'Technology Stack'],
      ['05', 'Implementation & Testing'],
      ['06', 'Results & UI Walkthrough'],
      ['07', 'Applications & Advantages'],
      ['08', 'Future Scope & Conclusion'],
    ];

    items.forEach((item, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i % 4;
      const bx = col === 0 ? 0.5 : 5.25;
      const by = 1.05 + row * 1.0;
      addCard(slide, bx, by, 4.5, 0.82, { fill: C.navyLt, border: C.slate });
      slide.addShape('rect', {
        x: bx, y: by, w: 0.08, h: 0.82,
        fill: { color: C.teal }, line: { color: C.teal, width: 0 },
      });
      slide.addText(item[0], {
        x: bx + 0.18, y: by + 0.05, w: 0.55, h: 0.35,
        fontSize: 20, bold: true, color: C.teal, fontFace: 'Calibri', align: 'left', margin: 0,
      });
      slide.addText(item[1], {
        x: bx + 0.18, y: by + 0.4, w: 4.1, h: 0.3,
        fontSize: 12, color: C.offWhite, fontFace: 'Calibri', align: 'left', margin: 0,
      });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 3 — INTRODUCTION
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Introduction');

    slide.addText(
      'Recruitment today involves processing hundreds of resumes manually — a slow, biased, and costly process. ' +
      'AI-powered tools using NLP and Machine Learning can automate evaluation, extract key information, and match candidates against job requirements with far greater speed and fairness.',
      {
        x: 0.5, y: 0.95, w: 5.8, h: 1.1,
        fontSize: 12.5, color: C.offWhite, fontFace: 'Calibri',
        align: 'left', valign: 'top', margin: 0,
      }
    );

    const points = [
      { icon: '🎯', t: 'Context-Aware Matching', d: 'Goes beyond keywords — understands skills in context' },
      { icon: '⚡', t: 'Sub-Second Processing', d: 'Groq LPU delivers <1s inference vs 10s+ GPU latency' },
      { icon: '📊', t: 'ATS Compatibility Score', d: 'Structured scoring against job description criteria' },
      { icon: '🛡️', t: 'Bias Reduction', d: 'Consistent, data-driven evaluation every time' },
    ];

    points.forEach((p, i) => {
      const by = 2.25 + i * 0.78;
      addCard(slide, 0.5, by, 5.8, 0.68, { fill: C.navyLt, border: C.slate });
      slide.addText(p.icon, { x: 0.6, y: by + 0.08, w: 0.5, h: 0.5, fontSize: 18, align: 'center', margin: 0 });
      slide.addText(p.t, { x: 1.2, y: by + 0.06, w: 4.9, h: 0.28, fontSize: 12, bold: true, color: C.teal, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(p.d, { x: 1.2, y: by + 0.34, w: 4.9, h: 0.26, fontSize: 10.5, color: C.muted, fontFace: 'Calibri', align: 'left', margin: 0 });
    });

    // Right — quote card
    addCard(slide, 6.55, 0.92, 3.1, 4.38, { fill: C.navyLt, border: C.teal, borderW: 1.5, shadow: true });
    slide.addShape('rect', { x: 6.55, y: 0.92, w: 3.1, h: 0.06, fill: { color: C.teal }, line: { color: C.teal, width: 0 } });
    slide.addText('The Challenge', { x: 6.65, y: 1.06, w: 2.9, h: 0.35, fontSize: 14, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const challenges = [
      '250+ resumes per job opening on average',
      '23 seconds — typical manual screening time per resume',
      '75% of qualified candidates rejected by ATS',
      'Significant unconscious bias in manual review',
    ];
    challenges.forEach((c, i) => {
      slide.addText([
        { text: '›  ', options: { color: C.teal, bold: true } },
        { text: c, options: { color: C.offWhite } },
      ], {
        x: 6.65, y: 1.52 + i * 0.78, w: 2.88, h: 0.65,
        fontSize: 11, fontFace: 'Calibri', align: 'left', margin: 0,
      });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 4 — PROBLEM STATEMENT
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Problem Statement');

    const problems = [
      {
        n: '01', title: 'Data Extraction from Resumes',
        body: 'Resumes arrive in varied formats and structures. Extracting name, skills, experience, and education accurately requires robust NLP — keyword search alone fails.',
      },
      {
        n: '02', title: 'Contextual Job Matching',
        body: 'A keyword match of "JavaScript" doesn\'t mean a candidate fits a senior React role. Semantic understanding and contextual relevance scoring are needed.',
      },
      {
        n: '03', title: 'Consistent Candidate Ranking',
        body: 'Manual scoring is subjective and inconsistent. A fair, reproducible scoring model that objectively ranks candidates is critical.',
      },
      {
        n: '04', title: 'Speed & Scalability',
        body: 'Processing hundreds of resumes in seconds requires efficient architecture — in-memory buffering, LPU inference, and non-blocking async pipelines.',
      },
    ];

    problems.forEach((p, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const bx = col === 0 ? 0.5 : 5.2;
      const by = 1.05 + row * 2.18;
      addCard(slide, bx, by, 4.4, 2.0, { fill: C.navyLt, border: C.slate, shadow: true });
      // number badge
      slide.addShape('ellipse', {
        x: bx + 0.18, y: by + 0.15, w: 0.5, h: 0.5,
        fill: { color: C.teal }, line: { color: C.teal, width: 0 },
      });
      slide.addText(p.n, { x: bx + 0.18, y: by + 0.18, w: 0.5, h: 0.44, fontSize: 13, bold: true, color: C.navy, fontFace: 'Calibri', align: 'center', margin: 0 });
      slide.addText(p.title, { x: bx + 0.82, y: by + 0.18, w: 3.4, h: 0.38, fontSize: 13, bold: true, color: C.white, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(p.body, { x: bx + 0.18, y: by + 0.72, w: 4.05, h: 1.1, fontSize: 11, color: C.muted, fontFace: 'Calibri', align: 'left', valign: 'top', margin: 0 });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 5 — LITERATURE SURVEY
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Literature Survey');

    const papers = [
      {
        no: '01', year: '2025',
        title: 'Resume Parser Using NLP Techniques',
        authors: 'Bhor, Shinde, Gupta, Nair, Kulkarni',
        finding: 'Automated structured extraction from unstructured resumes using NLP pipelines; basis for our data extraction module.',
      },
      {
        no: '02', year: '2023',
        title: 'Automatic Scoring Using TF-IDF & Cosine Similarity',
        authors: 'Yulita, Untoro, Praseptiawan, Ilham',
        finding: 'Validated vectorization + cosine similarity for objective text scoring — foundational to our ATS matching engine.',
      },
      {
        no: '03', year: '2021',
        title: 'A Survey on Techniques in NLP',
        authors: 'Ranjan, Mundada, Phaltane, Ahmad',
        finding: 'Comprehensive review of NLP methods including tokenization, NER, and semantic analysis applied to recruitment context.',
      },
    ];

    papers.forEach((p, i) => {
      const by = 1.05 + i * 1.42;
      addCard(slide, 0.5, by, 9, 1.25, { fill: C.navyLt, border: C.slate });
      slide.addShape('rect', { x: 0.5, y: by, w: 0.08, h: 1.25, fill: { color: C.teal }, line: { color: C.teal, width: 0 } });
      // Left: no + year
      slide.addText(p.no, { x: 0.72, y: by + 0.08, w: 0.5, h: 0.38, fontSize: 20, bold: true, color: C.teal, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(p.year, { x: 0.72, y: by + 0.5, w: 0.55, h: 0.28, fontSize: 11, color: C.gold, fontFace: 'Calibri', align: 'left', margin: 0, bold: true });
      // Middle: title + authors
      slide.addText(p.title, { x: 1.42, y: by + 0.08, w: 4.5, h: 0.35, fontSize: 12, bold: true, color: C.white, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(p.authors, { x: 1.42, y: by + 0.46, w: 4.5, h: 0.25, fontSize: 10, color: C.muted, fontFace: 'Calibri', italic: true, align: 'left', margin: 0 });
      // Right: finding
      slide.addShape('rect', { x: 6.1, y: by + 0.12, w: 0.03, h: 1.0, fill: { color: C.slate }, line: { color: C.slate, width: 0 } });
      slide.addText('Key Finding:', { x: 6.22, y: by + 0.08, w: 3.1, h: 0.28, fontSize: 9.5, bold: true, color: C.teal, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(p.finding, { x: 6.22, y: by + 0.36, w: 3.1, h: 0.78, fontSize: 10, color: C.offWhite, fontFace: 'Calibri', align: 'left', valign: 'top', margin: 0 });
    });

    slide.addText('Informed by BERT (Devlin et al., 2018), Word2Vec (Mikolov et al., 2013) & Attention Is All You Need (Vaswani et al., 2017)', {
      x: 0.5, y: 5.3, w: 9, h: 0.2,
      fontSize: 9, color: C.muted, fontFace: 'Calibri', italic: true, align: 'center', margin: 0,
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 6 — SYSTEM ARCHITECTURE
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'System Architecture');

    // Three layers
    const layers = [
      { label: 'FRONTEND', color: C.teal, items: ['React 18 + Vite', 'Tailwind CSS', 'Recharts', 'Axios'] },
      { label: 'BACKEND', color: C.blue, items: ['Express.js', 'Multer (in-memory)', 'pdf-parse', 'JWT Auth'] },
      { label: 'DATA + AI', color: C.gold, items: ['MongoDB', 'Groq SDK', 'Llama-4 Scout', 'Llama-3.3-70b'] },
    ];

    layers.forEach((layer, i) => {
      const bx = 0.5 + i * 3.17;
      addCard(slide, bx, 0.95, 2.95, 3.9, { fill: C.navyLt, border: layer.color, borderW: 1.5, shadow: true });
      slide.addShape('rect', { x: bx, y: 0.95, w: 2.95, h: 0.42, fill: { color: layer.color }, line: { color: layer.color, width: 0 } });
      slide.addText(layer.label, { x: bx, y: 0.98, w: 2.95, h: 0.38, fontSize: 12, bold: true, color: C.navy, fontFace: 'Calibri', align: 'center', margin: 0 });
      layer.items.forEach((item, j) => {
        const iy = 1.52 + j * 0.72;
        addCard(slide, bx + 0.2, iy, 2.55, 0.56, { fill: C.navy, border: layer.color });
        slide.addText(item, { x: bx + 0.2, y: iy + 0.04, w: 2.55, h: 0.5, fontSize: 12, bold: true, color: C.white, fontFace: 'Calibri', align: 'center', margin: 0 });
      });
      // Arrow between layers
      if (i < 2) {
        slide.addShape('rect', { x: bx + 3.0, y: 2.7, w: 0.12, h: 0.06, fill: { color: C.muted }, line: { color: C.muted, width: 0 } });
        slide.addText('→', { x: bx + 2.95, y: 2.55, w: 0.2, h: 0.35, fontSize: 18, color: C.muted, fontFace: 'Calibri', align: 'center', margin: 0 });
      }
    });

    // Flow diagram beneath
    slide.addText('Request Flow', { x: 0.5, y: 5.0, w: 2.2, h: 0.28, fontSize: 11, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const flow = ['User Upload', 'React → Axios', 'Express Router', 'Multer Buffer', 'pdf-parse', 'Groq Inference', 'MongoDB Store', 'JSON Response'];
    flow.forEach((f, i) => {
      const fx = 0.5 + i * 1.2;
      slide.addShape('rect', { x: fx, y: 5.1, w: 1.05, h: 0.32, fill: { color: C.slate }, line: { color: C.teal, width: 0.5 } });
      slide.addText(f, { x: fx, y: 5.1, w: 1.05, h: 0.32, fontSize: 8.5, color: C.white, fontFace: 'Calibri', align: 'center', margin: 0 });
      if (i < 7) slide.addText('›', { x: fx + 1.08, y: 5.1, w: 0.1, h: 0.32, fontSize: 11, color: C.teal, fontFace: 'Calibri', align: 'center', margin: 0 });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 7 — TECHNOLOGY STACK (NEW DETAILED SLIDE)
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Technology Stack');

    const sections = [
      {
        label: 'Frontend', color: C.teal,
        items: [
          { abbr: 'RJ', name: 'React.js 18', reason: 'Virtual DOM + hooks keep UI non-blocking during async AI processing' },
          { abbr: 'TW', name: 'Tailwind CSS', reason: 'Utility-first atomic classes for fast, consistent, mobile-first styling' },
          { abbr: 'RC', name: 'Recharts', reason: 'Composable radar & bar charts for skill and strength visual breakdowns' },
          { abbr: 'AX', name: 'Axios', reason: 'Promise-based HTTP with interceptors for consistent auth header injection' },
        ],
      },
      {
        label: 'Backend', color: C.blue,
        items: [
          { abbr: 'EX', name: 'Express.js', reason: 'Lightweight, non-blocking request handling with clean route modularization' },
          { abbr: 'ML', name: 'Multer', reason: 'In-memory file buffering — no disk I/O, faster processing, cleaner security' },
          { abbr: 'PP', name: 'pdf-parse', reason: 'Minimal footprint PDF-to-text without heavy dependencies or bloat' },
          { abbr: 'JW', name: 'JWT', reason: 'Stateless, portable auth tokens — no session overhead, works across services' },
        ],
      },
      {
        label: 'Data + AI', color: C.gold,
        items: [
          { abbr: 'MG', name: 'MongoDB', reason: 'Schema-flexible NoSQL stores deeply nested AI JSON output natively' },
          { abbr: 'GQ', name: 'Groq SDK', reason: 'LPU-accelerated inference — sub-second completions vs 10+ second GPU latency' },
          { abbr: 'L4', name: 'Llama-4 Scout', reason: 'Structured JSON skill extraction with inference beyond dedicated sections' },
          { abbr: 'L3', name: 'Llama-3.3-70b', reason: 'High-quality qualitative scoring, ATS tips, and fit-gap comparisons' },
        ],
      },
    ];

    sections.forEach((sec, si) => {
      const bx = 0.5 + si * 3.17;
      // Section header
      addCard(slide, bx, 0.95, 2.95, 0.38, { fill: sec.color, border: sec.color });
      slide.addText(sec.label.toUpperCase(), { x: bx, y: 0.98, w: 2.95, h: 0.33, fontSize: 11, bold: true, color: C.navy, fontFace: 'Calibri', align: 'center', margin: 0 });

      sec.items.forEach((item, ii) => {
        const iy = 1.44 + ii * 1.02;
        addCard(slide, bx, iy, 2.95, 0.92, { fill: C.navyLt, border: C.slate });
        // Abbr circle
        slide.addShape('ellipse', { x: bx + 0.1, y: iy + 0.18, w: 0.5, h: 0.5, fill: { color: sec.color, transparency: 20 }, line: { color: sec.color, width: 1 } });
        slide.addText(item.abbr, { x: bx + 0.1, y: iy + 0.2, w: 0.5, h: 0.46, fontSize: 9, bold: true, color: sec.color, fontFace: 'Calibri', align: 'center', margin: 0 });
        // Name + reason
        slide.addText(item.name, { x: bx + 0.68, y: iy + 0.06, w: 2.2, h: 0.28, fontSize: 11, bold: true, color: C.white, fontFace: 'Calibri', align: 'left', margin: 0 });
        slide.addText(item.reason, { x: bx + 0.68, y: iy + 0.35, w: 2.2, h: 0.48, fontSize: 8.5, color: C.muted, fontFace: 'Calibri', align: 'left', valign: 'top', margin: 0 });
      });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 8 — SYSTEM DESIGN (DFD + Modules)
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'System Design');

    // Left: Data Flow
    slide.addText('Data Flow', { x: 0.5, y: 1.0, w: 4.5, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const dfd = [
      { step: '1', label: 'User Uploads Resume', color: C.teal },
      { step: '2', label: 'Frontend → Express Server', color: C.teal },
      { step: '3', label: 'Multer In-Memory Buffer', color: C.blue },
      { step: '4', label: 'pdf-parse Text Extraction', color: C.blue },
      { step: '5', label: 'Groq + Llama-4 Inference', color: C.gold },
      { step: '6', label: 'Store Results in MongoDB', color: C.gold },
      { step: '7', label: 'JSON Response → Dashboard', color: C.teal },
    ];
    dfd.forEach((d, i) => {
      const dy = 1.42 + i * 0.55;
      addCard(slide, 0.5, dy, 4.5, 0.46, { fill: C.navyLt, border: C.slate });
      slide.addShape('ellipse', { x: 0.58, y: dy + 0.06, w: 0.34, h: 0.34, fill: { color: d.color }, line: { color: d.color, width: 0 } });
      slide.addText(d.step, { x: 0.58, y: dy + 0.08, w: 0.34, h: 0.3, fontSize: 10, bold: true, color: C.navy, fontFace: 'Calibri', align: 'center', margin: 0 });
      slide.addText(d.label, { x: 1.02, y: dy + 0.1, w: 3.88, h: 0.28, fontSize: 11.5, color: C.offWhite, fontFace: 'Calibri', align: 'left', margin: 0 });
      if (i < 6) slide.addText('↓', { x: 0.6, y: dy + 0.5, w: 0.3, h: 0.25, fontSize: 11, color: d.color, fontFace: 'Calibri', align: 'center', margin: 0 });
    });

    // Right: Core Modules
    slide.addText('Core Modules', { x: 5.3, y: 1.0, w: 4.2, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const modules = [
      { icon: '📤', name: 'Resume Upload', desc: 'PDF validation, in-memory buffer' },
      { icon: '🔍', name: 'Data Extraction', desc: 'NLP text parsing, field identification' },
      { icon: '📋', name: 'JD Analysis', desc: 'Tokenize, identify required skills' },
      { icon: '🔗', name: 'Matching & Scoring', desc: 'Cosine similarity + LLM scoring' },
      { icon: '🏆', name: 'Ranking & Report', desc: 'Ranked output, ATS tips, gaps' },
      { icon: '🗄️', name: 'Database (MongoDB)', desc: 'Nested JSON, user history, logs' },
    ];
    modules.forEach((m, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const mx = 5.3 + col * 2.25;
      const my = 1.42 + row * 1.35;
      addCard(slide, mx, my, 2.1, 1.18, { fill: C.navyLt, border: C.slate });
      slide.addText(m.icon, { x: mx + 0.1, y: my + 0.08, w: 0.5, h: 0.5, fontSize: 18, align: 'center', margin: 0 });
      slide.addText(m.name, { x: mx + 0.62, y: my + 0.1, w: 1.42, h: 0.3, fontSize: 10.5, bold: true, color: C.white, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(m.desc, { x: mx + 0.62, y: my + 0.44, w: 1.42, h: 0.62, fontSize: 9, color: C.muted, fontFace: 'Calibri', align: 'left', valign: 'top', margin: 0 });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 9 — IMPLEMENTATION & TESTING
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Implementation & Testing');

    // Left: Code snippet card
    addCard(slide, 0.5, 1.0, 5.5, 2.5, { fill: C.navy, border: C.teal, borderW: 1.5 });
    slide.addShape('rect', { x: 0.5, y: 1.0, w: 5.5, h: 0.38, fill: { color: C.teal, transparency: 20 }, line: { color: C.teal, width: 0 } });
    slide.addText('Core: ATS Match Scoring', { x: 0.6, y: 1.03, w: 5.3, h: 0.33, fontSize: 11, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const code = `// Groq + Llama-4 Scout — structured JSON extraction
const parsed = await groq.chat({
  model: "meta-llama/llama-4-scout-17b-16e-instruct",
  messages: [{ role:"user", content: resumeText }],
  response_format: { type: "json_object" }
});

// Llama-3.3-70b — qualitative ATS evaluation
const evaluation = await groq.chat({
  model: "llama-3.3-70b-versatile",
  messages: [{ role:"user", content: evalPrompt }]
});

return { score, skills, ats_tips, recommendations };`;
    slide.addText(code, {
      x: 0.6, y: 1.46, w: 5.3, h: 1.95,
      fontSize: 8.5, color: C.offWhite, fontFace: 'Consolas',
      align: 'left', valign: 'top', margin: 0,
    });

    // Left below: implementation approach
    addCard(slide, 0.5, 3.6, 5.5, 1.72, { fill: C.navyLt, border: C.slate });
    slide.addText('Implementation Approach', { x: 0.65, y: 3.68, w: 5.2, h: 0.3, fontSize: 12, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const impl = [
      'Modular architecture — each component independently testable',
      'PEP 8 + REST API guidelines for code quality',
      'OWASP security standards — JWT, input sanitization',
      'Vectorization via scikit-learn for batch processing speed',
    ];
    impl.forEach((t, i) => {
      slide.addText([
        { text: '✓  ', options: { color: C.teal, bold: true } },
        { text: t, options: { color: C.offWhite } },
      ], { x: 0.65, y: 4.04 + i * 0.3, w: 5.2, h: 0.26, fontSize: 10.5, fontFace: 'Calibri', align: 'left', margin: 0 });
    });

    // Right: Testing table
    slide.addText('Testing Strategy', { x: 6.2, y: 1.0, w: 3.4, h: 0.3, fontSize: 12, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const tests = [
      { type: 'Unit Testing', tool: 'PyTest', scope: 'Each module isolated' },
      { type: 'Integration', tool: 'PyTest', scope: 'Cross-module data flow' },
      { type: 'API Testing', tool: 'Postman', scope: 'Endpoints & auth' },
      { type: 'UI Automation', tool: 'Selenium', scope: 'End-to-end flows' },
      { type: 'UAT', tool: 'HR Users', scope: 'Usability & accuracy' },
    ];
    tests.forEach((t, i) => {
      const ty = 1.42 + i * 0.78;
      addCard(slide, 6.1, ty, 3.55, 0.68, { fill: C.navyLt, border: C.slate });
      slide.addText(t.type, { x: 6.2, y: ty + 0.06, w: 3.35, h: 0.28, fontSize: 11, bold: true, color: C.white, fontFace: 'Calibri', margin: 0 });
      slide.addText(`${t.tool}  |  ${t.scope}`, { x: 6.2, y: ty + 0.35, w: 3.35, h: 0.24, fontSize: 9.5, color: C.muted, fontFace: 'Calibri', margin: 0 });
      chipBadge(slide, 9.18, ty + 0.06, t.tool, C.teal);
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 10 — RESULTS & GANTT CHART
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Results & Planning');

    // Gantt chart (native bar chart)
    const ganttData = [
      { name: 'Problem Definition', labels: ['Aug','Sep','Oct','Nov'], values: [2, 0, 0, 0] },
      { name: 'Literature Review',  labels: ['Aug','Sep','Oct','Nov'], values: [2, 1, 0, 0] },
      { name: 'Requirement Gathering', labels: ['Aug','Sep','Oct','Nov'], values: [0, 2, 0, 0] },
      { name: 'System Analysis',    labels: ['Aug','Sep','Oct','Nov'], values: [0, 1, 1, 0] },
      { name: 'System Designing',   labels: ['Aug','Sep','Oct','Nov'], values: [0, 0, 2, 0] },
      { name: 'Documentation',      labels: ['Aug','Sep','Oct','Nov'], values: [0, 0, 1, 1] },
    ];

    slide.addText('Project Gantt Chart', { x: 0.5, y: 1.0, w: 6, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    slide.addChart(pres.charts.BAR, ganttData.map(g => ({ name: g.name, labels: g.labels, values: g.values })), {
      x: 0.4, y: 1.35, w: 5.9, h: 3.5,
      barDir: 'bar',
      chartColors: [C.teal, C.tealDim, C.blue, '5EEAD4', '93C5FD', 'A5F3FC'],
      chartArea: { fill: { color: C.navyLt } },
      catAxisLabelColor: C.muted,
      valAxisLabelColor: C.muted,
      valGridLine: { color: C.slate, size: 0.5 },
      catGridLine: { style: 'none' },
      showLegend: false,
      showValue: false,
    });

    // Right: Key Results
    slide.addText('Key Outcomes', { x: 6.55, y: 1.0, w: 3.1, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const outcomes = [
      { icon: '🎯', v: '95%', l: 'Parsing Accuracy' },
      { icon: '⚡', v: '<1s', l: 'Groq LPU Inference' },
      { icon: '📊', v: '80/100', l: 'Sample ATS Score' },
      { icon: '🔍', v: '16+', l: 'Skills Extracted' },
    ];
    outcomes.forEach((o, i) => {
      addCard(slide, 6.5, 1.42 + i * 1.02, 3.15, 0.88, { fill: C.navyLt, border: C.slate, shadow: true });
      slide.addText(o.icon + '  ' + o.v, { x: 6.6, y: 1.5 + i * 1.02, w: 3, h: 0.42, fontSize: 20, bold: true, color: C.teal, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(o.l, { x: 6.6, y: 1.88 + i * 1.02, w: 3, h: 0.26, fontSize: 11, color: C.muted, fontFace: 'Calibri', align: 'left', margin: 0 });
    });

    slide.addText('System tested with HR professionals. All 5 test modules passed. No critical bugs at deployment.', {
      x: 0.5, y: 4.95, w: 9, h: 0.3,
      fontSize: 10, color: C.muted, fontFace: 'Calibri', italic: true, align: 'center', margin: 0,
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 11 — UI WALKTHROUGH (Screenshots described)
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'User Interface Walkthrough');

    const screens = [
      { title: 'Home / Landing', desc: 'Clean hero with CTA — "Get Started Free", platform stats: 95% accuracy, 10K+ resumes, 4.9★ rating' },
      { title: 'Authentication', desc: 'Create Account form with Full Name, Email, Password — protected route guards dashboard access via JWT' },
      { title: 'Resume Dashboard', desc: 'Drag-and-drop PDF upload (max 5MB). Real-time status: Completed / Processing / Failed with average score display' },
      { title: 'Analysis Report', desc: 'ATS score (80/100), skill distribution radar, action verbs count, quantified bullets, skill gap highlights' },
      { title: 'Skill Extraction', desc: '16+ skills detected across Technical, Soft & Tools categories. Parsed from resume body, projects, and experience sections' },
      { title: 'Improvement Suggestions', desc: 'Personalized, actionable tips: add summary, quantify impact, use action verbs, match JD keywords for ATS optimization' },
    ];

    screens.forEach((s, i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const sx = 0.5 + col * 3.17;
      const sy = 1.0 + row * 2.25;
      addCard(slide, sx, sy, 2.95, 2.08, { fill: C.navyLt, border: C.slate, shadow: true });
      // Mock screen frame
      slide.addShape('rect', { x: sx + 0.12, y: sy + 0.12, w: 2.71, h: 0.22, fill: { color: C.slate }, line: { color: C.slate, width: 0 } });
      slide.addShape('ellipse', { x: sx + 0.18, y: sy + 0.17, w: 0.1, h: 0.1, fill: { color: 'FF6B6B' }, line: { color: 'FF6B6B', width: 0 } });
      slide.addShape('ellipse', { x: sx + 0.32, y: sy + 0.17, w: 0.1, h: 0.1, fill: { color: 'FFD166' }, line: { color: 'FFD166', width: 0 } });
      slide.addShape('ellipse', { x: sx + 0.46, y: sy + 0.17, w: 0.1, h: 0.1, fill: { color: '06D6A0' }, line: { color: '06D6A0', width: 0 } });
      // Screen content area
      slide.addShape('rect', { x: sx + 0.12, y: sy + 0.36, w: 2.71, h: 0.7, fill: { color: C.navy }, line: { color: C.navy, width: 0 } });
      slide.addText('Screen ' + (i + 1), { x: sx + 0.12, y: sy + 0.4, w: 2.71, h: 0.6, fontSize: 22, bold: true, color: C.teal, fontFace: 'Calibri', align: 'center', margin: 0 });
      slide.addText(s.title, { x: sx + 0.12, y: sy + 1.12, w: 2.71, h: 0.3, fontSize: 11, bold: true, color: C.white, fontFace: 'Calibri', align: 'left', margin: 0 });
      slide.addText(s.desc, { x: sx + 0.12, y: sy + 1.44, w: 2.71, h: 0.55, fontSize: 8.5, color: C.muted, fontFace: 'Calibri', align: 'left', valign: 'top', margin: 0 });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 12 — APPLICATIONS & ADVANTAGES
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Applications & Advantages');

    // Applications — left
    slide.addText('Applications', { x: 0.5, y: 1.0, w: 4.8, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const apps = [
      { icon: '🏢', title: 'Corporate HR Teams', desc: 'Reduce manual screening, speed up hiring, eliminate bias' },
      { icon: '🌐', title: 'Job Portals', desc: 'Smarter matching between resumes and posted roles' },
      { icon: '🎓', title: 'Universities', desc: 'Placement cells match graduates to opportunities' },
      { icon: '🏭', title: 'Recruitment Agencies', desc: 'Filter thousands quickly; send only best matches' },
    ];
    apps.forEach((a, i) => {
      const ay = 1.42 + i * 1.0;
      addCard(slide, 0.5, ay, 4.8, 0.86, { fill: C.navyLt, border: C.slate });
      slide.addText(a.icon, { x: 0.58, y: ay + 0.16, w: 0.55, h: 0.55, fontSize: 20, align: 'center', margin: 0 });
      slide.addText(a.title, { x: 1.22, y: ay + 0.1, w: 3.95, h: 0.3, fontSize: 12, bold: true, color: C.white, fontFace: 'Calibri', margin: 0 });
      slide.addText(a.desc, { x: 1.22, y: ay + 0.42, w: 3.95, h: 0.36, fontSize: 10.5, color: C.muted, fontFace: 'Calibri', margin: 0 });
    });

    // Advantages — right
    slide.addText('Advantages', { x: 5.6, y: 1.0, w: 4.0, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    const advs = [
      { icon: '⚡', title: 'Time Saving', desc: 'Processes 100s of resumes in seconds, not hours', color: C.teal },
      { icon: '⚖️', title: 'Fair & Unbiased', desc: 'Consistent, data-driven scoring every time', color: C.blue },
      { icon: '🎯', title: 'Better Accuracy', desc: 'Context-aware semantic analysis vs keyword matching', color: C.gold },
      { icon: '📱', title: 'Accessible Anywhere', desc: 'Web-based, PDF + DOCX support, mobile-friendly', color: C.tealDim },
    ];
    advs.forEach((a, i) => {
      const ay = 1.42 + i * 1.0;
      addCard(slide, 5.55, ay, 4.1, 0.86, { fill: C.navyLt, border: C.slate, shadow: true });
      slide.addShape('rect', { x: 5.55, y: ay, w: 0.07, h: 0.86, fill: { color: a.color }, line: { color: a.color, width: 0 } });
      slide.addText(a.icon + '  ' + a.title, { x: 5.72, y: ay + 0.1, w: 3.8, h: 0.3, fontSize: 12, bold: true, color: a.color, fontFace: 'Calibri', margin: 0 });
      slide.addText(a.desc, { x: 5.72, y: ay + 0.44, w: 3.8, h: 0.3, fontSize: 10.5, color: C.muted, fontFace: 'Calibri', margin: 0 });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 13 — FUTURE SCOPE
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Future Scope');

    const futures = [
      { phase: 'Phase 2', icon: '👤', title: 'User Accounts & Dashboards', desc: 'Personalized recruiter dashboards to manage, track, and compare candidates across multiple job postings.' },
      { phase: 'Phase 2', icon: '🔗', title: 'Job Portal Integration', desc: 'Direct API integration with LinkedIn, Indeed, and Naukri to auto-fetch resumes and job descriptions.' },
      { phase: 'Phase 3', icon: '🤖', title: 'Advanced AI Models', desc: 'Fine-tuned domain-specific models for IT, Healthcare, Finance — improving sector-specific scoring accuracy.' },
      { phase: 'Phase 3', icon: '📧', title: 'Candidate Communication', desc: 'Automated email outreach, interview scheduling, and AI-generated feedback for rejected candidates.' },
      { phase: 'Phase 4', icon: '📈', title: 'Analytics Dashboard', desc: 'Hiring funnel visualization, time-to-hire metrics, diversity analytics, and recruiter performance tracking.' },
      { phase: 'Phase 4', icon: '🌍', title: 'Enterprise Scale', desc: 'Multi-tenant SaaS deployment, role-based access control, and integration with HRMS platforms like SAP, Workday.' },
    ];

    futures.forEach((f, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const fx = col === 0 ? 0.5 : 5.2;
      const fy = 1.0 + row * 1.48;
      addCard(slide, fx, fy, 4.5, 1.3, { fill: C.navyLt, border: C.slate, shadow: true });
      const phaseColor = f.phase === 'Phase 2' ? C.teal : f.phase === 'Phase 3' ? C.blue : C.gold;
      chipBadge(slide, fx + 0.12, fy + 0.12, f.phase, phaseColor);
      slide.addText(f.icon + '  ' + f.title, { x: fx + 0.12, y: fy + 0.44, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: C.white, fontFace: 'Calibri', margin: 0 });
      slide.addText(f.desc, { x: fx + 0.12, y: fy + 0.76, w: 4.2, h: 0.46, fontSize: 10, color: C.muted, fontFace: 'Calibri', align: 'left', valign: 'top', margin: 0 });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 14 — CONCLUSION
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'Conclusion');

    addCard(slide, 0.5, 1.0, 9, 1.8, { fill: C.navyLt, border: C.teal, borderW: 1.5 });
    slide.addText(
      'The AI-Powered Resume Analyzer successfully demonstrates how Groq LPU acceleration and large language models (Llama-4 Scout + Llama-3.3-70b) can revolutionize talent acquisition. ' +
      'By replacing keyword-based ATS with semantic, context-aware analysis, the system achieves sub-second inference, 95% parsing accuracy, and fair, reproducible candidate scoring. ' +
      'The modular React + Express + MongoDB stack ensures scalability for enterprise-grade recruitment workflows.',
      {
        x: 0.65, y: 1.12, w: 8.7, h: 1.58,
        fontSize: 12.5, color: C.offWhite, fontFace: 'Calibri',
        align: 'left', valign: 'middle', margin: 0,
      }
    );

    // Achievement summary
    const achievements = [
      { icon: '✅', text: 'Automated resume parsing & structured data extraction' },
      { icon: '✅', text: 'ATS compatibility scoring with personalized skill-gap feedback' },
      { icon: '✅', text: 'Sub-second Groq LPU inference — 10× faster than GPU alternatives' },
      { icon: '✅', text: 'Secure JWT auth + MongoDB persistence + React dashboard' },
      { icon: '✅', text: 'Full test coverage: Unit → Integration → UAT — all modules passed' },
    ];

    slide.addText('Key Achievements', { x: 0.5, y: 2.92, w: 9, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: 'Calibri', margin: 0 });
    achievements.forEach((a, i) => {
      slide.addText([
        { text: a.icon + '  ', options: { color: C.teal } },
        { text: a.text, options: { color: C.offWhite } },
      ], { x: 0.5, y: 3.3 + i * 0.38, w: 9, h: 0.33, fontSize: 12, fontFace: 'Calibri', align: 'left', margin: 0 });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 15 — REFERENCES
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    navyBg(slide);
    addTitle(slide, 'References');

    const refs = [
      '[1] Bhor, S. et al. (2025). Resume Parser Using Natural Language Processing Techniques. Pillai College of Engineering.',
      '[2] Yulita, W. et al. (2023). Automatic Scoring Using TF-IDF & Cosine Similarity.',
      '[3] Ranjan, N. et al. (2021). A Survey on Techniques in NLP. SITS, Pune University.',
      '[4] Devlin, J. et al. (2018). BERT: Pre-training Deep Bidirectional Transformers. arXiv:1810.04805.',
      '[5] Vaswani, A. et al. (2017). Attention Is All You Need. NeurIPS. Curran Associates.',
      '[6] Mikolov, T. et al. (2013). Efficient Estimation of Word Representations in Vector Space. arXiv:1301.3781.',
      '[7] Javed, H. & Malik, A. (2022). AI-Powered Resume Screening using ML & NLP. IJACSA, 13(9).',
      '[8] Kumar, R. & Mehta, S. (2021). Automated Resume Shortlisting using TF-IDF & Cosine Similarity. IRJET, 8(6).',
    ];

    refs.forEach((r, i) => {
      const ry = 1.02 + i * 0.57;
      slide.addText(r, {
        x: 0.5, y: ry, w: 9.1, h: 0.5,
        fontSize: 11, color: i % 2 === 0 ? C.offWhite : C.muted,
        fontFace: 'Calibri', align: 'left', margin: 0,
      });
    });
  }

  // ════════════════════════════════════════════════════════════════════════════
  // SLIDE 16 — THANK YOU
  // ════════════════════════════════════════════════════════════════════════════
  {
    const slide = pres.addSlide();
    slide.background = { color: C.navy };

    // Large decorative circles
    slide.addShape('ellipse', { x: 7.5, y: -1.5, w: 5, h: 5, fill: { color: C.teal, transparency: 88 }, line: { color: C.teal, width: 0 } });
    slide.addShape('ellipse', { x: -2, y: 2.5, w: 4.5, h: 4.5, fill: { color: C.blue, transparency: 88 }, line: { color: C.blue, width: 0 } });

    slide.addText('Thank You', {
      x: 0.5, y: 1.2, w: 9, h: 1.4,
      fontSize: 64, bold: true, color: C.white,
      fontFace: 'Calibri', align: 'center', margin: 0,
    });
    slide.addText('Questions & Discussion', {
      x: 0.5, y: 2.7, w: 9, h: 0.55,
      fontSize: 22, color: C.teal, fontFace: 'Calibri', align: 'center', margin: 0,
    });
    slide.addShape('rect', { x: 3.5, y: 3.35, w: 3, h: 0.04, fill: { color: C.teal }, line: { color: C.teal, width: 0 } });

    const team = [
      'Aatish Ramdas Arote (02)  |  Viraj Vilas Gawari (12)',
      'Aarya Pramod Koli (25)  |  Amey Anand Sarode (51)',
    ];
    team.forEach((t, i) => {
      slide.addText(t, { x: 0.5, y: 3.55 + i * 0.38, w: 9, h: 0.32, fontSize: 13, color: C.offWhite, fontFace: 'Calibri', align: 'center', margin: 0 });
    });

    slide.addText('Guide: Prof. D. S. Tharwani  |  Dept. of Computer Engineering, KGCE Karjat  |  2025–26', {
      x: 0.5, y: 4.62, w: 9, h: 0.28,
      fontSize: 11, color: C.muted, fontFace: 'Calibri', italic: true, align: 'center', margin: 0,
    });

    // Bottom tech badges
    const techs = ['React 18', 'Express.js', 'MongoDB', 'Groq SDK', 'Llama-4 Scout', 'JWT'];
    let bx = (10 - techs.length * 1.45) / 2;
    techs.forEach(t => {
      chipBadge(slide, bx, 5.12, t, C.teal);
      bx += 1.5;
    });
  }

  await pres.writeFile({ fileName: 'AI_Resume_Analyzer.pptx' });
  console.log('Done!');
}

build().catch(console.error);
