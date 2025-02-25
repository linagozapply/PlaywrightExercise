import { test as base } from "@playwright/test";
import { ProductsPage } from "../../page-objects/pages/products.page";

type ProductsPageDefinition = {
  productsPage: ProductsPage;
};
export const test = base.extend<ProductsPageDefinition>({
  productsPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new ProductsPage(page));
  },
});
