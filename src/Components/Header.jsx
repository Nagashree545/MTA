import React, { useState } from "react";
import styles from "../Styles/Header.module.css";
import logo from "../Assets/logowidth.jpeg";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = (sectionId) => {
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const offset = 80;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      closeMenu();
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  const isActive = (path) =>
    location.pathname === path ? styles.activeLink : "";

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* LOGO */}
        <div className={styles.logo}>
          <img src={logo} alt="Master Traders Academy" />
        </div>

        {/* OVERLAY */}
        {menuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}

        {/* RIGHT SECTION (MENU DRAWER) */}
        <div className={`${styles.rightSection} ${menuOpen ? styles.active : ""}`}>

          {/* CLOSE BUTTON */}
          <button className={styles.closeBtn} onClick={closeMenu}>
            ✕
          </button>

          {/* NAV LINKS */}
          <ul className={styles.navLinks}>

            <li>
              <Link to="/" onClick={closeMenu} className={isActive("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu} className={isActive("/about")}>
                About
              </Link>
            </li>

            <li>
              <button onClick={() => handleScroll("courses")}>
                Courses
              </button>
            </li>

            <li>
              <button onClick={() => handleScroll("why-us")}>
                Why Us
              </button>
            </li>

            <li>
              <button onClick={() => handleScroll("blog")}>
                Blog
              </button>
            </li>

            <li>
              <button onClick={() => handleScroll("contact")}>
                Contact
              </button>
            </li>

          </ul>

          {/* PHONE */}
          <a href="tel:+919663317167" className={styles.phone}>
            📞 +91 9663317167
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}
