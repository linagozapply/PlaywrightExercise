import { test as base } from "@playwright/test";
import { PaymentPage } from "../../page-objects/pages/payment.page";

type PaymentPageDefinition = {
  paymentPage: PaymentPage;
};
export const test = base.extend<PaymentPageDefinition>({
  paymentPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new PaymentPage(page));
  },
});
