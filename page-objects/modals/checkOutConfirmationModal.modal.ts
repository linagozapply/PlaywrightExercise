import { Locator, Page } from "@playwright/test";

export class CheckOutConfirmationModal {
  readonly page: Page;
  readonly root: Locator;

  readonly checkOutModalContent: Locator;
  readonly checkOutModalHeader: Locator;
  readonly checkOutModalTitle: Locator;
  readonly checkOutModalBody: Locator;
  readonly registeredLoginLink: Locator;
  readonly continueOnCartButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".checkOutModal");
    this.checkOutModalContent = this.root.locator(".modal-content");
    this.checkOutModalHeader = this.checkOutModalContent.locator(".modal-header");
    this.checkOutModalTitle = this.checkOutModalHeader.locator(".modal-title");
    this.checkOutModalBody = this.checkOutModalHeader.locator(".modal-body");
    this.registeredLoginLink = this.checkOutModalBody.nth(1);
    this.continueOnCartButton = this.root.locator(".btn close-checkout-modal");
  }
  async clickOnRegisteredLoginLink() {
    await this.registeredLoginLink.click();
  }
  async clickContinueOnCartButton() {
    await this.continueOnCartButton.click();
  }
}
