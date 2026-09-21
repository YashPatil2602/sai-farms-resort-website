import {
  UsersRound,
  Armchair,
  UtensilsCrossed,
  Trees,
} from "lucide-react";

import "../styles/school-group.css";

const features = [
  {
    icon: UsersRound,
    title: "Group-Friendly Experience",
    text: "A complete day experience designed for school groups to enjoy activities together.",
  },
  {
    icon: Armchair,
    title: "Teacher Rest Areas",
    text: "Dedicated spaces where teachers can take a break while students enjoy their activities.",
  },
  {
    icon: UtensilsCrossed,
    title: "Comfortable Dining",
    text: "Indoor dining makes meal time easier and more comfortable for large groups.",
  },
  {
    icon: Trees,
    title: "Spacious Green Areas",
    text: "Open lawns and natural surroundings provide space for games and group activities.",
  },
];

function SchoolGroupSection() {
  return (
    <section className="school-group-section">

      <div className="school-group-image">
        <img
          src="/images/activities/resort-aerial.jpg"
          alt="Sai Farms resort for school groups"
        />

        <div className="school-group-image-overlay"></div>

        <div className="school-group-badge">
          <span>One Destination</span>
          <strong>Full Day</strong>
          <small>of experiences</small>
        </div>
      </div>

      <div className="school-group-content">

        <p className="section-eyebrow">
          Designed for School Groups
        </p>

        <h2>
          Fun for Students.
          <span>Easy for Teachers.</span>
        </h2>

        <p className="school-group-intro">
          Bring the entire group together in one spacious resort
          with activities, open areas, dining and places for teachers
          to relax throughout the day.
        </p>

        <div className="school-group-features">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                className="school-group-feature"
                key={feature.title}
              >
                <div className="school-group-icon">
                  <Icon size={21} strokeWidth={1.4} />
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

export default SchoolGroupSection;
