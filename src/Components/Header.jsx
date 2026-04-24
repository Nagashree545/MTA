import React, { useState } from 'react';
import styles from '../Styles/Header.module.css';
import logo from "../Assets/logowidth.jpeg";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // 🔥 scroll handler (only works on home page)
    const handleScroll = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 200);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>

                {/* LOGO */}
                <div className={styles.logo}>
                    <img src={logo} alt="Master Traders Academy" />
                    <div className={styles.logoText}>
                        <span className={styles.main}>MASTER TRADERS</span>
                        <span className={styles.sub}>ACADEMY</span>
                    </div>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className={styles.menuToggle}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* NAV LINKS */}
                <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>

                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>

                    <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>

                    <li>
                        <button onClick={() => handleScroll('courses')}>
                            Courses
                        </button>
                    </li>

                    <li>
                        <button onClick={() => handleScroll('why-us')}>
                            Why Us
                        </button>
                    </li>

                    <li>
                        <button onClick={() => handleScroll('blog')}>
                            Blog
                        </button>
                    </li>

                    <li>
                        <button onClick={() => handleScroll('contact')}>
                            Contact
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
