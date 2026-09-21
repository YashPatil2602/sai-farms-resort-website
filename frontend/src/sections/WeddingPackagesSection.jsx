import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Users } from "lucide-react";
import "../styles/wedding-packages.css";

const packages = [
  {
    title: "Day Program",
    duration: "7:00 AM – 4:00 PM",
    price: "₹1,99,999",
    guests: "Up to 100 guests",
    note: "Breakfast, wedding lunch, preferred venue and accommodation.",
  },
  {
    title: "24 Hour Wedding",
    duration: "24 Hours",
    price: "₹2,99,999",
    guests: "Up to 100 guests",
    note: "Stay, hi-tea, dinner, breakfast, wedding lunch and accommodation.",
  },
  {
    title: "30 Hour Wedding",
    duration: "30 Hours",
    price: "₹4,49,999",
    guests: "Up to 100 guests",
    note: "Extended celebration with stay, meals and wedding functions.",
  },
  {
    title: "36 Hour Wedding",
    duration: "36 Hours",
    price: "₹9,99,999",
    guests: "Up to 200 guests",
    note: "A complete multi-day wedding experience with all 5 venues.",
  },
];

function WeddingPackagesSection() {
  return (
    <section className="wedding-packages-section">
      <div className="container">

        <div className="wedding-packages-header">
          <div>
            <p className="section-eyebrow">
              Wedding Packages
            </p>

            <h2>
              Choose Your
              <span>Celebration Experience.</span>
            </h2>
          </div>

          <p>
            From a beautiful day wedding to a complete multi-day
            destination celebration, choose a package that suits
            your guest count and wedding plan.
          </p>
        </div>

        <div className="wedding-packages-grid">
          {packages.map((item, index) => (
            <article className="wedding-package-card" key={item.title}>

              <span className="package-number">
                0{index + 1}
              </span>

              <h3>{item.title}</h3>

              <div className="package-meta">
                <span>
                  <Clock3 size={15} />
                  {item.duration}
                </span>

                <span>
                  <Users size={15} />
                  {item.guests}
                </span>
              </div>

              <p className="package-from">
                Starting From
              </p>

              <strong className="package-price">
                {item.price}
              </strong>

              <p className="package-note">
                {item.note}
              </p>

              <Link to="/contact" className="package-link">
                Enquire Now
                <ArrowRight size={16} />
              </Link>

            </article>
          ))}
        </div>

        <p className="package-disclaimer">
          Final inclusions, guest count, décor and venue allocation
          are confirmed as per the booking quotation.
        </p>

      </div>
    </section>
  );
}

export default WeddingPackagesSection;
