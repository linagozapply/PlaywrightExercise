import { expect, test } from "@playwright/test";
import redirects from "../tests/redirects-2.json";

for (const { from, to } of redirects as { from: string; to: string }[]) {
  test(`Redirect from ${from} to ${to}`, async ({ page }) => {
    // Go to the original URL
    const response = await page.goto(from, { waitUntil: "domcontentloaded" });

    // Get the final URL after any redirects
    const finalUrl = page.url();
    if (finalUrl !== to) {
      console.warn(
        `Expected ${from} to redirect to ${to}, but got ${finalUrl}`
      );
    }
    // Assert it redirected to the expected URL
    expect(finalUrl).toBe(to);
    // Make sure we actually got a response
    expect(response).not.toBeNull();
    if (finalUrl !== to) {
      console.warn(
        `Expected ${from} to redirect to ${to}, but got ${finalUrl}`
      );
    }
    // Check status code
    expect(response?.status()).toBe(200);
  });
}
