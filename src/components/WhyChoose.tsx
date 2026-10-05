"use client";

import { useState } from "react";

const features = [
  {
    id: "01",
    title: "Expert Trainers",
    description: "Professional guidance for better results.",
    image: "/images/owner.png",
  },
  {
    id: "02",
    title: "Modern Equipment",
    description: "Everything you need for effective training.",
    image: "/images/gym-image.jpg",
  },
  {
    id: "03",
    title: "Personalized Plans",
    description: "Training designed around your goals.",
    image: "/images/fit-women.jpg",
  },
  {
    id: "04",
    title: "Supportive Community",
    description: "Stay motivated throughout your journey.",
    image: "/images/community.jpg",
  }
];

export default function WhyChoose() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>("01");

  const activeId = hoveredId || selectedId;

  return (
    <section className="why-section feature" id="features">
      <div className="why-feature-column">
        <div className="why-image" style={{ position: "relative" }}>
          {features.map((feature) => (
            <img
              key={feature.id}
              src={feature.image}
              alt={feature.title}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: activeId === feature.id ? 1 : 0,
                transition: "opacity 0.6s ease-in-out",
                zIndex: activeId === feature.id ? 2 : 1,
              }}
            />
          ))}
        </div>

        <div className="why-content">
          <h2>
            More than a gym.
            <span> A community.</span>
          </h2>

          <p className="section-description">
            We believe fitness is not just about lifting weights.
            It is about building confidence, discipline and a
            stronger lifestyle.
          </p>

          <div className="why-list">
            {features.map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(feature.id)}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: activeId === feature.id ? "translateX(10px)" : "translateX(0)",
                  opacity: activeId === feature.id ? 1 : 0.6,
                }}
              >
                <span style={{
                  color: activeId === feature.id ? "var(--green)" : "var(--muted)",
                  transition: "0.3s"
                }}>
                  {feature.id}
                </span>
                <div>
                  <h3 style={{
                    color: activeId === feature.id ? "white" : "var(--muted)",
                    transition: "0.3s"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: activeId === feature.id ? "var(--muted)" : "rgba(157, 162, 148, 0.5)",
                    transition: "0.3s"
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
