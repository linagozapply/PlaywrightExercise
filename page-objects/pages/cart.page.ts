import { Locator ,Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { Modal } from "../modals/modal.modal";

export class CartPage extends BasePage {
    readonly cartItemsContainer: Locator;
    readonly cartItemsInfo: Locator
    readonly checkoutButton: Locator
    constructor(page: Page) {
        super(page);
        this.cartItemsContainer = this.page.locator("#cart_items");
        this.cartItemsInfo = this.cartItemsContainer.locator("#cart_info");
        this.checkoutButton = this.page.locator(".check_out");
    }
  async clickProceedToCheckout(): Promise<Modal> {
    await this.checkoutButton.click();
    return new Modal(this.page);
  }
}