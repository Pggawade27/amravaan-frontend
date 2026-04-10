import styles from "./Testimonials.module.css";

const reviews = [
    {
        name: "Animesh Shah",
        location: "Mumbai, MH",
        text: "The aroma of these mangoes filled my entire apartment. They are perfectly sweet and nostalgic.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsgYcvoggFtTBvkU3DHd9KcmOil6VAzQIVlzba6C37pB7Uei9zBjcVbJ7EQgiw1d3ID-T9RczAc5n2DDAUKPOtqDEA3lO36L78s4oIeC-g6skUBAjkHZ8cL1zVVutDjzIo3XgS-_R9IPRxGMdGvz2b-7q6QV_t2R3ClKalCCzwqZil-By_xphIddFB69x31gJvE0eBfyynTflJlGaC0nroet3X4XNtVJmH62fpCUDQaUhMGi5okR64_RIKKs3CzawxKjb7FcaB8e07",
    },
    {
        name: "Priya Kulkarni",
        location: "Pune, MH",
        text: "Quality is consistent, delivery is prompt, and taste is unlike market mangoes.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHH7XHT7pt--ZRq4I9y_gEtr3PE9EeWVdLyR4YVBW6ePKu3AT82bSQL_7Zu-KnMyyEB0E_YbhUYCBD3X7CX38JYrViMyOnTqzdQp216XAJa9YbhULN0SKOBpdEGEjiUnxGCED5vLyN7VzCwnYyNcH5e8WqlENGhEELN73nWDtiF1tU7m8b1Rd_vIa_PsFqcmsMQpn1Dyr39ghAI8ud1UtXfFVIPun0RUs4E54bSt-G6pbXySwvZroayYqNmbQjX9AzESgunvNSaZPV",
    },
];

export default function Testimonials() {
    return (
        <section className={`${styles.section} ${styles.bgLow}`}>
            <div className="container">
                <div className={`${styles.textCenter} ${styles.mb64}`}>
                    <h2 className="font-headline">Word from the Orchards</h2>
                </div>
                <div className={styles.slider}>
                    {reviews.map((review) => (
                        <article key={review.name} className={styles.card}>
                            <div className={styles.stars} aria-label="5 stars">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <span key={idx} className="material-symbols-outlined">star</span>
                                ))}
                            </div>
                            <p className={styles.reviewText}>{review.text}</p>
                            <div className={styles.reviewer}>
                                <img className={styles.reviewerImg} src={review.image} alt={review.name} />
                                <div>
                                    <h4>{review.name}</h4>
                                    <p>{review.location}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
