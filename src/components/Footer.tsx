"use client";

import { useRef, MouseEvent } from "react";

export default function Footer() {
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    textRef.current.style.setProperty("--mouse-x", `${x}px`);
    textRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            Pulse<span>Fit</span>
          </a>

          <p>
            Train harder. Move stronger. Live better.
            Build a body and mindset you're proud of.
          </p>

          <div className="social-links">
            <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
            <a href="#"><img src="/images/facebook.png" alt="fb" /></a>
            <a href="#"><img src="/images/youtube.png" alt="youtube" /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#pricing">Membership</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Programs</h3>

          <a href="#services">Strength Training</a>
          <a href="#services">Weight Loss</a>
          <a href="#services">Muscle Building</a>
          <a href="#services">Personal Training</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Visit Us</h3>

          <p>
            Phase 8B, Industrial Area
            <br />
            Mohali, Punjab
          </p>

          <a href="tel:+919876543210">
            +91 98765 43210
          </a>

          <a href="mailto:hello@musclehub.com">
            hello@musclehub.com
          </a>
        </div>
      </div>

      {/* Huge Brand Text with Hover Mask Effect */}
      <div 
        className="footer-big-text" 
        ref={textRef} 
        onMouseMove={handleMouseMove}
      >
        <div className="text-outline">
          <span className="white-text">Pulse</span><span className="green-text">Fit</span>
        </div>
        <div className="text-filled">
          <span className="white-text">Pulse</span><span className="green-text">Fit</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 MuscleHub. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <p>
          Built for stronger people.
        </p>

      </div>

    </footer>
  );
}