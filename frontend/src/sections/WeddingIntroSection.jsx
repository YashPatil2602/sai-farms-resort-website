import "../styles/wedding-intro.css";

function WeddingIntroSection() {
  return (
    <section className="wedding-intro-section">
      <div className="container wedding-intro-grid">

        <div className="wedding-intro-heading">
          <p className="section-eyebrow">
            Your Wedding · Your Resort
          </p>

          <h2>
            A Complete
            <span>Destination Celebration.</span>
          </h2>
        </div>

        <div className="wedding-intro-copy">
          <p>
            Sai Farms brings celebration spaces, accommodation,
            food and leisure together within one beautiful
            8-acre resort — allowing every wedding function
            to unfold in one destination.
          </p>
        </div>

      </div>

      <div className="container wedding-stats">
        <div className="wedding-stat">
          <strong>8</strong>
          <span>Acres</span>
        </div>

        <div className="wedding-stat">
          <strong>5</strong>
          <span>Wedding Venues</span>
        </div>

        <div className="wedding-stat">
          <strong>3</strong>
          <span>Beautiful Lawns</span>
        </div>

        <div className="wedding-stat">
          <strong>1</strong>
          <span>Riverside Amphitheatre</span>
        </div>

        <div className="wedding-stat">
          <strong>Stay</strong>
          <span>Rooms & Dormitories</span>
        </div>
      </div>
    </section>
  );
}

export default WeddingIntroSection;
