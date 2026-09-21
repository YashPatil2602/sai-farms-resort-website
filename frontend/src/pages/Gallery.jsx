import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2 } from "lucide-react";
import "../styles/gallery.css";

const galleryItems = [
  {
    id: 1,
    category: "Weddings",
    title: "Riverside Amphitheatre",
    image: "/images/venues/riverside-amphitheatre.jpg",
  },
  {
    id: 2,
    category: "Weddings",
    title: "Poolside Celebration",
    image: "/images/venues/poolside.jpg",
  },
  {
    id: 3,
    category: "Weddings",
    title: "Grand Lawn",
    image: "/images/venues/grand-lawn.jpg",
  },
  {
    id: 4,
    category: "Weddings",
    title: "Bottle Palm Lawn",
    image: "/images/venues/bottle-palm-lawn.jpg",
  },
  {
    id: 5,
    category: "Weddings",
    title: "Royal Lawn",
    image: "/images/venues/royal-lawn.jpg",
  },
  {
    id: 6,
    category: "Stay",
    title: "Comfortable Room",
    image: "/images/accommodation/room-01.jpg",
  },
  {
    id: 7,
    category: "Stay",
    title: "Guest Room",
    image: "/images/accommodation/room-02.jpg",
  },
  {
    id: 8,
    category: "Stay",
    title: "Group Accommodation",
    image: "/images/accommodation/room-04-dormitory.jpg",
  },
  {
    id: 9,
    category: "Activities",
    title: "Swimming Pool",
    image: "/images/activities/swimming-pool.jpg",
  },
  {
    id: 10,
    category: "Activities",
    title: "Rain Dance",
    image: "/images/activities/rain-dance.jpg",
  },
  {
    id: 11,
    category: "Activities",
    title: "School Water Park",
    image: "/images/activities/school-water-park.jpg",
  },
  {
    id: 12,
    category: "Activities",
    title: "Open Green Spaces",
    image: "/images/activities/open-lawn.jpg",
  },
  {
    id: 13,
    category: "Resort",
    title: "Sai Farms from Above",
    image: "/images/activities/resort-aerial.jpg",
  },
  {
    id: 14,
    category: "Resort",
    title: "Riverside Experience",
    image: "/images/activities/riverside-view.jpg",
  },
  {
    id: 15,
    category: "Dining",
    title: "Fresh Dining",
    image: "/images/food/breakfast.jpg",
  },
];

const categories = [
  "All",
  "Weddings",
  "Stay",
  "Activities",
  "Resort",
  "Dining",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">
          <p className="gallery-eyebrow">
            Sai Farms Gallery
          </p>

          <h1>
            Moments.
            <span>Spaces. Experiences.</span>
          </h1>

          <p>
            Explore weddings, stays, activities, dining and
            the natural surroundings that make every visit
            to Sai Farms memorable.
          </p>

          <a href="#gallery-grid" className="gallery-hero-btn">
            Explore Gallery
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section
        id="gallery-grid"
        className="gallery-section"
      >
        <div className="container">

          <div className="gallery-heading">
            <div>
              <p className="section-eyebrow">
                Discover Sai Farms
              </p>

              <h2>
                A Glimpse of
                <span>Every Experience.</span>
              </h2>
            </div>

            <p>
              Browse through celebrations, rooms,
              resort activities, dining and peaceful
              spaces across Sai Farms.
            </p>
          </div>

          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <article
                className={`gallery-card gallery-card-${
                  (index % 6) + 1
                }`}
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-card-overlay"></div>

                <div className="gallery-card-icon">
                  <Maximize2
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="gallery-card-content">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="gallery-cta">
        <img
          src="/images/activities/riverside-view.jpg"
          alt="Sai Farms"
          className="gallery-cta-image"
        />

        <div className="gallery-cta-overlay"></div>

        <div className="gallery-cta-content">
          <p className="gallery-cta-eyebrow">
            Experience It Yourself
          </p>

          <h2>
            Pictures Tell a Story.
            <span>Your Experience Comes Next.</span>
          </h2>

          <p>
            Plan your wedding, staycation,
            corporate gathering or day experience
            at Sai Farms.
          </p>

          <Link
            to="/contact"
            className="gallery-cta-btn"
          >
            Plan Your Visit
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Gallery;
