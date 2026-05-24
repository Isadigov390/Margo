import { defineConfig } from "astro/config";
import { existsSync, readFileSync } from "node:fs";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner = "", repo = ""] = repository.split("/");
const cnameFile = new URL("./public/CNAME", import.meta.url);
const cname = existsSync(cnameFile) ? readFileSync(cnameFile, "utf8").trim() : "";
const customDomain = process.env.PUBLIC_CUSTOM_DOMAIN || cname;
const site =
  process.env.PUBLIC_SITE_URL ||
  (customDomain ? `https://${customDomain}` : owner ? `https://${owner}.github.io` : "https://margo-boutique.example.com");
const isUserOrOrgPage = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.PUBLIC_BASE_PATH || (!customDomain && repo && !isUserOrOrgPage ? `/${repo}` : undefined);

export default defineConfig({
  output: "static",
  site,
  ...(base ? { base } : {}),
});
