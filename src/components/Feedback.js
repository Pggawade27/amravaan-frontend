"use client";

import { useState, useEffect } from "react";
import styles from "./Feedback.module.css";
import { BASE_URL } from "@/api/api";
const brandLogo = "/assets/logo/brand-logo.png";

const initialForm = { name: "", location: "", feedback: "" };
const initialErrors = { name: "", feedback: "" };

function validate(form) {
    const errors = { name: "", feedback: "" };
    if (!form.name.trim()) errors.name = "Your name is required.";
    if (!form.feedback.trim()) errors.feedback = "Please share your experience.";
    return errors;
}

function hasErrors(errors) {
    return Object.values(errors).some(Boolean);
}

export default function Feedback() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (!toast) return;
        const timer = setTimeout(() => setToast(null), 4000);
        return () => clearTimeout(timer);
    }, [toast]);

    function handleChange(e) {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: "" }));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate(form);
        if (hasErrors(validationErrors)) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/api/save-user-feedback`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    location: form.location.trim() || null,
                    feedback: form.feedback.trim(),
                    rating,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setToast({ type: "success", text: data.message || "Thank you for your feedback!" });
                setForm(initialForm);
                setErrors(initialErrors);
                setRating(5);
            } else {
                setToast({ type: "error", text: data.message || "Something went wrong. Please try again." });
            }
        } catch {
            setToast({ type: "error", text: "Network error. Please check your connection and try again." });
        } finally {
            setLoading(false);
        }
    }

    const displayRating = hoverRating || rating;

    return (
        <>
        <div className={styles.logoContainer}>
        <img className={styles.logo} src={brandLogo} alt="Amravaan – Devgad Alphonso Mangoes" />
        </div>
        <section id="feedback" className={styles.section}>
            <div className="container">
                <div className={styles.feedbackContainer}>
                    <div className={styles.infoPanel}>
                        <span className={`material-symbols-outlined ${styles.bigIcon}`}>
                            reviews
                        </span>
                        <h2 className="font-headline">Share Your Experience</h2>
                        <p className={styles.infoPara}>
                            Every mango you enjoy tells a story. We&apos;d love to hear yours — your feedback helps us grow and serve you better.
                        </p>
                        <div className={styles.highlights}>
                            <div className={styles.highlightItem}>
                                <span className="material-symbols-outlined">verified</span>
                                <span>100% authentic Devgad Hapus</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className="material-symbols-outlined">local_shipping</span>
                                <span>Delivered fresh within 24–48 hrs</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className="material-symbols-outlined">favorite</span>
                                <span>Loved by 15,000+ customers</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formPanel}>
                        <form onSubmit={handleSubmit} noValidate className={styles.form}>
                            {loading && (
                                <div className={styles.formOverlay} aria-hidden="true">
                                    <span className={styles.spinner} />
                                </div>
                            )}

                            <div className={styles.formGroup}>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={errors.name ? styles.inputError : ""}
                                />
                                {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="location">
                                    Location
                                    <span className={styles.optionalBadge}>Optional</span>
                                </label>
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="Mumbai, Maharashtra"
                                    value={form.location}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Rating</label>
                                <div
                                    className={styles.starRow}
                                    role="radiogroup"
                                    aria-label="Rating"
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            className={`${styles.starBtn} ${star <= displayRating ? styles.starFilled : styles.starEmpty}`}
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoverRating(star)}
                                            aria-label={`${star} star${star !== 1 ? "s" : ""}`}
                                            aria-pressed={star === rating}
                                        >
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontVariationSettings: star <= displayRating ? "'FILL' 1" : "'FILL' 0",
                                                    color: star <= displayRating ? "var(--primary-container)" : "var(--outline-variant)",
                                                }}
                                            >
                                                star
                                            </span>
                                        </button>
                                    ))}
                                    <span className={styles.ratingLabel}>
                                        {displayRating === 5 && "Excellent!"}
                                        {displayRating === 4 && "Very Good"}
                                        {displayRating === 3 && "Good"}
                                        {displayRating === 2 && "Fair"}
                                        {displayRating === 1 && "Poor"}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="feedback">Your Feedback</label>
                                <textarea
                                    id="feedback"
                                    rows="4"
                                    placeholder="Tell us about your experience with Amravaan mangoes…"
                                    value={form.feedback}
                                    onChange={handleChange}
                                    className={errors.feedback ? styles.inputError : ""}
                                />
                                {errors.feedback && <p className={styles.errorText}>{errors.feedback}</p>}
                            </div>

                            <button
                                className={`${styles.btn} ${styles.btnPrimary}`}
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className={styles.btnSpinner} />
                                        Submitting…
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">send</span>
                                        Submit Feedback
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {toast && (
                <div className={`${styles.toast} ${styles[`toast--${toast.type}`]}`} role="alert">
                    <span className="material-symbols-outlined">
                        {toast.type === "success" ? "check_circle" : "error"}
                    </span>
                    <span>{toast.text}</span>
                    <button className={styles.toastClose} onClick={() => setToast(null)} aria-label="Dismiss">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            )}
        </section>
        </>
    );
}
