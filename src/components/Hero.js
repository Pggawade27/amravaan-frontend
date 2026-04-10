import styles from "./Hero.module.css";

const mangoesImg = "/assets/png/mangoes.png";

export default function Hero() {
    return (
        <section id="shop" className={styles.hero}>
            <div className="container">
                <div className={styles.heroGrid}>
                    <div>
                        <span className={styles.badge}>Handpicked from Devgad</span>
                        <h1 className="font-headline">Farm Fresh Devgad Alphonso Mangoes Delivered to Your Doorstep</h1>
                        <p className={styles.heroText}>
                            Experience the authentic sweetness of naturally ripened GI-Tagged Devgad Hapus,
                            sourced directly from our sun-drenched estates to your dining table.
                        </p>
                        <div className={styles.btnGroup}>
                            <a className={`${styles.btn} ${styles.btnPrimary}`} href="#shop">Order Now</a>
                            <a className={`${styles.btn} ${styles.btnOutline}`} href="#about">Explore Our Legacy</a>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src={mangoesImg}
                            alt="Alphonso Mangoes"
                            className={styles.heroImage}
                        />
                        <div className={styles.floatingBadge}>
                            <div className={styles.floatingIcon}>
                                <span className="material-symbols-outlined">eco</span>
                            </div>
                            <div>
                                <p className={styles.floatingTitle}>100% Organic</p>
                                <p className={styles.floatingSubtitle}>Naturally Ripened Process</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
