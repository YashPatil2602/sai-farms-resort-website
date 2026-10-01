import ExperienceCard from "../components/ExperienceCard";
import "../styles/experiences.css";

const experiences = [
  {
    number: "01",
    eyebrow: "Celebrate",
    title: "Destination Weddings",
    description:
      "From intimate ceremonies to grand celebrations, create your wedding story across beautiful lawns, riverside spaces and resort venues.",
    video: "/videos/wedding-cinematic-teaser.mp4",
    poster: "/videos/posters/wedding-cinematic-teaser.jpg",
    link: "/destination-wedding",
  },
  {
    number: "02",
    eyebrow: "Escape · Connect",
    title: "Staycation & Corporate",
    description:
      "Relax with family and friends or bring your team together with comfortable stays, activities, food and open spaces.",
    video: "/videos/staycation-experience.mp4",
    poster: "/videos/posters/staycation-experience.jpg",
    link: "/staycation-corporate",
  },
  {
    number: "03",
    eyebrow: "Play · Explore",
    title: "School Picnic & Day Experience",
    description:
      "A fun-filled day of water activities, open spaces, games and memorable group experiences designed for students.",
    video: "/videos/school-picnic.mp4",
    poster: "/videos/posters/school-picnic.jpg",
    link: "/school-picnic",
  },
];

function ExperiencesSection() {
  return (
    <section className="experiences-section">
      <div className="container">
        <div className="experiences-header">
          <div>
            <p className="section-eyebrow">
              Experiences at Sai Farms
            </p>

            <h2>
              One Resort.
              <span>Three Ways to Experience It.</span>
            </h2>
          </div>

          <p className="experiences-intro">
            Whether you are celebrating, reconnecting or planning
            a day full of adventure, Sai Farms gives every group
            its own way to experience the resort.
          </p>
        </div>

        <div className="experiences-grid">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.number}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;
