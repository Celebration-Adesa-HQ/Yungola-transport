export function generateSEO({
  title,
  description,
  keywords = [],
  url = "https://yungolatransport.com",
  image = "/og-image.png", // default OG image
}) {
  return {
    title,
    description,
    keywords: keywords.join(", "), // meta tag expects string
    robots: "index, follow", // allow search engines to crawl
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      siteName: "Yungola Transport",
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Yungola Transport",
      url,
      logo: image,
      sameAs: [
        "https://facebook.com/yungolatransport",
        "https://twitter.com/yungolatransport",
        "https://instagram.com/yungolatransport",
      ],
    },
  };
}
