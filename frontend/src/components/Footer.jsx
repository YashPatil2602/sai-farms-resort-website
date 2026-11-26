import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
            aria-label="Sai Farms home"
          >
            <img
              src="/images/branding/sai-farms-logo-white.png"
              alt="Sai Farms - Sainath Shete Resort"
            />
          </Link>


          <p className="footer-description">
            An eight-acre riverside resort near
            Badlapur for weddings, staycations,
            corporate events, picnics and memorable
            group experiences.
          </p>


          <Link
            to="/contact"
            className="footer-enquire-btn"
          >
            Plan Your Experience
          </Link>

        </div>


        <div className="footer-column">

          <p className="footer-column-title">
            Experiences
          </p>

          <Link to="/destination-wedding">
            Weddings & Events
          </Link>

          <Link to="/staycation-corporate">
            Staycation
          </Link>

          <Link to="/corporate-events">
            Corporate Events
          </Link>

          <Link to="/school-picnic">
            Picnics
          </Link>

        </div>


        <div className="footer-column">

          <p className="footer-column-title">
            Explore
          </p>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
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
            888 886 7575
          </a>

          <a
            href="tel:+918237637273"
            className="footer-contact-item"
          >
            823 763 7273
          </a>


          <div className="footer-contact-item">
            Sai Farms
            <br />
            Sainath Shete Resort
            <br />
            Near Barvi Dam Road
            <br />
            Padirpada, Badlapur - 421503
          </div>


          {/*
            GST number will be inserted here
            only after client supplies the
            actual GST number.
          */}

        </div>

      </div>


      <div className="footer-bottom">
        © {new Date().getFullYear()}
        {" "}
        Sai Farms · Sainath Shete Resort
      </div>

    </footer>
  );
}

export default Footer;
