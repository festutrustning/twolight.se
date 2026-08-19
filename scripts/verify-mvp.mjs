/**
 * MVP verification script — run after `npm run build && npm start`
 */
import http from "node:http";

const BASE = process.env.TEST_BASE_URL || "http://localhost:3000";

const EXPECTED_ROUTES = [
  "/",
  "/eventbelysning",
  "/ljussattning-brollop",
  "/ljussattning-foretagsevent",
  "/uplights",
  "/scenljus",
  "/effektljus",
  "/haze",
  "/guider",
  "/sitemap.xml",
  "/robots.txt",
];

function fetch(path) {
  return new Promise((resolve, reject) => {
    http
      .get(`${BASE}${path}`, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () =>
          resolve({ status: res.statusCode, body: data, headers: res.headers })
        );
      })
      .on("error", reject);
  });
}

async function run() {
  console.log("=== Twolight MVP Tests ===\n");
  let passed = 0;
  let failed = 0;

  for (const route of EXPECTED_ROUTES) {
    try {
      const { status, body } = await fetch(route);
      if (status === 200) {
        console.log(`✓ ${route} → 200`);
        passed++;
      } else {
        console.log(`✗ ${route} → ${status} (expected 200)`);
        failed++;
      }

      if (route === "/robots.txt" && !body.includes("Sitemap:")) {
        console.log("✗ robots.txt missing Sitemap directive");
        failed++;
      }
      if (route === "/sitemap.xml" && !body.includes("twolight.se")) {
        console.log("✗ sitemap.xml missing domain URLs");
        failed++;
      }
    } catch (e) {
      console.log(`✗ ${route} → ERROR: ${e.message}`);
      failed++;
    }
  }

  try {
    const { status } = await fetch("/this-page-does-not-exist");
    if (status === 404) {
      console.log("✓ /unknown → 404");
      passed++;
    } else {
      console.log(`✗ /unknown → ${status} (expected 404)`);
      failed++;
    }
  } catch (e) {
    console.log(`✗ 404 test ERROR: ${e.message}`);
    failed++;
  }

  try {
    const { body } = await fetch("/");
    if (body.includes("canonical")) {
      console.log("✓ Homepage has canonical");
      passed++;
    } else {
      console.log("✗ Homepage missing canonical");
      failed++;
    }
    if (!body.includes("noindex")) {
      console.log("✓ Homepage not noindex");
      passed++;
    } else {
      console.log("✗ Homepage has noindex");
      failed++;
    }
    if (body.includes("Ljus förändrar rummet")) {
      console.log("✓ Homepage has brand tagline");
      passed++;
    } else {
      console.log("✗ Homepage missing tagline");
      failed++;
    }
  } catch (e) {
    console.log(`✗ Homepage checks ERROR: ${e.message}`);
    failed++;
  }

  // Unique titles check
  const titles = new Set();
  for (const route of EXPECTED_ROUTES.filter((r) => !r.includes("."))) {
    try {
      const { body } = await fetch(route);
      const match = body.match(/<title>([^<]+)<\/title>/);
      if (match) {
        if (titles.has(match[1])) {
          console.log(`✗ Duplicate title: ${match[1]}`);
          failed++;
        } else {
          titles.add(match[1]);
        }
      }
    } catch {
      /* skip */
    }
  }
  console.log(`✓ ${titles.size} unique page titles`);

  console.log(`\n=== Results: ${passed} passed, ${failed} failed ===`);
  process.exit(failed > 0 ? 1 : 0);
}

run();
