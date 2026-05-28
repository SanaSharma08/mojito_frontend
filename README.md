# Velvet Pour – Modern Indian Mixology Lounge

A luxury, interactive single-page web application celebrating high-end Indian speakeasy culture and artisanal mixology. Built with **React**, **Tailwind CSS**, and fluid cinematic animations powered by **GSAP**.

---

## 🌟 The Vibe: Reimagined Heritage

Velvet Pour transitions away from standard, generic cocktail lounges into an upscale, modern Indian experience. Traditional recipes and refreshing summer elixirs are elevated into imperial treasures:
* **The Shahi Shikanji** – A royal, golden-accented twist on streetside lime-mint coolers, featuring hand-muddled estate mint and botanical blends.
* **Sangat (Community)** – An atmospheric layout honoring deep hospitality (*Padharo Mhare Des*) with dedicated *Shanti Hours* and *Jashn Nights*.

---

## ✨ Features & Architecture

* **Dynamic Fluid Typography:** Features a massive, responsive multi-lingual hero headline scaling dynamically using viewport configurations.
* **Smart Pointer Carousel:** The cocktail menu relies on pointer state indexes and modulo math layers to cycle endlessly through cocktail archives seamlessly without performance overhead.
* **Scoped Animations:** Fully fluid UI movements leveraging `@gsap/react` scoped containers to handle timeline transitions gracefully across device configurations.
* **Hybrid Layout Strategy:** Built cleanly with optimized component nesting to isolate client-side logic (state, event hooks, GSAP) tightly within local interaction zones.

---

## 🛠️ The Tech Stack

* **Framework:** React 18+
* **Styling:** Tailwind CSS (Fluid responsive configurations, custom color designators)
* **Animations:** GSAP (GreenSock Animation Platform) + `@gsap/react` hooks
* **Build Tool:** Vite

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx       # GSAP blurring navigation anchor header
│   ├── Hero.jsx         # Fluid multilingual statement hero header
│   ├── Cocktails.jsx    # Premium drinks overview grid
│   ├── About.jsx        # Storytelling section
│   ├── Art.jsx          # Media asset container (#art)
│   └── Menu.jsx         # Scoped GSAP index pointer carousel slider
├── constants/
│   └── index.js    # Centralized localized configuration matrix Arrays
├── index.css            # Tailwind directives and baseline typography layers
└── App.jsx              # Application root layout tree shell

## ⚡ Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**
```bash
   git clone [https://github.com/your-username/mojito_frontend.git](https://github.com/your-username/mojito_frontend.git)
   cd mojito_frontend
2. **Install Core Dependencies**
```bash
  npm install
3. npm install gsap @gsap/react
4. npm run dev
