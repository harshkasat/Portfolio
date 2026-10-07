#!/usr/bin/env bash
# Run Lighthouse (mobile + desktop) against a URL and print category scores.
# Usage: scripts/lh.sh [url]
set -euo pipefail
URL="${1:-http://localhost:3077}"
FLAGS="--headless=new --no-sandbox"
run() {
  local preset="$1" out="/tmp/lh-$1.json"
  if [ "$preset" = "desktop" ]; then
    npx -y lighthouse "$URL" --quiet --chrome-flags="$FLAGS" --preset=desktop \
      --only-categories=performance,accessibility,best-practices,seo \
      --output=json --output-path="$out" >/dev/null 2>&1
  else
    npx -y lighthouse "$URL" --quiet --chrome-flags="$FLAGS" \
      --only-categories=performance,accessibility,best-practices,seo \
      --output=json --output-path="$out" >/dev/null 2>&1
  fi
  node - "$out" "$preset" <<'JS'
const [,, file, preset] = process.argv;
const r = require(file);
const cats = Object.entries(r.categories).map(([k, v]) => `${k} ${Math.round(v.score * 100)}`).join(" | ");
const a = r.audits;
console.log(`${preset.toUpperCase()}: ${cats} | TBT ${a["total-blocking-time"].displayValue} | LCP ${a["largest-contentful-paint"].displayValue}`);
for (const id of Object.keys(a)) {
  const x = a[id];
  if (x.score !== null && x.score < 0.9 && x.scoreDisplayMode !== "informative") console.log("   -", id, x.score, x.displayValue || "");
}
JS
}
run mobile
run desktop
