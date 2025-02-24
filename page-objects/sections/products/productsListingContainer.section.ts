import { Locator, Page } from "@playwright/test";

export class ProductsListingContainerSection {
  readonly page: Page;
  readonly root: Locator;
  readonly productsListingContainer: Locator;
  readonly productCard: Locator;
  readonly productCartInfo: Locator;
  readonly productCartOverlay: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".container");
    this.productsListingContainer = this.root.locator(".features_items");
    this.productCard = this.root.locator(".single-products");
    this.productCartInfo = this.root.locator(".productinfo");
    this.productCartOverlay = this.root.locator(".product-overlay");
  }
}
