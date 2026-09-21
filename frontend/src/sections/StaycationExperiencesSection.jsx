import { ArrowUpRight } from "lucide-react";
import "../styles/staycation-experiences.css";

const experiences = [
  {
    number: "01",
    label: "For Families",
    title: "Time Together",
    image: "/images/activities/family-experience.jpg",
    text:
      "Water fun, open lawns and comfortable stays create an easy family escape where everyone finds something to enjoy.",
  },
  {
    number: "02",
    label: "Friends & Corporate",
    title: "Connect as a Team",
    image: "/images/activities/corporate-team.jpg",
    text:
      "Bring your group together with spacious activity zones, water experiences, open spaces and relaxed resort time.",
  },
  {
    number: "03",
    label: "For Couples",
    title: "Escape Together",
    image: "/images/activities/couple-experience.jpg",
    text:
      "Slow down with pool time, peaceful riverside moments, curated meals and a comfortable resort stay.",
  },
];

function StaycationExperiencesSection() {
  return (
    <section
      id="experiences"
      className="staycation-experiences-section"
    >
      <div className="container">

        <div className="staycation-experiences-header">
          <div>
            <p className="section-eyebrow">
              Made for Every Escape
            </p>

            <h2>
              One Resort.
              <span>Your Kind of Experience.</span>
            </h2>
          </div>

          <p>
            Whether you arrive with family, friends, colleagues
            or someone special, experience Sai Farms in a way
            that feels right for your group.
          </p>
        </div>

        <div className="staycation-experiences-grid">
          {experiences.map((experience) => (
            <article
              className="staycation-experience-card"
              key={experience.number}
            >
              <img
                src={experience.image}
                alt={experience.label}
              />

              <div className="staycation-experience-overlay"></div>

              <span className="staycation-experience-number">
                {experience.number}
              </span>

              <div className="staycation-experience-content">
                <p>{experience.label}</p>

                <h3>{experience.title}</h3>

                <div className="staycation-experience-description">
                  {experience.text}
                </div>

                <div className="staycation-experience-link">
                  Explore Experience
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StaycationExperiencesSection;
