import { test as base } from "@playwright/test";
import { CartPage } from "../../page-objects/pages/cart.page";

type CartPageDefinition = {
  cartPage: CartPage;
};
export const test = base.extend<CartPageDefinition>({
  cartPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new CartPage(page));
  },
});
