import { Locator, Page } from "@playwright/test";

export class ProductDetailsSection {
  readonly page: Page;
  readonly root: Locator;
  readonly productDetails: Locator;
  readonly productInfo: Locator;
  readonly productCartInput: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".container");
    this.productDetails = this.root.locator(".product-details");
    this.productInfo = this.root.locator(".product-information");
    this.productCartInput = this.productInfo.locator(".span input");
  }
}
