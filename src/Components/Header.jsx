import React, { useState } from 'react';
import styles from '../Styles/Header.module.css';
import logo from "../Assets/logowidth.jpeg"

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="Master Traders Academy" />
                    <div className={styles.logoText}>
                        <span className={styles.main}>MASTER TRADERS</span>
                        <span className={styles.sub}>ACADEMY</span>
                    </div>
                </div>


                <button
                    className={styles.menuToggle}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                    <li>
                        {/* <button onClick={() => scrollToSection('courses')}>
                            Courses
                        </button> */}
                        <button>Home</button>
                    </li>
                    <li>
                        {/* <button onClick={() => scrollToSection('why-us')}>
                            Why Us
                        </button> */}
                        <button>About</button>
                    </li>
                    <li>
                        {/* <button onClick={() => scrollToSection('instructors')}>
                            Instructors
                        </button> */}
                        <button>Courses</button>
                    </li>
                    <li>
                        {/* <button onClick={() => scrollToSection('testimonials')}>
                            Testimonials
                        </button> */}
                        <button>Resources</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('blog')}>
                            Blog
                        </button>
                    </li>
                    {/* <li>
                        <button onClick={() => scrollToSection('pricing')}>
                            Pricing
                        </button>
                    </li> */}
                    <li>
                        <button onClick={() => scrollToSection('contact')}>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
