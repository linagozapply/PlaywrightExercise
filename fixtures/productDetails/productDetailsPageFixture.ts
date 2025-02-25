import { test as base } from "@playwright/test";
import { ProductDetailsPage } from "../../page-objects/pages/productDetails.page";

type ProductDetailsPageDefinition = {
  productDetailsPage: ProductDetailsPage;
};
export const test = base.extend<ProductDetailsPageDefinition>({
  productDetailsPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new ProductDetailsPage(page));
  },
});
