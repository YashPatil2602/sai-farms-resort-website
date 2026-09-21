import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import "../styles/school-cta.css";

function SchoolCTASection() {
  return (
    <section className="school-cta-section">

      <img
        src="/images/activities/school-water-park.jpg"
        alt="School picnic at Sai Farms"
        className="school-cta-image"
      />

      <div className="school-cta-overlay"></div>

      <div className="school-cta-content">

        <p className="school-cta-eyebrow">
          Plan Your School Day Out
        </p>

        <h2>
          One Day.
          <span>So Many Memories.</span>
        </h2>

        <p>
          Plan a fun-filled school outing with activities,
          open spaces, meals and group experiences at Sai Farms.
        </p>

        <div className="school-cta-actions">

          <Link to="/contact" className="school-cta-primary">
            Enquire for School Picnic
            <ArrowRight size={17} />
          </Link>

          <a
            href="tel:+918888867575"
            className="school-cta-secondary"
          >
            <Phone size={15} />
            888 886 7575
          </a>

        </div>

      </div>

    </section>
  );
}

export default SchoolCTASection;
