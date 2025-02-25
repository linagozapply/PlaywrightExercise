import { Locator, Page } from "@playwright/test";

export class checkoutCartInfoSection {
  readonly page: Page;
  readonly root: Locator;
  readonly cartQuantity: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".container");
   
    this.cartQuantity = this.page.locator(".cart_quantity");
  }

// This page should hold all the actions and elements that can be done on the cart section in the checkout page
}
