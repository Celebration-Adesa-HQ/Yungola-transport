export function generateSEO({
  title,
  description,
  keywords = [],
  url = "https://yungolatransport.com",
}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "Yungola Transport",
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}