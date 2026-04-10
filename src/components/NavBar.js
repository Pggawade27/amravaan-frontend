"use client";

import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

const mangoesImg = "/assets/logo/brand-logo.png";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState("#shop");
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNavClick = (href) => {
        setActiveLink(href);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);

            // Check which section is in viewport
            const sections = [
                { id: "why-us", href: "#why-us" },
                { id: "identify", href: "#identify" },
                { id: "about", href: "#about" },
                { id: "contact", href: "#contact" }
            ];

            for (let section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section is in the middle of viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveLink(section.href);
                        return;
                    }
                }
            }

            // If no section is in viewport (at top), keep shop active
            if (scrollTop < 100) {
                setActiveLink("#shop");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`${styles.container} ${styles.navContent}`}>
                {/* <a className={styles.logo} href="#">The Orchard</a> */}
                <img className={styles.logo} src={mangoesImg} alt="Brand Logo" />
                <div className={styles.navLinks}>
                    <a
                        className={activeLink === "#shop" ? styles.active : ""}
                        href="#shop"
                        onClick={() => handleNavClick("#shop")}
                    >
                        Shop
                    </a>
                    <a
                        className={activeLink === "#why-us" ? styles.active : ""}
                        href="#why-us"
                        onClick={() => handleNavClick("#why-us")}
                    >
                        Why Us
                    </a>
                    <a
                        className={activeLink === "#identify" ? styles.active : ""}
                        href="#identify"
                        onClick={() => handleNavClick("#identify")}
                    >
                        Identify
                    </a>
                    <a
                        className={activeLink === "#about" ? styles.active : ""}
                        href="#about"
                        onClick={() => handleNavClick("#about")}
                    >
                        About
                    </a>
                    <a
                        className={activeLink === "#contact" ? styles.active : ""}
                        href="#contact"
                        onClick={() => handleNavClick("#contact")}
                    >
                        Contact
                    </a>
                </div>
                {/* <div className={styles.iconBtnWrapper}>
                    <button className={styles.iconBtn} aria-label="Cart" type="button">
                        <span className="material-symbols-outlined" aria-hidden="true">shopping_cart</span>
                    </button>
                </div> */}
            </div>
        </nav>
    );
}
