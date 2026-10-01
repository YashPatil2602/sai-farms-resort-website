import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import "../styles/hero.css";

const heroVideos = [
  {
    label: "Destination Weddings",
    src: "/videos/wedding-cinematic-teaser.mp4",
    poster: "/videos/posters/wedding-cinematic-teaser.jpg",
  },
  {
    label: "Staycation & Corporate",
    src: "/videos/staycation-experience.mp4",
    poster: "/videos/posters/staycation-experience.jpg",
  },
  {
    label: "School Picnic & Day Experience",
    src: "/videos/school-picnic.mp4",
    poster: "/videos/posters/school-picnic.jpg",
  },
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [glare, setGlare] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlare(true);

      setTimeout(() => {
        setActiveIndex((current) =>
          current === heroVideos.length - 1 ? 0 : current + 1
        );
      }, 350);

      setTimeout(() => {
        setGlare(false);
      }, 900);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  const activeVideo = heroVideos[activeIndex];

  return (
    <section className="hero">
      <video
        key={activeVideo.src}
        className="hero-video hero-video-sequence"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster={activeVideo.poster}
        aria-hidden="true"
      >
        <source src={activeVideo.src} type="video/mp4" />
      </video>

      <div
        className={`hero-glare ${glare ? "hero-glare-active" : ""}`}
      ></div>

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

          <Link
            to="/school-picnic"
            className="hero-btn hero-btn-outline"
          >
            Plan a Day Outing
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
