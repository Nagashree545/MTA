import React, { useState } from "react";
import styles from "../Styles/Header.module.css";
import logo from "../Assets/logofull.png";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // const handleScroll = (sectionId) => {
  //   const scrollToSection = () => {
  //     const element = document.getElementById(sectionId);
  //     if (!element) return;

  //     const offset = 80;
  //     const top =
  //       element.getBoundingClientRect().top + window.pageYOffset - offset;

  //     window.scrollTo({
  //       top,
  //       behavior: "smooth",
  //     });

  //     closeMenu();
  //   };

  //   if (location.pathname !== "/") {
  //     navigate("/");
  //     setTimeout(scrollToSection, 300);
  //   } else {
  //     scrollToSection();
  //   }
  // };

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
                About Us
              </Link>
            </li>

            {/* <li>
             <Link to="/courses" onClick={closeMenu} className={isActive("/courses")}>
                Courses
              </Link>
            </li> */}
            <li className={styles.dropdown}>
  
  {/* Click goes to /courses */}
  <Link 
    to="/courses" 
    className={styles.navLink}
    onClick={closeMenu}
  >
    Courses ▾
  </Link>

  {/* Dropdown */}
  <ul className={styles.dropdownMenu}>
    <li>
      <Link to="/courses/master-trader" onClick={closeMenu}>
        Master Trader
      </Link>
    </li>
    <li>
      <Link to="/courses/masterclass" onClick={closeMenu}>
        MasterClass
      </Link>
    </li>
    <li>
      <Link to="/courses/option-hunter" onClick={closeMenu}>
        Option Hunter
      </Link>
    </li>
    <li>
      <Link to="/courses/bigbull" onClick={closeMenu}>
        The BigBull
      </Link>
    </li>
  </ul>

</li>

            <li>
             <Link to="/resources" onClick={closeMenu} className={isActive("/resources")}>
                Resources
              </Link>
            </li>

            <li>
              <Link to="/blog" onClick={closeMenu} className={isActive("/blog")}>
                Blog
              </Link>
            </li>

            <li>
             <Link to="/contactpage" onClick={closeMenu} className={isActive("/contactpage")}>
                Contact Us
              </Link>
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
