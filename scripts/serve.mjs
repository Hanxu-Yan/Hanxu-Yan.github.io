import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2" };

createServer(async (request, response) => {
  try {
    let file = resolve(root, "." + decodeURIComponent(new URL(request.url, "http://localhost").pathname));
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    const content = await readFile(file);
    const type = types[extname(file)] || (["icon", "opengraph-image"].some((name) => file === resolve(root, name)) ? "image/png" : "application/octet-stream");
    response.writeHead(200, { "Content-Type": type }).end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }).end(await readFile(resolve(root, "404.html")).catch(() => "Not found"));
  }
}).listen(port, "127.0.0.1", () => console.log(`Static homepage: http://127.0.0.1:${port}`));
