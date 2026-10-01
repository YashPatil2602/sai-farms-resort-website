import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ExperienceCard({
  video,
  poster,
  number,
  eyebrow,
  title,
  description,
  link,
}) {
  return (
    <Link to={link} className="experience-card">

      <div className="experience-card-media">
        <video
          className="experience-card-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="experience-card-overlay"></div>

        <div className="experience-card-number">
          {number}
        </div>
      </div>

      <div className="experience-card-content">
        <p className="experience-card-eyebrow">
          {eyebrow}
        </p>

        <h3>{title}</h3>

        <p className="experience-card-description">
          {description}
        </p>

        <div className="experience-card-link">
          Discover Experience
          <ArrowUpRight size={17} />
        </div>
      </div>

    </Link>
  );
}

export default ExperienceCard;
