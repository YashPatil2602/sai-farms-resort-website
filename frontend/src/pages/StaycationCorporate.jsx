import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StaycationExperiencesSection from "../sections/StaycationExperiencesSection";
import StaycationActivitiesSection from "../sections/StaycationActivitiesSection";
import StaycationStayDiningSection from "../sections/StaycationStayDiningSection";
import StaycationCTASection from "../sections/StaycationCTASection";
import "../styles/staycation-corporate.css";

function StaycationCorporate() {
  return (
    <>
      <section className="staycation-hero">
        <div className="staycation-overlay"></div>

        <div className="staycation-hero-content">
          <p className="staycation-eyebrow">
            Staycation · Family · Corporate
          </p>

          <h1>
            Experience More
            <span>Than Just a Stay.</span>
          </h1>

          <p className="staycation-hero-text">
            Spend 24 hours surrounded by nature, water experiences,
            open spaces, comfortable stays and memorable group moments.
          </p>

          <div className="staycation-actions">
            <Link to="/contact" className="staycation-primary-btn">
              Plan Your Stay
              <ArrowRight size={17} />
            </Link>

            <a href="#experiences" className="staycation-secondary-btn">
              Explore Experiences
            </a>
          </div>
        </div>
      </section>

      <StaycationExperiencesSection />

      <StaycationActivitiesSection />

      <StaycationStayDiningSection />

      <StaycationCTASection />
    </>
  );
}

export default StaycationCorporate;
