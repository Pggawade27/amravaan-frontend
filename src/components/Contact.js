import styles from "./Contact.module.css";

const contactMethods = [
    { icon: "call", label: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: "forum", label: "Chat on WhatsApp", href: "#" },
    { icon: "location_on", label: "Devgad, Konkan Coast, Maharashtra", href: "#" },
];

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.contactContainer}>
                    <div className={styles.contactInfoPanel}>
                        <h2 className="font-headline">Connect with the Farm</h2>
                        <p className={styles.contactPara}>Have questions about bulk orders or gift boxes? We&apos;re just a message away.</p>
                        <div className={styles.contactMethods}>
                            {contactMethods.map((method) => (
                                <a key={method.label} className={styles.contactMethod} href={method.href}>
                                    <div className={styles.iconCircle}>
                                        <span className="material-symbols-outlined">{method.icon}</span>
                                    </div>
                                    <span>{method.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.contactFormPanel}>
                        <form>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input id="name" type="text" placeholder="John Doe" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input id="phone" type="tel" placeholder="9876543210" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="4" placeholder="How can we help you today?" />
                            </div>
                            <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
