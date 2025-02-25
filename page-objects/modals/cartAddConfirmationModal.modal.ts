import { Locator, Page } from "@playwright/test";

export class CartAddConfirmationModal {
  readonly page: Page;
  readonly root: Locator;

  readonly cartModalContent: Locator;
  readonly cartModalHeader: Locator;
  readonly cartModalTitle: Locator;
  readonly cartModalBody: Locator;
  readonly cartView: Locator;
  readonly continueShoppingButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator("#cartModal");
    this.cartModalContent = this.root.locator(".modal-content");
    this.cartModalHeader = this.cartModalContent.locator(".modal-header");
    this.cartModalTitle = this.cartModalHeader.locator(".modal-title");
    this.cartModalBody = this.cartModalHeader.locator(".modal-body");
    this.cartView = this.cartModalBody.nth(1);
    this.continueShoppingButton = this.root.locator(".btn btn-default cart");
  }
  async clickViewCartLink() {
    await this.cartView.click();
  }
  async clickContinueShoppingButton() {
    await this.continueShoppingButton.click();
  }
}
