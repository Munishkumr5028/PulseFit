import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Schedules from "@/components/Schedules";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
    return (
        <main>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="hero-section">
                <div className="camo-bg"></div>
                <div className="hero-grid"></div>

                <div className="hero-content">
                    <h1 className="hero-title title-back">
                        <div className="title-row">
                            <span className="green-text train-text">Train</span>
                            <span className="white-text with-text">with</span>
                        </div>
                        <div className="title-row">
                            <span className="white-text the-text">the</span>
                            <span className="green-text best-text">best.</span>
                        </div>
                    </h1>

                    <div className="hero-image">
                        <img
                            src="/images/gymbanner.png"
                            alt="MuscleHub athlete"
                        />
                    </div>

                    <h1 className="hero-title title-front" aria-hidden="true">
                        <div className="title-row">
                            <span className="green-text train-text hidden-text">Train</span>
                            <span className="white-text with-text">with</span>
                        </div>
                        <div className="title-row">
                            <span className="white-text the-text hidden-text">the</span>
                            <span className="green-text best-text">best.</span>
                        </div>
                    </h1>

                    <div className="hero-bottom">
                        <div className="hero-description">
                            <p>
                                Unlock your potential and redefine your life.<br />
                                Welcome to our gym, where each drop of<br />
                                sweat brings you one step closer to<br />
                                achieving your dreams.
                            </p>
                        </div>
                        <div className="scroll-down">
                            <span>Scroll Down</span>
                            <div className="scroll-indicator">
                                <div className="scroll-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MARQUEE ================= */}
            <section className="marquee">
                <div className="marquee-track">
                    {/* Duplicate groups to ensure seamless infinite scroll on wide screens */}
                    {[...Array(6)].map((_, i) => (
                        <div className="marquee-group" key={i}>
                            <span>BUILD STRENGTH</span>
                            <img src="/images/dumbbel.png" alt="" />

                            <span>STAY CONSISTENT</span>
                            <img src="/images/dumbbel.png" alt="" />

                            <span>BECOME YOUR BEST</span>
                            <img src="/images/dumbbel.png" alt="" />
                        </div>
                    ))}
                </div>
            </section>

            <About />
            <Services />
            <Schedules />
            <Goals />

            <WhyChoose />

            <Pricing />

            {/* ================= TESTIMONIAL ================= */}
            <section className="testimonial-section">
                <h2>
                    Real people.
                    <span> Real results.</span>
                </h2>

                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p>
                            “MuscleHub completely changed my approach to
                            fitness. The trainers are supportive and the
                            environment keeps me motivated.”
                        </p>
                        <strong>Rahul Sharma</strong>
                        <span>Member</span>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “The personalized training plan helped me stay
                            consistent and finally reach my fitness goals.”
                        </p>
                        <strong>Simran Kaur</strong>
                        <span>Member</span>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “Great equipment, amazing trainers and a very
                            positive atmosphere.”
                        </p>
                        <strong>Aman Verma</strong>
                        <span>Member</span>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="cta-section">
                <div>
                    <h2>
                        Ready to build your
                        <span> stronger self?</span>
                    </h2>

                    <p>
                        Your transformation starts with one decision.
                    </p>

                    <a href="#pricing" className="primary-btn">
                        Join MuscleHub
                    </a>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}