import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import WeddingIntroSection from "../sections/WeddingIntroSection";
import VenuesSection from "../sections/VenuesSection";
import WeddingStaySection from "../sections/WeddingStaySection";
import WeddingPackagesSection from "../sections/WeddingPackagesSection";
import WeddingMomentsSection from "../sections/WeddingMomentsSection";

import "../styles/destination-wedding.css";

function DestinationWedding() {
  return (
    <>
      <section className="wedding-hero">
        <div className="wedding-hero-overlay"></div>

        <div className="wedding-hero-content">
          <p className="wedding-eyebrow">
            Destination Weddings at Sai Farms
          </p>

          <h1>
            Every Love Story
            <span>Deserves a Beautiful Destination.</span>
          </h1>

          <p className="wedding-hero-text">
            Celebrate your wedding surrounded by nature, riverside views,
            beautiful lawns and thoughtfully designed spaces across our
            8-acre resort.
          </p>

          <div className="wedding-hero-actions">
            <Link to="/contact" className="wedding-primary-btn">
              Plan Your Wedding
              <ArrowRight size={17} />
            </Link>

            <a href="#venues" className="wedding-secondary-btn">
              Explore Venues
            </a>
          </div>
        </div>
      </section>

      <WeddingIntroSection />

      <VenuesSection />

      <WeddingStaySection />

      <WeddingPackagesSection />

      <WeddingMomentsSection />
    </>
  );
}

export default DestinationWedding;
