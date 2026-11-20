// GTA 6 Clipper — make.fun entry runner.
// Copies the entry's VIDEO.json (the published Short's URL) into the
// output directory the make.fun harness reads from.
//
// Usage: node main.ts
//   MAKEFUN_BOT_DIR     — directory holding VIDEO.json (default: /bot)
//   MAKEFUN_OUTPUT_DIR  — directory to write VIDEO.json into (default: /output)
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "VIDEO.json");
if (!existsSync(src)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

// Refuse a placeholder or non-YouTube address: the entry is the published
// Short, so a bad URL must fail loudly here instead of being submitted.
let url;
try {
  url = JSON.parse(readFileSync(src, "utf8")).url;
} catch {
  console.error(`VIDEO.json in ${botDir} is not valid JSON with a url field`);
  process.exit(1);
}
if (typeof url !== "string" || url.includes("PLACEHOLDER") || !/^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]{11}/.test(url)) {
  console.error(`VIDEO.json url is not a public YouTube Short: ${String(url)}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "VIDEO.json"));
console.log(`Copied ${src} -> ${join(outDir, "VIDEO.json")} (${url})`);
