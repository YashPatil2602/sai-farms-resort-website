import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  Users,
  Trees,
  UtensilsCrossed,
  MapPin,
  Phone,
} from "lucide-react";

import "../styles/accommodation.css";

const rooms = [
  {
    number: "01",
    title: "Comfortable Room",
    image: "/images/accommodation/room-01.jpg",
  },
  {
    number: "02",
    title: "Guest Room",
    image: "/images/accommodation/room-02.jpg",
  },
  {
    number: "03",
    title: "Resort Room",
    image: "/images/accommodation/room-03.jpg",
  },
  {
    number: "04",
    title: "Group Dormitory",
    image: "/images/accommodation/room-04-dormitory.jpg",
  },
  {
    number: "05",
    title: "Stay Experience",
    image: "/images/accommodation/room-05.jpg",
  },
  {
    number: "06",
    title: "Group Stay",
    image: "/images/accommodation/room-06.jpg",
  },
];

const highlights = [
  {
    icon: BedDouble,
    title: "Comfortable Stay",
    text: "Relax after a full day of celebrations, activities or resort experiences.",
  },
  {
    icon: Users,
    title: "Group Accommodation",
    text: "Stay options suitable for families, wedding guests and larger groups.",
  },
  {
    icon: Trees,
    title: "Inside the Resort",
    text: "Stay close to the lawns, activities, pool and other Sai Farms experiences.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Experience",
    text: "Enjoy convenient meals and refreshments as part of your resort visit.",
  },
];

function Accommodation() {
  return (
    <>
      {/* HERO */}
      <section className="accommodation-hero">
        <div className="accommodation-hero-overlay"></div>

        <div className="accommodation-hero-content">
          <p className="accommodation-eyebrow">
            Stay at Sai Farms
          </p>

          <h1>
            Rest Comfortably.
            <span>Wake Up to Nature.</span>
          </h1>

          <p className="accommodation-hero-text">
            Comfortable rooms and group accommodation make Sai Farms
            an easy place to stay for families, wedding guests,
            corporate groups and weekend getaways.
          </p>

          <div className="accommodation-hero-actions">
            <Link
              to="/contact"
              className="accommodation-primary-btn"
            >
              Book Your Stay
              <ArrowRight size={17} />
            </Link>

            <a
              href="#rooms"
              className="accommodation-secondary-btn"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="accommodation-intro">
        <div className="container accommodation-intro-grid">

          <div>
            <p className="section-eyebrow">
              Stay Your Way
            </p>

            <h2>
              A Comfortable Stay
              <span>Inside the Resort.</span>
            </h2>
          </div>

          <div className="accommodation-intro-right">
            <p>
              Whether you are attending a wedding, planning a family
              getaway or visiting with a group, Sai Farms lets you stay
              close to every experience in one destination.
            </p>
          </div>

        </div>

        <div className="container accommodation-stats">

          <div>
            <strong>Stay</strong>
            <span>Inside the Resort</span>
          </div>

          <div>
            <strong>Family</strong>
            <span>Friendly Rooms</span>
          </div>

          <div>
            <strong>Group</strong>
            <span>Accommodation</span>
          </div>

          <div>
            <strong>Relax</strong>
            <span>After Every Experience</span>
          </div>

        </div>
      </section>

      {/* ROOMS */}
      <section
        id="rooms"
        className="accommodation-rooms-section"
      >
        <div className="container">

          <div className="accommodation-rooms-header">

            <div>
              <p className="section-eyebrow">
                Explore Accommodation
              </p>

              <h2>
                Spaces Made
                <span>for a Comfortable Stay.</span>
              </h2>
            </div>

            <p>
              Browse through the accommodation spaces available
              for couples, families, wedding guests and larger groups.
            </p>

          </div>

          <div className="accommodation-rooms-grid">

            {rooms.map((room) => (
              <article
                className="accommodation-room-card"
                key={room.number}
              >

                <img
                  src={room.image}
                  alt={room.title}
                />

                <div className="accommodation-room-overlay"></div>

                <span className="accommodation-room-number">
                  {room.number}
                </span>

                <div className="accommodation-room-content">
                  <p>Sai Farms Stay</p>

                  <h3>{room.title}</h3>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="accommodation-experience">

        <div className="accommodation-experience-image">

          <img
            src="/images/activities/resort-aerial.jpg"
            alt="Sai Farms resort"
          />

          <div className="accommodation-experience-image-overlay"></div>

          <div className="accommodation-experience-badge">
            <span>Stay</span>
            <strong>Inside</strong>
            <small>the experience</small>
          </div>

        </div>

        <div className="accommodation-experience-content">

          <p className="section-eyebrow">
            More Than a Room
          </p>

          <h2>
            Stay Close to
            <span>Everything You Came For.</span>
          </h2>

          <p className="accommodation-experience-intro">
            From celebrations and family time to activities and
            quiet resort moments, your accommodation keeps you
            connected to the complete Sai Farms experience.
          </p>

          <div className="accommodation-highlights">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="accommodation-highlight"
                  key={item.title}
                >

                  <div className="accommodation-highlight-icon">
                    <Icon size={21} strokeWidth={1.4} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="accommodation-cta">

        <img
          src="/images/activities/riverside-view.jpg"
          alt="Sai Farms riverside resort"
          className="accommodation-cta-image"
        />

        <div className="accommodation-cta-overlay"></div>

        <div className="accommodation-cta-content">

          <div className="accommodation-cta-location">
            <MapPin size={15} />
            <span>Badlapur · Maharashtra</span>
          </div>

          <p className="accommodation-cta-eyebrow">
            Your Stay Awaits
          </p>

          <h2>
            Stay Comfortable.
            <span>Experience Sai Farms.</span>
          </h2>

          <p>
            Plan your stay for a wedding, family getaway,
            corporate visit or complete resort experience.
          </p>

          <div className="accommodation-cta-actions">

            <Link
              to="/contact"
              className="accommodation-cta-primary"
            >
              Book Your Stay
              <ArrowRight size={17} />
            </Link>

            <a
              href="tel:+918888867575"
              className="accommodation-cta-secondary"
            >
              <Phone size={15} />
              888 886 7575
            </a>

          </div>

        </div>

      </section>
    </>
  );
}

export default Accommodation;
