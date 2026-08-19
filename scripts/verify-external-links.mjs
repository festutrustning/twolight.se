/**
 * Regression test: Festutrustning outbound URLs must be verified registry entries.
 */
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import https from "node:https";

const ROOT = path.resolve(import.meta.dirname, "..");
const REGISTRY_FILE = path.join(ROOT, "src/lib/festutrustning-links.ts");
const SRC_DIR = path.join(ROOT, "src");

const VERIFIED_URLS = {
  uplights: "https://festutrustning.se/produkter/omgivningsbelysning-10-pack-uplights",
  haze: "https://festutrustning.se/produkter/stor-haze",
  effectLighting:
    "https://festutrustning.se/produkter/eventpaket-pro-ljus-allt-du-behover-for-riktig-showkansla",
};

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(full, files);
    } else if (/\.(tsx?|jsx?|mjs)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function fetchHead(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.request(url, { method: "HEAD" }, (res) => {
      resolve({ status: res.statusCode, location: res.headers.location });
    });
    req.on("error", (err) => resolve({ error: err.message }));
    req.end();
  });
}

function fetchCanonical(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          const match = data.match(/rel="canonical"\s+href="([^"]+)"/);
          resolve(match?.[1] ?? null);
        });
      })
      .on("error", (err) => resolve({ error: err.message }));
  });
}

async function run() {
  console.log("=== Festutrustning External Links Verification ===\n");
  let failed = 0;

  const registrySource = fs.readFileSync(REGISTRY_FILE, "utf8");

  // 1. No fabricated /hyra-* slugs in registry
  if (/\/hyra-/.test(registrySource)) {
    console.log("✗ Registry contains fabricated /hyra-* slug");
    failed++;
  } else {
    console.log("✓ Registry has no /hyra-* slugs");
  }

  // 2. No UUID product URLs in registry
  if (/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i.test(registrySource)) {
    console.log("✗ Registry contains UUID product URL");
    failed++;
  } else {
    console.log("✓ Registry has no UUID product URLs");
  }

  // 3. Registry URLs match expected verified set
  for (const [key, expected] of Object.entries(VERIFIED_URLS)) {
    if (!registrySource.includes(expected)) {
      console.log(`✗ Registry missing verified URL for ${key}: ${expected}`);
      failed++;
    }
  }
  console.log("✓ Registry contains all verified URLs");

  // 4. No hardcoded festutrustning.se URLs outside allowed files
  const allowedPatterns = [
    /festutrustning-links\.ts$/,
    /site\.ts$/,
    /case\.ts$/,
    /schema\.ts$/,
  ];

  for (const file of walk(SRC_DIR)) {
    if (allowedPatterns.some((p) => p.test(file))) continue;
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(/https:\/\/festutrustning\.se[^\s"'`]*/g);
    if (matches?.length) {
      console.log(`✗ Hardcoded Festutrustning URL in ${path.relative(ROOT, file)}: ${matches[0]}`);
      failed++;
    }
  }
  console.log("✓ No hardcoded Festutrustning URLs outside registry");

  // 5. HTTP + canonical verification
  for (const [key, url] of Object.entries(VERIFIED_URLS)) {
    const head = await fetchHead(url);
    if (head.error || head.status !== 200) {
      console.log(`✗ ${key}: HTTP ${head.status ?? head.error} for ${url}`);
      failed++;
      continue;
    }

    const canonical = await fetchCanonical(url);
    if (canonical !== url) {
      console.log(`✗ ${key}: canonical mismatch — got ${canonical}, expected ${url}`);
      failed++;
      continue;
    }

    console.log(`✓ ${key}: HTTP 200, canonical OK`);
  }

  console.log(`\n=== Results: ${failed === 0 ? "PASS" : `${failed} FAILED`} ===`);
  process.exit(failed > 0 ? 1 : 0);
}

run();
