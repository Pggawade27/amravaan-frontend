"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";
import { BASE_URL } from "@/api/api";

function StarRow({ rating }) {
    return (
        <div className={styles.stars} aria-label={`${rating} stars`}>
            {Array.from({ length: 5 }).map((_, idx) => (
                <span
                    key={idx}
                    className="material-symbols-outlined"
                    style={{
                        fontVariationSettings: idx < rating ? "'FILL' 1" : "'FILL' 0",
                        color: idx < rating ? "var(--primary)" : "var(--outline-variant)",
                        fontSize: "20px",
                    }}
                >
                    star
                </span>
            ))}
        </div>
    );
}

function ReviewCard({ item }) {
    return (
        <article className={styles.card}>
            <div className={styles.reviewerContainer}>
            <div className={styles.reviewer}>
                <div className={styles.reviewerAvatar} aria-hidden="true">
                    {item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h4>{item.name}</h4>
                    {item.location ? <p>{item.location}</p> : <p className={styles.anonymous}>Anonymous</p>}
                </div>
            </div>
            <StarRow rating={item.rating} />
            </div>
            <p className={styles.reviewText}>&ldquo;{item.feedback}&rdquo;</p>
        </article>
    );
}

export default function Testimonials() {
    const [reviews, setReviews] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const trackRef = useRef(null);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        setIsMobile(mq.matches);
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        fetch(`${BASE_URL}/api/get-user-feedback`)
            .then((r) => r.json())
            .then((data) => {
                if (Array.isArray(data)) setReviews(data);
            })
            .catch(() => {});
    }, []);

    const marqueeThreshold = isMobile ? 1 : 3;
    const useMarquee = reviews.length > marqueeThreshold;

    /* Duplicate cards so the loop is seamless */
    const displayItems = useMarquee ? [...reviews, ...reviews] : reviews;

    if (reviews.length === 0) return null;

    return (
        <section className={`${styles.section} ${styles.bgLow}`}>
            <div className="container">
                <div className={`${styles.textCenter} ${styles.mb64}`}>
                    <h2 className="font-headline">Word from the Amravaan</h2>
                </div>
            </div>

            {useMarquee ? (
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrack} ref={trackRef}>
                        {displayItems.map((item, idx) => (
                            <ReviewCard key={`${item.id}-${idx}`} item={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className={styles.staticGrid}>
                        {reviews.map((item) => (
                            <ReviewCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
