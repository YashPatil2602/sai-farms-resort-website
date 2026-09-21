import { ArrowUpRight } from "lucide-react";
import "../styles/venues.css";

const venues = [
  {
    number: "01",
    name: "Riverside Amphitheatre",
    image: "/images/venues/riverside-amphitheatre.jpg",
    className: "venue-card venue-featured",
  },
  {
    number: "02",
    name: "Poolside",
    image: "/images/venues/poolside.jpg",
    className: "venue-card venue-poolside",
  },
  {
    number: "03",
    name: "Grand Lawn",
    image: "/images/venues/grand-lawn.jpg",
    className: "venue-card",
  },
  {
    number: "04",
    name: "Bottle Palm Lawn",
    image: "/images/venues/bottle-palm-lawn.jpg",
    className: "venue-card",
  },
  {
    number: "05",
    name: "Royal Lawn",
    image: "/images/venues/royal-lawn.jpg",
    className: "venue-card",
  },
];

function VenuesSection() {
  return (
    <section className="venues-section">
      <div className="container">

        <div className="venues-header">
          <div>
            <p className="section-eyebrow">
              Wedding Venues
            </p>

            <h2>
              Five Spaces.
              <span>One Beautiful Resort.</span>
            </h2>
          </div>

          <div className="venues-header-right">
            <p>
              From riverside ceremonies to elegant lawn celebrations
              and poolside evenings, choose a setting that fits every
              moment of your wedding.
            </p>

            <a href="/destination-wedding" className="venues-link">
              Explore Weddings
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="venues-grid">
          {venues.map((venue) => (
            <article
              className={venue.className}
              key={venue.number}
            >
              <img
                src={venue.image}
                alt={venue.name}
              />

              <div className="venue-overlay"></div>

              <span className="venue-number">
                {venue.number}
              </span>

              <div className="venue-content">
                <p>Sai Farms</p>

                <h3>{venue.name}</h3>

                <div className="venue-discover">
                  Discover Venue
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VenuesSection;
