import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerMain}>
                    <div>
                        <a className={styles.logo} href="https://amravaan.in" aria-label="Amravaan – Home">Amravaan</a>
                        <p>
                            Handpicking the finest flavors of Konkan for mango lovers worldwide since 1989.
                        </p>
                    </div>
                    {/* <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
          </div> */}
                    <div className={styles.socialWrapper}>
                        <a className={styles.socialIcon} href="#" aria-label="Website">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                        <a className={styles.socialIcon} href="https://mail.google.com/mail/?view=cm&to=connect.amravaan@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>© {new Date().getFullYear()} Amravaan. All rights reserved.</p>
                    <p>Designed, Developed & Maintained by Nerith.in</p>
                </div>
            </div>
        </footer>
    );
}
