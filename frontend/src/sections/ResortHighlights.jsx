import {
  Waves,
  Trees,
  BedDouble,
  UtensilsCrossed,
  Users,
} from "lucide-react";

import "../styles/resort-highlights.css";

const highlights = [
  {
    icon: Trees,
    number: "8",
    label: "Acres",
    text: "A spacious private resort surrounded by nature.",
  },
  {
    icon: Waves,
    number: "01",
    label: "River View",
    text: "Peaceful riverside surroundings and scenic open views.",
  },
  {
    icon: BedDouble,
    number: "Stay",
    label: "Accommodation",
    text: "Comfortable rooms and group accommodation options.",
  },
  {
    icon: UtensilsCrossed,
    number: "Food",
    label: "Dining",
    text: "Meals and refreshments for families, events and groups.",
  },
  {
    icon: Users,
    number: "Fun",
    label: "Activities",
    text: "Pools, water activities, lawns, games and group experiences.",
  },
];

function ResortHighlights() {
  return (
    <section className="resort-highlights">
      <div className="resort-highlights-grid">

        <div className="resort-highlights-image">
          <img
            src="/images/activities/resort-aerial.jpg"
            alt="Sai Farms aerial resort view"
          />

          <div className="resort-image-badge">
            <span>Explore</span>
            <strong>8 Acres</strong>
            <small>of experiences</small>
          </div>
        </div>

        <div className="resort-highlights-content">

          <p className="section-eyebrow">
            Why Sai Farms
          </p>

          <h2>
            Everything You Need.
            <span>All in One Resort.</span>
          </h2>

          <p className="resort-highlights-intro">
            From celebrations and relaxing stays to group outings
            and water activities, Sai Farms brings every experience
            together in one naturally beautiful destination.
          </p>

          <div className="highlights-list">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="highlight-item" key={index}>
                  <div className="highlight-icon">
                    <Icon size={22} strokeWidth={1.4} />
                  </div>

                  <div className="highlight-number">
                    {item.number}
                  </div>

                  <div className="highlight-text">
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ResortHighlights;
