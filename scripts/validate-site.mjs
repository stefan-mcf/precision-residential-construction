import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const html = await readFile(new URL("../site/index.html", import.meta.url), "utf8");

assert.match(html, /^<!DOCTYPE html>/i);
assert.match(html, /<meta name="viewport"/i);
assert.match(html, /<title>[^<]+<\/title>/i);
assert.match(html, /<form[^>]+id="quoteForm"/i);
assert.match(html, /preferred_contact_method/);
assert.match(html, /service_type/);
assert.match(html, /https:\/\/smsystems\.app\.n8n\.cloud\/webhook\/precision-quote-request/);

const assetPaths = [
  ...html.matchAll(/(?:src|href)="\.\/assets\/([^"]+)"/g),
].map((match) => match[1]);
assert(assetPaths.length >= 10, "Expected the deployed image and icon set");

for (const assetPath of new Set(assetPaths)) {
  await access(new URL(`../site/assets/${assetPath}`, import.meta.url));
}

const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
assert(images.length >= 10);
assert(images.every((image) => /\balt="[^"]+"/i.test(image)), "Every image requires alt text");

console.log(`Static site is valid: ${images.length} images and ${new Set(assetPaths).size} assets.`);
