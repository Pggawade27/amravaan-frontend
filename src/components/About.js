import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.identifyGrid}>
          <div>
            <h2 className="font-headline">Tradition Rooted in Soil</h2>
            <p>Founded by three generations of farmers, The Orchard is our heritage. We cultivate over 5,000 trees with natural methods.</p>
            <p>Our mission is simple: preserve Alphonso integrity while giving customers a truly royal, chemical-free taste.</p>
            <div className={styles.statsGrid}>
              <div>
                <p className="font-headline">35+</p>
                <p className={styles.statLabel}>Years of Legacy</p>
              </div>
              <div>
                <p className="font-headline">15k+</p>
                <p className={styles.statLabel}>Happy Families</p>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.roundedImg}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA__heJuXNh9Wm7_7dKeFZm5GHnCo9xtye87LjU4W9Z9dXtUf_NzaXQ5-elARyxOdK4k12YDWA0oVi5D1KYZRNmT5m5wRDvornIiyOLZ_wvAO3E9N3p_YJ6zOIcAqgEj491dWKRt5xjnwq845vtH-Aea17m_gYPxJSD0FHKY13ynSDLau2EM3vp_blfozKnbc1rKQaf3TGbGcZvGd-KaG3tlihG0_HQSC8Lj56xMc24SRYu1vHjk1YRyAvvrXqt0Iw6tN7HAvn1eDbl"
              alt="Orchard Farm"
            />
            <div className={styles.badge}>GI-Tagged Authentic Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}
