/** @type {import('next').NextConfig} */
const ONE_YEAR = "public, max-age=31536000, immutable";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:file(bat-mask.png|pfp-image.png|favicon.ico)",
        headers: [{ key: "Cache-Control", value: ONE_YEAR }],
      },
    ];
  },
};

module.exports = nextConfig;
