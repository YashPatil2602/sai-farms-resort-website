import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import "../styles/staycation-cta.css";

function StaycationCTASection() {
  return (
    <section className="staycation-cta-section">

      <img
        src="/images/activities/riverside-view.jpg"
        alt="Sai Farms riverside view"
        className="staycation-cta-image"
      />

      <div className="staycation-cta-overlay"></div>

      <div className="staycation-cta-content">

        <div className="staycation-cta-location">
          <MapPin size={15} />
          <span>Badlapur · Maharashtra</span>
        </div>

        <p className="staycation-cta-eyebrow">
          Your Next Escape
        </p>

        <h2>
          Switch Off.
          <span>Stay a Little Longer.</span>
        </h2>

        <p>
          Come for the resort experience, stay for the quiet moments,
          riverside views, good food and time together.
        </p>

        <div className="staycation-cta-actions">
          <Link to="/contact" className="staycation-cta-primary">
            Plan Your Stay
            <ArrowRight size={17} />
          </Link>

          <a
            href="tel:+918888867575"
            className="staycation-cta-secondary"
          >
            Call 888 886 7575
          </a>
        </div>

      </div>

    </section>
  );
}

export default StaycationCTASection;
