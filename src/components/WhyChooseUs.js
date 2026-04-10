import styles from "./WhyChooseUs.module.css";

const features = [
  { icon: "sunny", title: "Naturally Ripened", text: "No calcium carbide or ripening agents. We let time and sunlight do the magic." },
  { icon: "agriculture", title: "Direct From Farmers", text: "Sourced straight from Devgad orchards, ensuring fair prices and freshness." },
  { icon: "health_and_safety", title: "No Chemicals", text: "Chemical-free processing and packaging keeps natural flavor intact." },
  { icon: "verified", title: "Premium Quality", text: "Each mango is manually inspected for size, texture, and aroma." },
  { icon: "local_shipping", title: "Fast Delivery", text: "Delivery within 24-48 hours across major cities." },
  { icon: "volunteer_activism", title: "Trusted Legacy", text: "Serving mango connoisseurs for over three decades with consistency." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={`${styles.section} ${styles.bgLow}`}>
      <div className="container">
        <div className={`${styles.textCenter} ${styles.mb64}`}>
          <h2 className="font-headline">Pure Excellence in Every Bite</h2>
          <p>We maintain the highest standards of quality from the blossom until the fruit reaches you.</p>
        </div>
        <div className={styles.grid3}>
          {features.map((f) => (
            <article className={styles.featureCard} key={f.title}>
              <span className="material-symbols-outlined" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
