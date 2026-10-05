import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#1a2a4a", color: "#fff", fontSize: 27, fontWeight: 600, borderRadius: 10 }}>HY</div>,
    size,
  );
}
