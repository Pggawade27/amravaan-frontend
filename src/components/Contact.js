"use client";

import { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { BASE_URL } from "@/api/api";

const contactMethods = [
    { icon: "call", label: "+91 9284533557", href: "tel:+919284533557" },
    { icon: "forum", label: "Chat on WhatsApp", href: "#" },
    { icon: "location_on", label: "Devgad, Konkan Coast, Maharashtra", href: "#" },
];

const initialForm = { name: "", phone: "", message: "" };
const initialErrors = { name: "", phone: "", message: "" };

function validate(form) {
    const errors = { name: "", phone: "", message: "" };
    if (!form.name.trim()) {
        errors.name = "Full name is required.";
    }
    if (!form.phone.trim()) {
        errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
        errors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!form.message.trim()) {
        errors.message = "Message is required.";
    }
    return errors;
}

function hasErrors(errors) {
    return Object.values(errors).some(Boolean);
}

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
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
            const res = await fetch(`${BASE_URL}/api/contact-us`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    mobile: form.phone.trim(),
                    message: form.message.trim(),
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setToast({ type: "success", text: data.message || "Message sent successfully!" });
                setForm(initialForm);
                setErrors(initialErrors);
            } else {
                setToast({ type: "error", text: data.message || "Something went wrong. Please try again." });
            }
        } catch {
            setToast({ type: "error", text: "Network error. Please check your connection and try again." });
        } finally {
            setLoading(false);
        }
    }

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
                        <form onSubmit={handleSubmit} noValidate className={styles.form}>
                            {loading && (
                                <div className={styles.formOverlay} aria-hidden="true">
                                    <span className={styles.spinner} />
                                </div>
                            )}
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Prasad Gawade"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={errors.name ? styles.inputError : ""}
                                />
                                {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="9284533557"
                                    value={form.phone}
                                    onChange={handleChange}
                                    maxLength={10}
                                    className={errors.phone ? styles.inputError : ""}
                                />
                                {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="How can we help you today?"
                                    value={form.message}
                                    onChange={handleChange}
                                    className={errors.message ? styles.inputError : ""}
                                />
                                {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                            </div>
                            <button
                                className={`${styles.btn} ${styles.btnPrimary}`}
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className={styles.btnSpinner} />
                                        Sending…
                                    </>
                                ) : "Send Message"}
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
    );
}
