import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Identify from "@/components/Identify";
import AboutSection from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://amravaan.in/#organization",
            name: "Amravaan",
            url: "https://amravaan.in",
            logo: {
                "@type": "ImageObject",
                url: "https://amravaan.in/assets/logo/brand-logo.png",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi", "Marathi"],
            },
            sameAs: ["https://wa.me/9284533557"],
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://amravaan.in/#business",
            name: "Amravaan – Premium Devgad Alphonso Mangoes",
            description:
                "Amravaan sells authentic GI-Tagged Devgad Alphonso (Hapus) mangoes online. Naturally ripened, chemical-free mangoes sourced directly from Konkan farms and delivered within 24–48 hours across India.",
            url: "https://amravaan.in",
            telephone: "+91-98765-43210",
            image: "https://amravaan.in/assets/og-image.jpg",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Devgad",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 16.3833,
                longitude: 73.3833,
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                opens: "09:00",
                closes: "20:00",
            },
            priceRange: "₹₹",
            servesCuisine: "Fresh Fruit",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Devgad Alphonso Mangoes",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Product",
                            name: "Devgad Alphonso Mangoes (Hapus)",
                            description:
                                "GI-Tagged, naturally ripened, chemical-free Devgad Alphonso mangoes sourced directly from Konkan farms.",
                            brand: { "@type": "Brand", name: "Amravaan" },
                            category: "Fresh Fruit",
                        },
                    },
                ],
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "15000",
                bestRating: "5",
                worstRating: "1",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://amravaan.in/#website",
            url: "https://amravaan.in",
            name: "Amravaan",
            description: "Buy premium Devgad Alphonso Mangoes online – farm fresh, naturally ripened Hapus delivered across India.",
            publisher: { "@id": "https://amravaan.in/#organization" },
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NavBar />
            <main>
                <Hero />
                <WhyChooseUs />
                <Identify />
                <AboutSection />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFab />
        </>
    );
}
