import { Link } from "react-router-dom";

const venues = [
  {
    title: "Grand Lawn",
    image: "/images/venues/grand-lawn.jpg",
    text:
      "A spacious outdoor setting for company celebrations, team gatherings and large-format events.",
  },
  {
    title: "Bottle Palm Lawn",
    image: "/images/venues/bottle-palm-lawn.jpg",
    text:
      "A relaxed green venue for team activities, networking and corporate get-togethers.",
  },
  {
    title: "Open Amphitheatre",
    image:
      "/images/venues/riverside-amphitheatre.jpg",
    text:
      "An open-air setting for presentations, performances, celebrations and group experiences.",
  },
];

function CorporateEvents() {
  return (
    <main className="corporate-page">

      <section className="corporate-hero">

        <img
          src="/images/activities/resort-aerial.jpg"
          alt="Sai Farms resort"
        />

        <div className="corporate-overlay" />


        <div className="corporate-hero-content">

          <span className="client-kicker">
            Corporate Events at Sai Farms
          </span>

          <h1>
            Work, Connect and Celebrate
            in One Destination
          </h1>

          <p>
            Bring your team together at an
            eight-acre riverside resort with
            open lawns, activity spaces,
            dining and accommodation.
          </p>

          <Link
            to="/contact"
            className="client-primary-button"
          >
            Plan Your Corporate Event
          </Link>

        </div>

      </section>


      <section className="corporate-intro">

        <span className="client-kicker">
          Spaces for teams
        </span>

        <h2>
          Corporate Gatherings
          with Room to Breathe
        </h2>

        <p>
          From team outings and off-sites
          to company celebrations and group
          activities, Sai Farms brings the
          complete experience together at
          one property.
        </p>

      </section>


      <section className="corporate-grid">

        {venues.map((venue) => (

          <article
            className="corporate-card"
            key={venue.title}
          >

            <div className="corporate-card-image">

              <img
                src={venue.image}
                alt={venue.title}
              />

              <span className="actual-image-label">
                Actual Image
              </span>

            </div>


            <div className="corporate-card-content">

              <h3>
                {venue.title}
              </h3>

              <p>
                {venue.text}
              </p>

            </div>

          </article>

        ))}

      </section>


      <section className="corporate-cta">

        <h2>
          Planning a Team Day,
          Off-site or Company Event?
        </h2>

        <p>
          Tell us your group size and preferred
          date. We will help you plan the venue,
          meals, activities and stay.
        </p>

        <Link
          to="/contact"
          className="client-primary-button"
        >
          Enquire Now
        </Link>

      </section>

    </main>
  );
}

export default CorporateEvents;
