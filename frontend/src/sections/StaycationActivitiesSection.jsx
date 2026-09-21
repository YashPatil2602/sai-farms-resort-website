import "../styles/staycation-activities.css";

const activities = [
  {
    number: "01",
    title: "Swimming Pool",
    image: "/images/activities/swimming-pool.jpg",
    text: "Cool off, relax and enjoy resort time by the pool.",
  },
  {
    number: "02",
    title: "Rain Dance",
    image: "/images/activities/rain-dance.jpg",
    text: "Music, water and energy come together for a fun group experience.",
  },
  {
    number: "03",
    title: "Open Spaces",
    image: "/images/activities/open-lawn.jpg",
    text: "Green lawns and open areas for games, gatherings and slow resort moments.",
  },
];

function StaycationActivitiesSection() {
  return (
    <section className="staycation-activities-section">
      <div className="container">

        <div className="staycation-activities-header">
          <p className="section-eyebrow">
            Resort Experiences
          </p>

          <h2>
            All in
            <span>One Place.</span>
          </h2>

          <p>
            Swim, play, relax or simply enjoy the open surroundings —
            Sai Farms gives every stay a mix of activity and downtime.
          </p>
        </div>

        <div className="staycation-activities-grid">
          {activities.map((activity) => (
            <article
              className="staycation-activity-card"
              key={activity.number}
            >
              <img
                src={activity.image}
                alt={activity.title}
              />

              <div className="staycation-activity-overlay"></div>

              <span className="staycation-activity-number">
                {activity.number}
              </span>

              <div className="staycation-activity-content">
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StaycationActivitiesSection;
