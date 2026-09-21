import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styles/wedding-moments.css";

const moments = [
  "Engagement",
  "Mehendi",
  "Haldi",
  "Sangeet",
  "Shaadi",
  "Reception",
];

function WeddingMomentsSection() {
  return (
    <section className="wedding-moments-section">

      <div className="wedding-moments-image">
        <img
          src="/images/venues/grand-lawn.jpg"
          alt="Wedding celebration at Sai Farms"
        />

        <div className="wedding-moments-overlay"></div>
      </div>

      <div className="wedding-moments-content">

        <p className="section-eyebrow">
          Every Wedding Moment
        </p>

        <h2>
          Perfect for Every
          <span>Celebration.</span>
        </h2>

        <p className="wedding-moments-intro">
          From the first celebration to the final reception,
          Sai Farms gives every wedding function its own beautiful setting.
        </p>

        <div className="wedding-moments-list">
          {moments.map((moment, index) => (
            <div className="wedding-moment" key={moment}>
              <span>0{index + 1}</span>
              <strong>{moment}</strong>
            </div>
          ))}
        </div>

        <Link to="/contact" className="wedding-moments-btn">
          Plan Your Wedding
          <ArrowRight size={17} />
        </Link>

      </div>

    </section>
  );
}

export default WeddingMomentsSection;
