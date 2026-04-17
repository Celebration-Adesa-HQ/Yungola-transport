export function generateSEO({
  title,
  description,
  keywords = [],
  url = "https://yungolatransport.com",
  image = "https://yungolatransport.com/logo.png",
}) {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
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
  };
}
