import { Link } from "react-router-dom";

const stories = [
  {
    title: "Nikhil & Ankita",
    video:
      "/videos/nikhil-ankita-wedding-story.mp4",
  },
  {
    title: "Wedding Celebration",
    video:
      "/videos/wedding-cinematic-teaser.mp4",
  },
  {
    title: "Sangeet at Sai Farms",
    video:
      "/videos/sangeet-celebration.mp4",
  },
];

function HomeWeddingStories() {
  return (
    <section className="home-wedding-stories">

      <div className="home-wedding-stories-heading">

        <span className="client-kicker">
          Real celebrations at Sai Farms
        </span>

        <h2>
          Moments That Stay Forever
        </h2>

        <p>
          A glimpse of real wedding celebrations
          hosted at Sai Farms.
        </p>

      </div>


      <div className="home-wedding-stories-grid">

        {stories.map((story) => (

          <article
            key={story.video}
            className="home-wedding-story"
          >

            <div className="home-wedding-video">

              <video
                src={story.video}
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />

              <span className="actual-image-label">
                Actual Video
              </span>

            </div>

            <h3>
              {story.title}
            </h3>

          </article>

        ))}

      </div>


      <div className="home-wedding-stories-action">

        <Link
          to="/destination-wedding"
          className="client-primary-button"
        >
          Explore Weddings & Events
        </Link>

      </div>

    </section>
  );
}

export default HomeWeddingStories;
