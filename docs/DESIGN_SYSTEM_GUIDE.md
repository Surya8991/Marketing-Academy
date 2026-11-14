# Marketing Academy — Master Design System Guide (S-Tier Edition)

This document establishes the official visual language, cognitive architecture, and engineering tokens for **Marketing Academy**. Every page, lesson, article, and interactive element across the platform adheres to these specifications.

---

## 1. Design Philosophy & Human-Centric Foundation

Our aesthetic synthesizes four timeless schools of design:

1. **Dieter Rams' Ten Principles (*Weniger, aber besser*):**
   - Unobtrusive, calm interfaces that respect user attention.
   - Honest design: zero artificial countdown timers, fake scarcity badges, or manipulative dark patterns.
   - Long-lasting typography that outlives fleeting web trends.
2. **Swiss Typographic Style (International Typographic Style):**
   - Mathematical column grids with asymmetric balance.
   - Large architectural editorial display type (`Instrument Serif`) counterweighted by clean monospace data units (`DM Mono`).
   - Generous whitespace and flush-left, ragged-right typography respecting natural reading eye-tracking patterns.
3. **Refactoring UI & Tactile Craftsmanship:**
   - Soft, multi-layered ambient shadows rather than harsh single-layer drop shadows.
   - Subtle semi-transparent overlays (`rgba(...)`) preserving contrast across light and dark modes.
   - Deep tactile interactions: sliders with immediate sensory feedback, buttons with micro-lifts (`-translate-y-0.5`).
4. **Cognitive Impedance Minimization:**
   - **Jakob's Law:** Standard navigation, predictable search bars, clear hierarchical breadcrumbs.
   - **Hick's Law:** Eliminate analysis paralysis by providing one primary forward action per viewport.
   - **Miller's Law:** Chunk complex marketing funnels into $4 \pm 1$ digestible stages.

---

## 2. Color Palette & Token Architecture

The color system directly reproduces the editorial palette established in the project mockup:

### Core Surfaces & Typography
| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `--bg` | `#fafaf8` | Warm Paper White — primary page background |
| `--paper` / `--card` | `#ffffff` | Crisp surface white for elevated cards and modules |
| `--ink` / `--foreground` | `#191927` | Deep Midnight Ink for high-contrast, comfortable reading |
| `--muted-foreground` | `#747486` | Secondary body text, metadata captions, and descriptions |
| `--line` / `--border` | `#e9e8e4` | Hairline borders dividing content blocks cleanly |

### Brand Accents & Interactive Pastels
| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `--indigo` / `--accent` | `#4f46e5` | Primary brand accent — CTA buttons, active links, orbital core |
| `--indigo-dark` | `#3930c5` | Primary button hover state |
| `--lav` | `#eeedff` | Lavender pastel — Psychology & Manifesto containers |
| `--blue` | `#e9f3ff` | Soft Sky Blue — Acquisition, Economics & Case Studies |
| `--mint` | `#e8f5ed` | Fresh Mint Green — Retention, Positive metrics & Flywheels |
| `--amber` | `#fff1d9` | Warm Amber — Agentic AI, Star ratings & Spotlight tags |

### Immersive Shells
| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `--lab-shell` | `#1d1c32` | Dark Obsidian Lab — Interactive sandbox, sliders, code blocks |
| `--final-cta` | `#25224b` | Deep Midnight Indigo — Closing platform manifesto & action |

---

## 3. Typography Scale & Font Pairing

We use a deliberate tri-font system:

```css
--font-serif: "Instrument Serif", Georgia, serif;
--font-sans:  "DM Sans", Arial, sans-serif;
--font-mono:  "DM Mono", monospace;
```

### Type Hierarchy
- **Display Headlines (`Instrument Serif`):**
  - Hero Display: `text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight`
  - Italic emphasis: `<em className="font-serif italic font-normal text-[var(--accent)]">`
  - Section Headers: `text-3xl sm:text-5xl font-bold tracking-tight font-serif`
- **Body & UI Elements (`DM Sans`):**
  - Section Subtitles: `text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed`
  - Card Text: `text-xs sm:text-sm leading-relaxed`
  - Paragraphs in Lessons: Max 2 sentences per paragraph, 65ch optimal reading measure.
- **Eyebrows & Technical Data (`DM Mono`):**
  - Eyebrows: `text-xs uppercase tracking-widest font-mono text-[var(--accent)]`
  - Metric counters & codes: `font-mono text-xs font-bold tabular-nums`

---

## 4. Motion & GSAP Animation Standards

Motion in Marketing Academy is physical, purposeful, and calming:

1. **Orbital Physics:**
   - Central gradient blob undergoes continuous, gentle rotation (35s loop).
   - Planetary orbital rings counter-rotate (45s and 55s loops).
   - Discipline badges float organically with sine-wave yoyo easing.
2. **Interactive 3D Mouse Parallax:**
   - Cursor movement calculates normalized coordinates from center `(x, y) \in [-0.5, 0.5]`.
   - Core blob, rings, and badges translate at staggered depths (35px, 20px, 15px) for authentic volumetric depth.
3. **Entrance Staggers:**
   - Elements reveal sequentially using `power3.out` easing with 0.1s - 0.15s stagger offsets.
4. **Reduced Motion Compliance:**
   - Always honor `@media (prefers-reduced-motion: reduce)` by disabling infinite loops and instantizing transforms.

---

## 5. Interactive Components & Sandboxes

1. **Unit Economics Calculator:**
   - Real-time reactivity recalculating CAC, revenue, net profit, and ROAS as the user drags the conversion slider.
   - Clear visual distinction between profitable (emerald) and deficit (rose) acquisition runs.
2. **Headline Clinic (NLP Copy Analysis):**
   - Live score evaluation checking for specificity, metrics, power-phrases, and optimal word count.
   - Actionable copywriting diagnosis directly beneath the score bar.
3. **A/B Decision Dilemma Engine:**
   - Instant psychological feedback comparing choices against behavioral economics principles (prospect theory, friction reduction, micro-commitments).

---

## 6. Global Lesson & Article Layout Rules

1. **Reading Width:** Strict `max-w-3xl` or `max-w-4xl` measure to prevent wide-line eye fatigue.
2. **Callout Components:** Bordered cards with rounded corners (`rounded-xl`), matching pastel backgrounds (`#fbfaff`, `#eaf3ff`, `#eaf5ed`), and concise takeaway points.
3. **Multilingual Resources:** Every playbook finishes with 3 curated video tutorials in Hindi (`WsCube Tech`), Tamil (`Mr Digital Marketing`), and Telugu (`ODMT`).
4. **Zero Account Barrier:** Progress, streaks, and quiz completions persist locally via `localStorage`, granting immediate full utility to every visitor on Earth.
