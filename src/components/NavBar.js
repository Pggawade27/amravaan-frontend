"use client";

import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

const brandLogo = "/assets/logo/brand-logo.png";

const navLinks = [
    { href: "#shop", label: "Shop" },
    { href: "#why-us", label: "Why Us" },
    { href: "#identify", label: "Identify" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function NavBar() {
    const [activeLink, setActiveLink] = useState("#shop");
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (href) => {
        setActiveLink(href);
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);

            const sections = [
                { id: "why-us", href: "#why-us" },
                { id: "identify", href: "#identify" },
                { id: "about", href: "#about" },
                { id: "contact", href: "#contact" },
            ];

            for (let section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveLink(section.href);
                        return;
                    }
                }
            }

            if (scrollTop < 100) {
                setActiveLink("#shop");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
                <div className={`${styles.container} ${styles.navContent}`}>
                    <img className={styles.logo} src={brandLogo} alt="Amravaan – Devgad Alphonso Mangoes" />

                    <div className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                className={activeLink === link.href ? styles.active : ""}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        type="button"
                    >
                        <span className={styles.hamburgerBar} />
                        <span className={styles.hamburgerBar} />
                        <span className={styles.hamburgerBar} />
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div
                    className={styles.mobileOverlay}
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <div className={styles.mobileMenuHeader}>
                    <img className={styles.mobileLogo} src={brandLogo} alt="Amravaan" />
                    <button
                        className={styles.closeBtn}
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        type="button"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <nav aria-label="Mobile navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className={`${styles.mobileNavLink} ${activeLink === link.href ? styles.mobileActive : ""}`}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
