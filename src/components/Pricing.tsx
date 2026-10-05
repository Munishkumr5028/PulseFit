"use client";

import { useState, FormEvent } from "react";

const plans = [
  {
    name: "Basic",
    price: "1,499",
    description: "For beginners starting their fitness journey.",
    features: [
      "Gym Access",
      "Basic Equipment",
      "Locker Facility",
    ],
  },
  {
    name: "Premium",
    price: "2,499",
    description: "Perfect for consistent training and progress.",
    popular: true,
    features: [
      "Unlimited Gym Access",
      "Personal Training",
      "Nutrition Guidance",
      "Progress Tracking",
    ],
  },
  {
    name: "Elite",
    price: "3,999",
    description: "Complete support for serious transformation.",
    features: [
      "Everything in Premium",
      "Priority Coaching",
      "Custom Workout Plan",
      "Monthly Consultation",
    ],
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleGetStarted = (planName: string, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedPlan(planName);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3500); // Close after 3.5s
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-heading pricing-heading">
        <div style={{textAlign: "center"}}>
          <h2>
            Choose your
            <span> level.</span>
          </h2>
        </div>
        <p>
          Flexible plans designed to fit your goals and
          lifestyle.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => {
          const isActive = selectedPlan === plan.name || (!selectedPlan && plan.popular);
          
          return (
            <div
              className={`price-card ${isActive ? "popular" : ""}`}
              key={plan.name}
              onClick={() => handlePlanSelect(plan.name)}
              style={{ cursor: "pointer" }}
            >
              {isActive && (
                <div className="popular-badge">
                  {selectedPlan === plan.name ? "SELECTED" : "MOST POPULAR"}
                </div>
              )}

              <h3>{plan.name}</h3>

              <div className="price">
                <span>₹</span>
                {plan.price}
                <small>/month</small>
              </div>

              <p>{plan.description}</p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#"
                onClick={(e) => handleGetStarted(plan.name, e)}
                style={{
                  background: isActive ? "var(--green)" : "transparent",
                  color: isActive ? "#10130b" : "white"
                }}
              >
                Get Started
              </a>
            </div>
          );
        })}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.85)", zIndex: 10000,
          display: "flex", justifyContent: "center", alignItems: "center",
          backdropFilter: "blur(5px)"
        }}>
          <div style={{
            background: "#11160d", padding: "40px", borderRadius: "15px",
            border: "1px solid rgba(183, 200, 106, 0.4)", width: "90%", maxWidth: "420px",
            textAlign: "center", position: "relative"
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute", top: "15px", right: "20px", background: "none",
                border: "none", color: "var(--muted)", fontSize: "20px", cursor: "pointer"
              }}
            >
              ✕
            </button>
            
            {isSubmitted ? (
              <div style={{ padding: "20px 0" }}>
                <div style={{ fontSize: "50px", marginBottom: "10px" }}>✅</div>
                <h3 style={{ color: "var(--green)", fontSize: "24px", marginBottom: "15px", marginTop: 0 }}>Form Submitted!</h3>
                <p style={{ color: "var(--white)", lineHeight: 1.6 }}>
                  Thank you for choosing the <strong>{selectedPlan}</strong> plan. <br/>
                  We will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px", textAlign: "left" }}>
                <h3 style={{ fontSize: "24px", margin: "0 0 5px", textAlign: "center", color: "var(--white)" }}>
                  Join <span style={{ color: "var(--green)" }}>{selectedPlan}</span>
                </h3>
                <p style={{ color: "var(--muted)", textAlign: "center", margin: "0 0 15px", fontSize: "14px" }}>
                  Fill in your details to get started.
                </p>
                
                <div>
                  <label style={{ display: "block", marginBottom: "8px", fontSize: "13px", color: "var(--muted)", fontWeight: 600 }}>Full Name</label>
                  <input required type="text" placeholder="John Doe" style={{
                    width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--border)",
                    background: "#080b07", color: "white", outline: "none", fontSize: "14px"
                  }} />
                </div>
                
                <div>
                  <label style={{ display: "block", marginBottom: "8px", fontSize: "13px", color: "var(--muted)", fontWeight: 600 }}>Phone Number</label>
                  <input required type="tel" placeholder="+91 98765 43210" style={{
                    width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--border)",
                    background: "#080b07", color: "white", outline: "none", fontSize: "14px"
                  }} />
                </div>

                <button type="submit" style={{
                  background: "var(--green)", color: "#10130b", border: "none",
                  padding: "14px", borderRadius: "30px", fontWeight: 700,
                  cursor: "pointer", marginTop: "15px", fontSize: "15px",
                  transition: "0.3s"
                }}>
                  Submit Details
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}