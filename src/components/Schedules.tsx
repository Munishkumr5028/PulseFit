export default function Schedules() {
  return (
    <section className="services-section" id="schedules" style={{ background: '#080b07' }}>
      <div className="section-heading">
        <div>
          <h2>
            Class
            <span> Schedules.</span>
          </h2>
        </div>
        <p>Find the perfect time to train with our flexible class schedules.</p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <h3>Morning HIIT</h3>
          <p>6:00 AM - 7:00 AM</p>
          <p style={{ color: 'var(--green)', marginTop: 10 }}>Mon, Wed, Fri</p>
        </div>
        <div className="service-card">
          <h3>Strength & Conditioning</h3>
          <p>8:00 AM - 9:30 AM</p>
          <p style={{ color: 'var(--green)', marginTop: 10 }}>Tue, Thu, Sat</p>
        </div>
        <div className="service-card">
          <h3>Yoga & Core</h3>
          <p>6:00 PM - 7:00 PM</p>
          <p style={{ color: 'var(--green)', marginTop: 10 }}>Mon, Wed</p>
        </div>
      </div>
    </section>
  );
}
