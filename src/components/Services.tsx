"use client";

import { useState } from "react";

const services = [
  {
    icon: "/images/weight-lifting.png",
    title: "Strength Training",
    text: "Build strength, muscle and confidence with structured workouts.",
    details: [
      "Access to premium free weights and machines",
      "Focus on compound movements (squats, deadlifts, bench)",
      "Progressive overload tracking",
      "Technique correction from floor trainers"
    ]
  },
  {
    icon: "/images/weight-loss.png",
    title: "Weight Loss",
    text: "Burn fat and improve your fitness with effective training.",
    details: [
      "High-intensity interval training (HIIT) sessions",
      "Cardiovascular endurance programs",
      "Customized calorie-burning routines",
      "Weekly weigh-ins and body composition analysis"
    ]
  },
  {
    icon: "/images/muscle.png",
    title: "Muscle Building",
    text: "Progressive training designed to help you build lean muscle.",
    details: [
      "Hypertrophy-focused training splits",
      "Targeted muscle isolation exercises",
      "Nutritional advice for caloric surplus",
      "Advanced recovery techniques"
    ]
  },
  {
    icon: "/images/functional-fit.png",
    title: "Functional Fitness",
    text: "Improve mobility, endurance, balance and everyday performance.",
    details: [
      "Kettlebell, TRX, and medicine ball workouts",
      "Core stability and balance training",
      "Injury prevention and joint health",
      "Agility and speed drills"
    ]
  },
  {
    icon: "/images/personal-training.png",
    title: "Personal Training",
    text: "Get one-on-one coaching designed around your goals.",
    details: [
      "1-on-1 dedicated coaching sessions",
      "Fully customized workout plans",
      "Direct accountability and motivation",
      "Form correction and safety monitoring"
    ]
  },
  {
    icon: "/images/nutrition.png",
    title: "Nutrition Guidance",
    text: "Simple nutrition guidance to support your transformation.",
    details: [
      "Personalized macro and calorie targets",
      "Meal planning and recipe suggestions",
      "Supplementation advice",
      "Lifestyle and habit coaching"
    ]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <div>
          <h2>
            Our
            <span> Programs.</span>
          </h2>
        </div>

        <p>
          From strength training to personal coaching,
          we have everything you need to reach your goals.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div 
            className="service-card" 
            key={service.title}
            style={{
              background: "linear-gradient(145deg, #161c11, #080b07)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden"
            }}
            onClick={() => setSelectedService(service)}
          >
            {/* Subtle glow effect */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "100px", height: "100px", background: "var(--green)",
              filter: "blur(50px)", opacity: 0.1, borderRadius: "50%",
              pointerEvents: "none"
            }}></div>

            <div className="service-icon" style={{
              background: "rgba(183, 200, 106, 0.08)",
              borderColor: "rgba(183, 200, 106, 0.25)",
            }}>
              <img src={service.icon} alt="" style={{ filter: "brightness(0) saturate(100%) invert(88%) sepia(16%) saturate(769%) hue-rotate(33deg)" }} />
            </div>

            <h3 style={{ color: "white", fontSize: "22px", marginBottom: "10px" }}>{service.title}</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{service.text}</p>

            <button
              style={{
                marginTop: "20px", background: "none", border: "none",
                color: "var(--green)", fontWeight: 700, fontSize: "14px",
                cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "5px"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
            >
              Learn More <span>→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 10000, display: "flex",
          alignItems: "center", justifyContent: "center",
          background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(8px)",
          padding: "20px"
        }} onClick={() => setSelectedService(null)}>
          <div 
            style={{
              background: "#11160d", padding: "40px", borderRadius: "20px",
              maxWidth: "500px", width: "100%", border: "1px solid rgba(183, 200, 106, 0.3)",
              position: "relative", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              style={{
                position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.05)",
                border: "none", color: "var(--muted)", fontSize: "20px", cursor: "pointer",
                width: "36px", height: "36px", borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center", transition: "0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "white"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
            >
              ✕
            </button>
            
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <div style={{
                width: "60px", height: "60px", background: "rgba(183, 200, 106, 0.15)",
                borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <img src={selectedService.icon} alt="" style={{ width: "32px", filter: "brightness(0) saturate(100%) invert(88%) sepia(16%) saturate(769%) hue-rotate(33deg)" }} />
              </div>
              <h3 style={{ margin: 0, fontSize: "28px", color: "white" }}>{selectedService.title}</h3>
            </div>
            
            <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6, marginBottom: "25px" }}>
              {selectedService.text}
            </p>

            <h4 style={{ color: "var(--green)", fontSize: "15px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>
              Program Details
            </h4>
            
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {selectedService.details.map((detail, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#e2e4dc", fontSize: "15px" }}>
                  <span style={{ color: "var(--green)", fontSize: "18px", lineHeight: "1" }}>•</span>
                  {detail}
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              onClick={() => setSelectedService(null)}
              style={{
                display: "block", textAlign: "center", background: "var(--green)",
                color: "#11160d", textDecoration: "none", padding: "14px",
                borderRadius: "30px", fontWeight: "bold", fontSize: "16px", marginTop: "35px",
                transition: "0.3s"
              }}
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </section>
  );
}