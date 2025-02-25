import { Locator, Page } from "@playwright/test";

export class ProductsListingContainerSection {
  readonly page: Page;
  readonly root: Locator;
  readonly productsListingContainer: Locator;
  readonly productCardInfoContainer: Locator;
  readonly productCardInfo: Locator;
  readonly productCartAdd: Locator;
  readonly productCardsToChoose: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".container");
    this.productsListingContainer = this.root.locator(".features_items");
    this.productCardInfoContainer =
      this.productsListingContainer.locator(".single-products");
    this.productCardInfo =
      this.productCardInfoContainer.locator(".productinfo");
    this.productCartAdd = this.productCardInfoContainer.locator(".add-to-cart");
    this.productCardsToChoose =
      this.productsListingContainer.locator(".choose");
  }

  async clickOnProductNumberX(index: number = 0) {
    // Ensure the selected product card is visible
    const selectedProduct = this.productCardsToChoose.nth(index);
    await selectedProduct.waitFor({ state: "visible" });
    await selectedProduct.click();
  }
}
