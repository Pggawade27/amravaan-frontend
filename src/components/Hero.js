import styles from "./Hero.module.css";

const mangoesImg = "/assets/png/mangoes.png";

export default function Hero() {
    return (
        <section id="shop" className={styles.hero} aria-label="Amravaan – Premium Devgad Alphonso Mangoes">
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
                            <a className={`${styles.btn} ${styles.btnPrimary}`} href="https://wa.me/9284533557" target="_blank">Order Now</a>
                            <a className={`${styles.btn} ${styles.btnOutline}`} href="#about">Explore Our Legacy</a>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src={mangoesImg}
                            alt="Fresh Devgad Alphonso Hapus Mangoes – Amravaan"
                            className={styles.heroImage}
                            width="600"
                            height="600"
                        />
                        <div className={styles.floatingBadge}>
                            <div className={styles.floatingIcon}>
                                <span className="material-symbols-outlined" aria-hidden="true">eco</span>
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
