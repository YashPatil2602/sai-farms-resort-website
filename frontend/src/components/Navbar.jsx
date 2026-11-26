import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";

const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Weddings & Events",
    path: "/destination-wedding",
  },
  {
    label: "Staycation",
    path: "/staycation-corporate",
  },
  {
    label: "Corporate Events",
    path: "/corporate-events",
  },
  {
    label: "Picnics",
    path: "/school-picnic",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar">

      <div className="navbar-container">

        <NavLink
          to="/"
          className="navbar-logo"
          aria-label="Sai Farms home"
          onClick={closeMenu}
        >
          <img
            src="/images/branding/sai-farms-logo-white.png"
            alt="Sai Farms - Sainath Shete Resort"
          />
        </NavLink>


        <nav
          className="navbar-desktop"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>


        <button
          type="button"
          className="navbar-menu-button"
          aria-label={
            menuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>


      <div
        className={
          `navbar-mobile ${
            menuOpen ? "open" : ""
          }`
        }
      >

        <nav aria-label="Mobile navigation">

          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar-mobile-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}


          <a
            href="tel:+918888867575"
            className="navbar-mobile-call"
            onClick={closeMenu}
          >
            Call 888 886 7575
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
