export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src="/images/gym-image.jpg"
          alt="MuscleHub gym"
        />
      </div>

      <div className="about-content">
        <h2>
          Train with purpose.
          <span> Live stronger.</span>
        </h2>

        <p>
          MuscleHub is built for people who want more from
          their fitness journey. Whether you want to build
          muscle, lose weight or simply become stronger,
          we're here to help.
        </p>

        <p>
          With expert trainers, modern equipment and a
          supportive community, every workout brings you
          one step closer to your goals.
        </p>

        <a href="#services" className="text-link">
          Discover Our Programs
        </a>
      </div>
    </section>
  );
}