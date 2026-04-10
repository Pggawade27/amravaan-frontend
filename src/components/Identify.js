import styles from "./Identify.module.css";

const mangoCompare = "/assets/png/mango-comparison.png";

const chemicalTraits = [
    { number: "1", text: "These mangoes show uniformly yellow colour." },
    { number: "2", text: "Look & feel hard. They aren't ripened, its a biochemical reaction." },
    { number: "3", text: "Hard on your nose when you smell it. Non aromatic smell." },
    { number: "4", text: "Wrinkled, yet green, means they were harvested immature." },
];

const alphonsoTraits = [
    { number: "1", text: "This Mangoes show gradients in yellows & green color." },
    { number: "2", text: "Look and feel soft if they are naturally ripened in grass hay." },
    { number: "3", text: "The sweet, strong fragrance of Alphonso noticable from distance." },
    { number: "4", text: "Should not show wrinkles. If they are over ripe, they show wrinkles." },
];

export default function Identify() {
    return (
        <section id="identify" className={styles.section}>
            <div className={styles.comparisonGrid}>
                {/* Left: Chemical */}
                <div className={styles.leftCol}>
                    <h2 className={styles.leftHeading}>Chemically Ripened Mango</h2>
                    <div className={styles.cardList}>
                        {chemicalTraits.map((item) => (
                            <div className={styles.cardLeft} key={item.number}>
                                <p className={styles.cardText}>{item.text}</p>
                                <div className={styles.badgeLeft}>{item.number}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center: Mango Image */}
                <div className={styles.centerCol}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={mangoCompare}
                            alt="Mango Comparison"
                            className={styles.mangoImg}
                        />
                    </div>
                </div>

                {/* Right: Alphonso */}
                <div className={styles.rightCol}>
                    <h2 className={styles.rightHeading}>Original Alphonso Mango</h2>
                    <div className={styles.cardList}>
                        {alphonsoTraits.map((item) => (
                            <div className={styles.cardRight} key={item.number}>
                                <div className={styles.badgeRight}>{item.number}</div>
                                <p className={styles.cardTextRight}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}