import { Locator, Page } from "@playwright/test";
import { CONFIRMATION_MODAL_TEXTS } from "../../constants/confirmationModalTexts";

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
    this.registeredLoginLink = this.checkOutModalBody.getByRole("link", {
      name: CONFIRMATION_MODAL_TEXTS.REGISTERED_LOGIN,
    });
    this.continueOnCartButton = this.root.getByRole("button", {
      name: CONFIRMATION_MODAL_TEXTS.CONTINUE_ON_CART,
    });
  }
  async clickOnRegisteredLoginLink() {
    await this.registeredLoginLink.click();
  }
  async clickContinueOnCartButton() {
    await this.continueOnCartButton.click();
  }
}
