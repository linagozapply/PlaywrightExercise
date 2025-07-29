import { expect, test } from "@playwright/test";
import redirects from "./go-to-page-3.json";

for (const { to } of redirects as { from: string; to: string }[]) {
  test(`Get status code 200 from new page ${to}`, async ({ browser }) => {
    const context = await browser.newContext({
      bypassCSP: true,
      locale: "en-US",
      userAgent: "Playwright",
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    });
    await context.route("**/*", (route) => {
      route.continue({
        headers: { ...route.request().headers(), "Cache-Control": "no-cache" },
      });
    });

    // Go to the original URL
    const page = await context.newPage();
    const response = await page.goto(to, { waitUntil: "domcontentloaded" });
    await page.reload({ waitUntil: "domcontentloaded" });
    // Check status code
    expect(response?.status()).toBe(200);
    const errorContainer = page.locator('[data-testid="tm-error"]');
    await page.getByRole("button", { name: "Accept" }).click();
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(errorContainer).toBeVisible();

    // Assert the H1 inside it contains "404 Error"
    await expect(errorContainer.locator("h1")).toHaveText("404 Error");
  });
}
