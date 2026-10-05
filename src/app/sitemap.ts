import { baseURL } from "@/resources/site";

export const dynamic = "force-static";

export default function sitemap() {
  return [{ url: `${baseURL}/` }];
}
