import { Locator, Page } from "@playwright/test";
import { MODAL_TEXTS } from "../../constants/modalTexts";

export class Modal {
  readonly page: Page;
  readonly root: Locator;

  readonly modalContent: Locator;
  readonly modalHeader: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;
  readonly cartView: Locator;
  readonly continueShoppingButton: Locator;
  readonly registeredLoginLink: Locator;
  readonly continueOnCartButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".modal");
    this.modalContent = this.root.locator(".modal-content");
    this.modalHeader = this.modalContent.locator(".modal-header");
    this.modalTitle = this.modalHeader.locator(".modal-title");
    this.modalBody = this.modalHeader.locator(".modal-body");
    this.cartView = this.root.getByRole("link", {
      name: MODAL_TEXTS.VIEW_CART,
    });
    this.continueShoppingButton = this.root.getByRole("button", {
      name: MODAL_TEXTS.CONTINUE_SHOPPING,
    });
    this.registeredLoginLink = this.root.getByRole("link", {
      name: MODAL_TEXTS.REGISTERED_LOGIN,
    });
    this.continueOnCartButton = this.root.getByRole("button", {
      name: MODAL_TEXTS.CONTINUE_ON_CART,
    });
  }
  async clickViewCartLink() {
    await this.cartView.click();
  }
  async clickContinueShoppingButton() {
    await this.continueShoppingButton.click();
  }

  async clickOnRegisteredLoginLink() {
    await this.registeredLoginLink.click();
  }
  async clickContinueOnCartButton() {
    await this.continueOnCartButton.click();
  }
}
