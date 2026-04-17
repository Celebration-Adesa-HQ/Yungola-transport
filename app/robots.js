export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/vehicles",
          "/team",
          "/schedule",
          "/investors",
          "/finance",
          "/contact",
        ],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://yungolatransport.com/sitemap.xml",
    host: "https://yungolatransport.com",
  };
}
