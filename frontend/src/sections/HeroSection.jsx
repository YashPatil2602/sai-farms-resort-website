import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import "../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-location">
          <MapPin size={15} />
          <span>Badlapur · Maharashtra</span>
        </div>

        <p className="hero-eyebrow">
          An 8 Acre Riverside Resort
        </p>

        <h1 className="hero-title">
          Where Every
          <span>Experience Becomes a Memory</span>
        </h1>

        <p className="hero-description">
          Destination weddings, relaxing staycations, corporate gatherings
          and unforgettable day experiences — all in one beautiful resort.
        </p>

        <div className="hero-actions">
          <Link
            to="/destination-wedding"
            className="hero-btn hero-btn-primary"
          >
            Explore Weddings
            <ArrowRight size={17} />
          </Link>

          <Link
            to="/staycation-corporate"
            className="hero-btn hero-btn-outline"
          >
            Plan Your Stay
          </Link>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-stat">
          <strong>8</strong>
          <span>Acres</span>
        </div>

        <div className="hero-divider"></div>

        <div className="hero-stat">
          <strong>5</strong>
          <span>Wedding Venues</span>
        </div>

        <div className="hero-divider"></div>

        <div className="hero-stat">
          <strong>3</strong>
          <span>Beautiful Lawns</span>
        </div>

        <div className="hero-divider"></div>

        <div className="hero-stat">
          <strong>1</strong>
          <span>Complete Resort</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
