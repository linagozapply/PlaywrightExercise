import { Locator, Page } from "@playwright/test";
import { CONFIRMATION_MODAL_TEXTS } from "../../constants/confirmationModalTexts";

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
    this.cartView = this.cartModalBody.getByRole("link", {
      name: CONFIRMATION_MODAL_TEXTS.VIEW_CART
    });
    this.continueShoppingButton = this.root.getByRole("button", {
      name: CONFIRMATION_MODAL_TEXTS.CONTINUE_SHOPPING
    });
  }
  async clickViewCartLink() {
    await this.cartView.click();
  }
  async clickContinueShoppingButton() {
    await this.continueShoppingButton.click();
  }
}
