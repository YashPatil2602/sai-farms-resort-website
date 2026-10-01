import { useRef, useState } from "react";
import { Play } from "lucide-react";
import "../styles/wedding-stories.css";

const weddingStories = [
  {
    label: "Cinematic Wedding Film",
    title: "Nikhil & Ankita",
    video: "/videos/wedding-cinematic-teaser.mp4",
    poster: "/videos/posters/wedding-cinematic-teaser.jpg",
    featured: true,
  },
  {
    label: "Wedding Story",
    title: "A Story of Two",
    video: "/videos/nikhil-ankita-wedding-story.mp4",
    poster: "/videos/posters/nikhil-ankita-wedding-story.jpg",
  },
  {
    label: "Celebration",
    title: "Sangeet Moments",
    video: "/videos/sangeet-celebration.mp4",
    poster: "/videos/posters/sangeet-celebration.jpg",
  },
];

function WeddingStoriesSection() {
  const videoRefs = useRef([]);
  const [startedVideos, setStartedVideos] = useState({});

  const playVideo = (index) => {
    const video = videoRefs.current[index];

    setStartedVideos((prev) => ({
      ...prev,
      [index]: true,
    }));

    if (video) {
      video.play();
    }
  };

  return (
    <section className="wedding-stories-section">
      <div className="wedding-stories-inner">

        <div className="wedding-stories-heading">
          <p className="wedding-stories-eyebrow">
            Wedding Stories · In Motion
          </p>

          <h2>
            Moments That
            <span>Stay Forever.</span>
          </h2>

          <p className="wedding-stories-description">
            A glimpse into the emotions, celebrations, music and
            unforgettable moments that make every wedding truly personal.
          </p>
        </div>

        <div className="wedding-stories-grid">
          {weddingStories.map((story, index) => (
            <article
              key={story.title}
              className={`wedding-story-card ${
                story.featured ? "wedding-story-featured" : ""
              }`}
            >
              <div className="wedding-story-media">
                <video
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  controls={Boolean(startedVideos[index])}
                  playsInline
                  preload="metadata"
                  poster={story.poster}
                >
                  <source
                    src={story.video}
                    type="video/mp4"
                  />
                </video>

                {!startedVideos[index] && (
                  <button
                    type="button"
                    className="wedding-story-play"
                    onClick={() => playVideo(index)}
                    aria-label={`Play ${story.title}`}
                  >
                    <Play size={28} fill="currentColor" />
                  </button>
                )}
              </div>

              <div className="wedding-story-caption">
                <p>{story.label}</p>
                <h3>{story.title}</h3>

                {!startedVideos[index] && (
                  <span>Watch Film</span>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WeddingStoriesSection;
