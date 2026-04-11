export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://amravaan.in/sitemap.xml",
    host: "https://amravaan.in",
  };
}
