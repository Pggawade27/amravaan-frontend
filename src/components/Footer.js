import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMain}>
          <div>
            <a className={styles.logo} href="#">The Orchard</a>
            <p>
              Handpicking the finest flavors of Konkan for mango lovers worldwide since 1989.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
          </div>
          <div className={styles.socialWrapper}>
            <a className={styles.socialIcon} href="#" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className={styles.socialIcon} href="#" aria-label="Email">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 The Orchard Editorial. All rights reserved. Handpicked from Devgad.</p>
        </div>
      </div>
    </footer>
  );
}
