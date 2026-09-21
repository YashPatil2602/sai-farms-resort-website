import {
  Waves,
  Trophy,
  Trees,
  UtensilsCrossed,
} from "lucide-react";

import "../styles/school-experiences.css";

const experiences = [
  {
    number: "01",
    icon: Waves,
    title: "Water Fun",
    text: "Water slides, pool experiences and refreshing activities for a fun-filled school day.",
    image: "/images/activities/school-water-park.jpg",
  },
  {
    number: "02",
    icon: Trophy,
    title: "Outdoor Games",
    text: "Open activity areas where students can play, participate and enjoy time together.",
    image: "/images/activities/family-experience.jpg",
  },
  {
    number: "03",
    icon: Trees,
    title: "Green Spaces",
    text: "Spacious lawns and open surroundings for exploration, group activities and outdoor fun.",
    image: "/images/activities/open-lawn.jpg",
  },
  {
    number: "04",
    icon: UtensilsCrossed,
    title: "Meals & Dining",
    text: "Comfortable dining and meals designed to make the group experience easy and enjoyable.",
    image: "/images/food/breakfast.jpg",
  },
];

function SchoolExperiencesSection() {
  return (
    <section
      id="school-experiences"
      className="school-experiences-section"
    >
      <div className="container">

        <div className="school-experiences-header">
          <div>
            <p className="section-eyebrow">
              A Day Full of Experiences
            </p>

            <h2>
              Play More.
              <span>Discover More.</span>
            </h2>
          </div>

          <p>
            A school picnic at Sai Farms combines water activities,
            outdoor play, green spaces and comfortable dining
            into one complete day experience.
          </p>
        </div>

        <div className="school-experiences-grid">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <article
                className="school-experience-card"
                key={experience.number}
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                />

                <div className="school-experience-overlay"></div>

                <span className="school-experience-number">
                  {experience.number}
                </span>

                <div className="school-experience-content">
                  <div className="school-experience-icon">
                    <Icon size={21} strokeWidth={1.4} />
                  </div>

                  <h3>{experience.title}</h3>

                  <p>{experience.text}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SchoolExperiencesSection;
