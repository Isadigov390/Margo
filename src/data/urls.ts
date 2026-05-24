const baseUrl = import.meta.env.BASE_URL || "/";
const siteUrl = import.meta.env.SITE || "https://margo-boutique.example.com";

function getBasePath() {
  if (baseUrl === "/") return "";
  return baseUrl.replace(/\/$/, "");
}

export function withBase(path: string) {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || /^[a-z]+:/i.test(path) || path.startsWith("#")) {
    return path;
  }

  const basePath = getBasePath();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!basePath) return normalizedPath;
  if (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) return normalizedPath;

  return `${basePath}${normalizedPath}`;
}

export function absoluteUrl(path: string) {
  return new URL(withBase(path), siteUrl).toString();
}
