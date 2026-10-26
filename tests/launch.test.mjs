import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
test("offer states concrete commercial terms", async () => { const home = await read("app/page.tsx"); for (const term of ["$250 flat fee", "3–5 page PDF", "two business days", "one revision included"]) assert.ok(home.toLowerCase().includes(term.toLowerCase())); });
test("checkout and honest inquiry fallback exist", async () => { const request = await read("app/request/page.tsx"); assert.match(request, /NEXT_PUBLIC_STRIPE_BRIEF_LINK/); assert.match(request, /contact@royzmediagroup\.com/); assert.match(request, /does not claim it was received/i); assert.match(request, /localStorage/); });
test("legal pages and security headers exist", async () => { const [privacy, terms, config] = await Promise.all([read("app/privacy/page.tsx"), read("app/terms/page.tsx"), read("next.config.ts")]); assert.match(privacy, /browser on your device/i); assert.match(terms, /not live opportunities/i); for (const header of ["Content-Security-Policy", "Referrer-Policy", "X-Content-Type-Options", "Permissions-Policy"]) assert.match(config, new RegExp(header)); });
