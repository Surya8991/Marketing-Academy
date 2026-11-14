---
name: design-taste-frontend
description: Elite human-centric design, taste, art direction, and frontend craftsmanship based on Leon Lin's taste-skill and world-class design schools. Prevents generic AI design slop and enforces deliberate typography, spatial rhythm, and aesthetic restraint.
---

# Design Taste & Anti-Slop Frontend Craft

This skill enforces high-end art direction, human taste, and aesthetic restraint in web interfaces, transforming generic AI-templated pages into tailored, memorable digital products.

---

## 1. The Anti-Slop Manifesto (Banned Patterns)

AI models default to statistical averages that produce formulaic "AI slop." The following patterns are strictly forbidden:

1. ❌ **No Centered-Everything Bias:** Avoid centering every headline and button group over identical grids. Use asymmetric tension, editorial layouts, or grounded left-aligned architecture.
2. ❌ **No Cookie-Cutter Feature Grids:** Never default to 3 or 4 identical boxes with an icon inside a soft pastel circle, a bold title, and two lines of generic text. Vary the narrative weight and visual density.
3. ❌ **No Incoherent Radius Chaos:** Commit to a unified geometric radius system across the entire interface (e.g., precise 8px-12px architectural, or generous 20px-24px organic). Never mix conflicting rounded tokens.
4. ❌ **No Badge Clutter / Trust-Signal Vomit:** Do not scatter 6 different micro-badges ("100% Free", "4.9/5 Rating", "Zero Risk", "Moneyback Guarantee") across a single fold. Real confidence speaks through quality and restraint.
5. ❌ **No Muddy Drop Shadows:** Never use opaque black shadows. Use layered ambient ambient occlusions, crisp 1px borders with subtle alpha (`border: 1px solid rgba(255,255,255,0.08)` or `rgba(0,0,0,0.06)`), and surface elevation.
6. ❌ **No Generic Indigo/Purple Glow Mesh Defaults:** Reserve vibrant glows and gradients for intentional focal points; never plaster the entire backdrop with muddy radial blurs.

---

## 2. The Design Dials & Brief Inference

Before writing markup or styles, determine the **Design Read** and tune the three core dials (scale 1–10):

* **`DESIGN_VARIANCE` (1–10):**
  * `1–3`: Strict corporate utility (e.g., AWS console, Stripe docs).
  * `4–7`: Polished consumer SaaS / high-craft product (e.g., Linear, Basecamp, Duolingo).
  * `8–10`: Avant-garde editorial agency portfolio (e.g., high-fashion, brutalist architecture).
* **`MOTION_INTENSITY` (1–10):**
  * `1–3`: Instantaneous, purely functional transitions (100–150ms).
  * `4–7`: Tactile physics-based micro-interactions, smooth spring-based hover responses.
  * `8–10`: Scroll-orchestrated storytelling, custom canvas shaders.
* **`VISUAL_DENSITY` (1–10):**
  * `1–3`: Airy, gallery-like, breathing whitespace (Stripe / Apple).
  * `4–6`: Balanced, scannable product layout (Marketing Academy).
  * `7–10`: Information-dense command center (Bloomberg terminal / Linear issue view).

---

## 3. Typographic Craft & Hierarchy

* **Editorial Pairings:** Pair a character-rich display serif or geometric grotesque header with an ultra-legible, neutral sans for body copy.
* **Proportional Scaling:** Base sizes on a strict modular scale (1.25 Major Third or 1.333 Perfect Fourth).
* **Line Heights:** Headings must be tight (`leading-tight` or `leading-[1.1]`), while body paragraphs need room to breathe (`leading-relaxed` or `1.6–1.75`).
* **Letter Spacing:** Tighter tracking on oversized titles (`tracking-[-0.03em]`), neutral to slight positive tracking on uppercase micro-copy (`tracking-wider`).

---

## 4. Tactile Micro-Interactions ("Show, Don't Tell")

Instead of writing 3 paragraphs explaining a concept:
* Build an interactive calculator, simulator, or slider.
* Let the user press, slide, or toggle the real outcome.
* Provide instant, deterministic visual feedback.
