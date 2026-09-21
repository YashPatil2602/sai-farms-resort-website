import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styles/wedding-stay.css";

function WeddingStaySection() {
  return (
    <section className="wedding-stay-section">
      <div className="container wedding-stay-grid">

        <div className="wedding-stay-content">
          <p className="section-eyebrow">
            Stay Together
          </p>

          <h2>
            Your Guests Stay
            <span>Close to the Celebration.</span>
          </h2>

          <p>
            Make your wedding feel like a complete destination experience.
            Sai Farms offers comfortable rooms and group accommodation so
            family and guests can stay together throughout the celebration.
          </p>

          <div className="wedding-stay-features">
            <div>
              <strong>AC</strong>
              <span>Rooms</span>
            </div>

            <div>
              <strong>Group</strong>
              <span>Accommodation</span>
            </div>

            <div>
              <strong>Resort</strong>
              <span>Stay Experience</span>
            </div>
          </div>

          <Link to="/accommodation" className="wedding-stay-btn">
            Explore Accommodation
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="wedding-stay-gallery">

          <div className="stay-image stay-image-main">
            <img
              src="/images/accommodation/room-01.jpg"
              alt="Sai Farms accommodation"
            />
          </div>

          <div className="stay-image">
            <img
              src="/images/accommodation/room-03.jpg"
              alt="Sai Farms room"
            />
          </div>

          <div className="stay-image">
            <img
              src="/images/accommodation/room-04-dormitory.jpg"
              alt="Sai Farms dormitory"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default WeddingStaySection;
