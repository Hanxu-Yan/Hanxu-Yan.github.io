import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Hanxu Yan — Academic Homepage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 100, background: "#fff", color: "#1a2a4a", borderTop: "12px solid #1a2a4a" }}>
      <div style={{ fontSize: 25, marginBottom: 32, color: "#65738e" }}>SICHUAN UNIVERSITY</div>
      <div style={{ fontSize: 92, fontWeight: 600 }}>Hanxu Yan</div>
      <div style={{ fontSize: 32, color: "#2e5090", marginTop: 28 }}>AI for databases · Query optimization · Text-to-SQL</div>
    </div>,
    size,
  );
}
