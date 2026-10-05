export default function Contact() {
  return (
    <section className="cta-section" id="contact" style={{ marginBottom: 50 }}>
      <div>
        <h2>
          Get in
          <span> Touch.</span>
        </h2>
        <p>
          Have questions? Ready to start? We are here to help.
        </p>
        <p style={{ color: 'white', marginBottom: 30 }}>
          Call us: +91 98765 43210 <br/>
          Email: hello@musclehub.com
        </p>
        <a href="mailto:hello@musclehub.com" className="primary-btn">
          Contact Us
        </a>
      </div>
    </section>
  );
}
