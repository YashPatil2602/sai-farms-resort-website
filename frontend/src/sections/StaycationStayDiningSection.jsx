import { Link } from "react-router-dom";
import { ArrowRight, BedDouble, UtensilsCrossed } from "lucide-react";
import "../styles/staycation-stay-dining.css";

function StaycationStayDiningSection() {
  return (
    <section className="stay-dining-section">
      <div className="container stay-dining-grid">

        <div className="stay-dining-content">
          <p className="section-eyebrow">
            Stay · Eat · Relax
          </p>

          <h2>
            Comfortable Stays.
            <span>Memorable Meals.</span>
          </h2>

          <p className="stay-dining-intro">
            Slow down after a full day of activities with comfortable
            accommodation and relaxed dining experiences inside the resort.
          </p>

          <div className="stay-dining-features">
            <div>
              <BedDouble size={21} strokeWidth={1.4} />

              <div>
                <strong>Comfortable Accommodation</strong>
                <span>
                  Rooms and group stay options for families,
                  friends and corporate teams.
                </span>
              </div>
            </div>

            <div>
              <UtensilsCrossed size={21} strokeWidth={1.4} />

              <div>
                <strong>Meals Throughout Your Stay</strong>
                <span>
                  Enjoy breakfast, lunch, refreshments
                  and dinner during your resort experience.
                </span>
              </div>
            </div>
          </div>

          <div className="stay-dining-actions">
            <Link to="/accommodation" className="stay-dining-primary">
              Explore Rooms
              <ArrowRight size={16} />
            </Link>

            <Link to="/contact" className="stay-dining-secondary">
              Plan Your Stay
            </Link>
          </div>
        </div>

        <div className="stay-dining-gallery">

          <div className="stay-dining-room">
            <img
              src="/images/accommodation/room-01.jpg"
              alt="Sai Farms room"
            />

            <div className="stay-dining-label">
              <span>Stay</span>
              <strong>Comfortable Rooms</strong>
            </div>
          </div>

          <div className="stay-dining-food">
            <img
              src="/images/food/breakfast.jpg"
              alt="Sai Farms dining"
            />

            <div className="stay-dining-label">
              <span>Dining</span>
              <strong>Fresh Meals</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default StaycationStayDiningSection;
