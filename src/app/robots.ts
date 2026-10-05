import { baseURL } from "@/resources/site";

export const dynamic = "force-static";

export default function robots() {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${baseURL}/sitemap.xml` };
}
