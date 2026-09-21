import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SchoolExperiencesSection from "../sections/SchoolExperiencesSection";
import SchoolGroupSection from "../sections/SchoolGroupSection";
import SchoolCTASection from "../sections/SchoolCTASection";
import "../styles/school-picnic.css";

function SchoolPicnic() {
  return (
    <>
      <section className="school-hero">
        <div className="school-hero-overlay"></div>

        <div className="school-hero-content">
          <p className="school-eyebrow">
            School Picnic · Day Experience
          </p>

          <h1>
            Learn. Play.
            <span>Create Memories.</span>
          </h1>

          <p className="school-hero-text">
            Give students a fun-filled day of water activities,
            outdoor games, open green spaces and memorable experiences
            in one spacious resort.
          </p>

          <div className="school-hero-actions">
            <Link to="/contact" className="school-primary-btn">
              Plan a School Picnic
              <ArrowRight size={17} />
            </Link>

            <a href="#school-experiences" className="school-secondary-btn">
              Explore Activities
            </a>
          </div>
        </div>
      </section>

      <SchoolExperiencesSection />

      <SchoolGroupSection />

      <SchoolCTASection />
    </>
  );
}

export default SchoolPicnic;
