---
name: cognitive-impedance-design
description: Cognitive impedance matching and cognitive load reduction in UI/UX. Minimizes mental friction, aligns with human mental models, optimizes affordances, and delivers frictionless user flows.
---

# Cognitive Impedance Matching in UI/UX Design

**Cognitive impedance** is the resistance, mental friction, and hesitation a user experiences when trying to understand an interface, interpret its state, or execute an intent. 

When cognitive impedance is high, the interface forces the user to decode cryptic icons, guess what is clickable, or perform mental math. When an interface is **impedance-matched**, it feels completely natural, invisible, and effortless.

---

## 1. The Core Laws of Cognitive Flow

### A. Jakob's Law (Mental Model Alignment)
* Users spend 99% of their time on other digital products.
* Do not invent eccentric interaction paradigms for standard behaviors (e.g., search, navigation, toggle, sliders).
* Use established visual metaphors and placement so users never have to "learn" how to interact with the basic structure.

### B. Hick's Law (Choice Architecture)
* Decision time increases logarithmically with the number and complexity of choices: $T = b \cdot \log_2(n + 1)$.
* Never present 15 competing calls-to-action on a single screen.
* Establish one unmistakably clear Primary Action, with subdued secondary options.

### C. Miller's Law & Chunking
* Working memory holds roughly $4 \pm 1$ informational chunks at a time.
* Break long, complex marketing curricula or data tables into digestible thematic units.
* Use visual grouping (proximity, shared enclosing borders, and subtle contrast shifts) to chunk related details together.

---

## 2. Affordance and Feedback Fidelity

* **True Affordances:** Interactive elements must announce their interactivity through physical depth, contrast, or explicit cues (e.g., subtle 3D bevels, distinct hover states, cursor changes).
* **Feedback Latency < 100ms:** Every user gesture (tap, click, slider drag) must provide immediate sensory feedback. If an action triggers calculation, render the result in real time.
* **Predictable Outcomes:** The user must be able to predict what will happen before they click. No ambiguous button copy like "Proceed" or "Submit"—use descriptive verbs like "Calculate My ROAS" or "Start Lesson 1".

---

## 3. Progressive Disclosure

* Never dump every setting, edge case, and footnote into the primary viewport.
* Surface the 20% that matters to 80% of users immediately.
* Provide clean, intentional expansion triggers (drawers, tabs, inline toggles) for deeper exploration.
