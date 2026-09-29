import { useRef, useState } from "react";
import { Play } from "lucide-react";
import "../styles/video-showcase.css";

const videos = [
  {
    title: "The Sai Farms Experience",
    subtitle: "Resort Highlight",
    video: "/videos/resort-highlight.mp4",
    poster: "/videos/posters/resort-highlight.jpg",
    className: "video-showcase-featured",
  },
  {
    title: "A Glimpse of the Resort",
    subtitle: "Cinematic Teaser",
    video: "/videos/resort-teaser.mp4",
    poster: "/videos/posters/resort-teaser.jpg",
    className: "",
  },
  {
    title: "Moments at Sai Farms",
    subtitle: "Experience Reel",
    video: "/videos/resort-reel.mp4",
    poster: "/videos/posters/resort-reel.jpg",
    className: "",
  },
];

function VideoShowcaseSection() {
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
    <section className="video-showcase-section">
      <div className="container">
        <div className="video-showcase-header">
          <div>
            <p className="video-showcase-eyebrow">
              Sai Farms · In Motion
            </p>

            <h2>
              More Than a Resort.
              <span>An Experience to Remember.</span>
            </h2>
          </div>

          <p className="video-showcase-intro">
            From celebrations and peaceful stays to unforgettable
            group experiences, discover the moments that make
            Sai Farms special.
          </p>
        </div>

        <div className="video-showcase-grid">
          {videos.map((item, index) => (
            <article
              className={`video-showcase-card ${item.className}`}
              key={item.title}
            >
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                controls={Boolean(startedVideos[index])}
                playsInline
                preload="metadata"
                poster={item.poster}
              >
                <source src={item.video} type="video/mp4" />
              </video>

              {!startedVideos[index] && (
                <button
                  type="button"
                  className="video-showcase-play"
                  onClick={() => playVideo(index)}
                  aria-label={`Play ${item.title}`}
                >
                  <Play size={28} fill="currentColor" />
                </button>
              )}

              <div className="video-showcase-content">
                <p>{item.subtitle}</p>
                <h3>{item.title}</h3>

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

export default VideoShowcaseSection;
