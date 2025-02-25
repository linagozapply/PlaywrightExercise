import { test as base } from "@playwright/test";
import { CheckoutPage } from "../../page-objects/pages/checkout.page";

type CheckoutPageDefinition = {
  checkoutPage: CheckoutPage;
};
export const test = base.extend<CheckoutPageDefinition>({
  checkoutPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new CheckoutPage(page));
  },
});
