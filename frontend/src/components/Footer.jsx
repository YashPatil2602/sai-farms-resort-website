import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container footer-top">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>SAI FARMS</span>
            <small>RESORT & EXPERIENCES</small>
          </Link>

          <p>
            One beautiful resort for destination weddings,
            peaceful stays, corporate gatherings,
            school picnics and memorable day experiences.
          </p>

          <Link to="/contact" className="footer-enquire-btn">
            Plan Your Experience
            <ArrowUpRight size={16} />
          </Link>

        </div>

        <div className="footer-column">
          <p className="footer-column-title">
            Experiences
          </p>

          <Link to="/destination-wedding">
            Destination Weddings
          </Link>

          <Link to="/staycation-corporate">
            Staycation & Corporate
          </Link>

          <Link to="/school-picnic">
            School Picnic
          </Link>

          <Link to="/accommodation">
            Accommodation
          </Link>
        </div>

        <div className="footer-column">
          <p className="footer-column-title">
            Explore
          </p>

          <Link to="/">
            Home
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/contact">
            Book Now
          </Link>
        </div>

        <div className="footer-contact">

          <p className="footer-column-title">
            Contact
          </p>

          <a
            href="tel:+918888867575"
            className="footer-contact-item"
          >
            <Phone size={17} strokeWidth={1.4} />

            <span>
              888 886 7575
            </span>
          </a>

          <a
            href="https://wa.me/918888867575"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-item"
          >
            <MessageCircle
              size={17}
              strokeWidth={1.4}
            />

            <span>
              WhatsApp Sai Farms
            </span>
          </a>

          <div className="footer-contact-item">
            <MapPin size={17} strokeWidth={1.4} />

            <span>
              Badlapur, Maharashtra
            </span>
          </div>

        </div>

      </div>

      <div className="container footer-divider"></div>

      <div className="container footer-bottom">

        <p>
          © {new Date().getFullYear()} Sai Farms.
          All rights reserved.
        </p>

        <p>
          Resort · Weddings · Stays · Experiences
        </p>

      </div>

    </footer>
  );
}

export default Footer;
