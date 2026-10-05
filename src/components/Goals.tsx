export default function Goals() {
  return (
    <section className="why-section" id="goals" style={{ marginTop: 50 }}>
      <div className="why-content">
        <h2>
          Achieve your
          <span> Goals.</span>
        </h2>
        <p className="section-description">
          Whether you're looking to lose weight, build muscle, or improve your overall health, we have the right path for you.
        </p>
        <div className="why-list">
          <div>
            <span>🎯</span>
            <div>
              <h3>Weight Loss</h3>
              <p>Burn fat and get lean.</p>
            </div>
          </div>
          <div>
            <span>💪</span>
            <div>
              <h3>Muscle Gain</h3>
              <p>Build size and strength.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-image">
        <img src="/images/gymbanner.png" alt="Goals" />
      </div>
    </section>
  );
}
