import { getDefaultPagePath, getPagePath, languages, type PageKey } from "@/data/i18n";
import { absoluteUrl } from "@/data/urls";

const pages: PageKey[] = ["home", "collection", "contact"];

function urlEntry(path: string, priority: string) {
  return [
    "  <url>",
    `    <loc>${absoluteUrl(path)}</loc>`,
    `    <lastmod>${new Date().toISOString()}</lastmod>`,
    "    <changefreq>weekly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function GET() {
  const urls = [
    ...pages.map((page) => urlEntry(getDefaultPagePath(page), page === "home" ? "1.0" : "0.8")),
    ...languages.flatMap((language) =>
      pages.map((page) => urlEntry(getPagePath(language.code, page), page === "home" ? "0.9" : "0.7")),
    ),
  ];

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
