"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="desktop-nav">
          <a href="#features">Features</a>
          <a href="#schedules">Schedules</a>
          <a href="#goals">Goals</a>
        </div>

        <a href="#" className="logo">
          <img src="/images/Pulse%20Fit.png" alt="Pulse Fit Logo" style={{ height: "40px", width: "auto", display: "block" }} />
        </a>

        <div className="desktop-nav">
          <a href="#about">About Us</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(true)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </header>

      {/* Full-Page Mobile Nav Overlay */}
      <nav className={`mobile-nav ${open ? "open" : ""}`}>
        <img 
           src="/images/Pulse%20Fit.png" 
           alt="Pulse Fit Logo" 
           className="mobile-nav-logo"
        />
        <button
          className="menu-close-button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className="mobile-nav-links">
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#schedules" onClick={() => setOpen(false)}>Schedules</a>
          <a href="#goals" onClick={() => setOpen(false)}>Goals</a>
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </nav>
    </>
  );
}