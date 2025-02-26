import { test as base } from "@playwright/test";
import { PaymentCompletePage } from "../../page-objects/pages/paymentComplete.page";

type PaymentCompletePageDefinition = {
  paymentCompletePage: PaymentCompletePage;
};
export const test = base.extend<PaymentCompletePageDefinition>({
  paymentCompletePage: async ({ page }, use) => {
    // Create a new home page object
    await use(new PaymentCompletePage(page));
  },
});
