import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Harsh Kasat — Infrastructure Engineer at Freebuff (YC F24)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #1b2235 0%, #11151f 100%)",
          color: "#ebebeb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
            Harsh Kasat
          </div>
          <div style={{ fontSize: 38, color: "#e8683f", fontWeight: 600 }}>
            Infrastructure Engineer · Freebuff (YC F24)
          </div>
          <div style={{ fontSize: 30, color: "#b5b9c4", maxWidth: 980, lineHeight: 1.35 }}>
            Sandbox infrastructure for AI coding agents — Daytona and E2B
            fleets, Convex backends, Bun/TypeScript runner services.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#8f94a3",
          }}
        >
          <span>whoisharsh.space</span>
          <span>github.com/harshkasat</span>
        </div>
      </div>
    ),
    size,
  );
}
