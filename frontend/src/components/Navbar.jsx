import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-main">SAI FARMS</span>
          <span className="logo-sub">RESORT & EXPERIENCES</span>
        </Link>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/destination-wedding" onClick={closeMenu}>
            Weddings
          </Link>
          <Link to="/staycation-corporate" onClick={closeMenu}>
            Staycation & Corporate
          </Link>
          <Link to="/school-picnic" onClick={closeMenu}>
            School Picnic
          </Link>
          <Link to="/accommodation" onClick={closeMenu}>
            Stay
          </Link>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <a href="tel:+918888867575" className="nav-phone">
            <Phone size={17} />
            <span>888 886 7575</span>
          </a>

          <Link to="/contact" className="book-btn">
            Book Now
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
