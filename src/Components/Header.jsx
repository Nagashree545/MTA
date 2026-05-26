import React, { useState } from "react";
import styles from "../Styles/Header.module.css";
import logo from "../Assets/logofull.png";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  const toggleCourses = () => setCourseOpen(!courseOpen);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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

        {/* CENTER NAVIGATION */}
        <div className={`${styles.centerNav} ${menuOpen ? styles.active : ""}`}>

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
              <Link
                to="/about"
                onClick={closeMenu}
                className={isActive("/about")}
              >
                About Us
              </Link>
            </li>

            {/* COURSES DROPDOWN */}
            <li className={styles.dropdown}>

              <div
                className={styles.dropdownHeader}
                onClick={toggleCourses}
              >
                <Link to="/courses" onClick={closeMenu}>
                  Courses
                </Link>

                <span
                  className={`${styles.arrow} ${courseOpen ? styles.rotate : ""
                    }`}
                >
                  ▾
                </span>
              </div>

              <ul
                className={`${styles.dropdownMenu} ${courseOpen ? styles.show : ""
                  }`}
              >
                <li>
                  <Link to="/mastertrader" onClick={closeMenu}>
                    Master Trader
                  </Link>
                </li>

              <li>
  <Link to="/masterclass" onClick={closeMenu}>
    <span className={styles.fireText}>
      MasterClass
      <span className={styles.fireIcon}>🔥</span>
    </span>
  </Link>
</li>

                <li>
                  <Link
                    to="/optionmastery"
                    onClick={closeMenu}
                  >
                    Option Mastery
                  </Link>
                </li>

                <li>
                  <Link to="/thebigbull" onClick={closeMenu}>
                    The Big Bull
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/resources"
                onClick={closeMenu}
                className={isActive("/resources")}
              >
                Resources
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                onClick={closeMenu}
                className={isActive("/blog")}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contactpage"
                onClick={closeMenu}
                className={isActive("/contactpage")}
              >
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

        {/* PHONE */}
        <a href="tel:+919663317167" className={styles.phone}>
          📞 +91 9663317167
        </a>

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