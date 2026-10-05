# 🏋️‍♂️ Pulse Fit (MuscleHub)

![Pulse Fit Hero Banner](public/images/gymbanner.png)

> **Train with the best.** A premium, highly responsive fitness and gym landing page built with Next.js.

Pulse Fit (formerly MuscleHub) is a modern, high-performance web application designed to showcase a professional gym's facilities, expert trainers, and vibrant community. Featuring a dark-themed UI with striking neon-green accents, this project emphasizes smooth animations, glassmorphism UI elements, and a flawless mobile-first experience.

---

## ✨ Key Features

- 📱 **Fully Responsive Design:** Meticulously crafted breakpoints ensuring a premium experience on desktop, tablet, and mobile.
- 🎨 **Glassmorphism & Gradients:** Sleek, modern aesthetic using backdrop filters, custom CSS variables, and elegant gradient overlays.
- ⚡ **Interactive Components:**
  - **Dynamic "Why Choose Us":** Hover/click image swapping with smooth fade transitions.
  - **Program Modals:** Detailed pop-up modals for each service/program with comprehensive details.
  - **Seamless Marquee:** Infinite, seamless scrolling text banners.
- 🧭 **Smooth Navigation:** Fixed, blur-backed navigation bar with perfect offset smooth-scrolling for all anchor links.
- 🚀 **Next.js Architecture:** Built on the latest Next.js App Router for optimal performance, fast page loads, and SEO.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** Custom Vanilla CSS & CSS Modules (with a TailwindCSS foundation)
- **Icons & Assets:** Custom curated assets and dynamic CSS filters.
- **State Management:** React Hooks (`useState`, `useEffect`)

---

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

---

## 📂 Project Structure

- `src/app/page.tsx` - The main landing page assembling all sections.
- `src/app/globals.css` - Global design system, CSS variables, and core responsive overrides.
- `src/components/` - Modular, reusable UI components:
  - `Navbar.tsx` - Responsive full-screen mobile menu and desktop navigation.
  - `Services.tsx` - Interactive program grid with detailed pop-up modals.
  - `WhyChoose.tsx` - Interactive state-driven feature highlights with dynamic imagery.
  - `Pricing.tsx` - Pricing tiers and selection flows.
  - `Schedules.tsx` & `Goals.tsx` - Sectional content for fitness journeys.
- `public/images/` - Static assets, branding, and high-quality photography.

---

## 🎨 Design System Overview

The project uses a custom dark theme tailored for a premium fitness brand:
- **Background:** `#080b07` (Deep Forest Black)
- **Primary Accent:** `#b7c86a` (Neon Pulse Green)
- **Cards/Surfaces:** `#161c11` (Soft Olive Black) with subtle white borders.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](#) if you want to contribute.

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
