import { Locator, Page } from "@playwright/test";
import { FieldActions } from "../../../utilities/fieldActions";
import { Modal } from "../../modals/modal.modal";
export class ProductDetailsSection {
  readonly page: Page;
  readonly root: Locator;
  readonly productDetails: Locator;
  readonly productInfo: Locator;
  readonly productName: Locator;
  readonly itemsQuantityInput: Locator;
  readonly itemsAddToCartButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".container");
    this.productDetails = this.root.locator(".product-details");
    this.productInfo = this.productDetails.locator(".product-information");
    this.productName = this.productInfo.locator("h2");
    this.itemsQuantityInput = this.productInfo.locator("#quantity");
    this.itemsAddToCartButton = this.productInfo.locator(".cart");
  }

  async updateItemsQuantity(quantity: string) {
    await FieldActions.fillInputField(
      this.itemsQuantityInput,
      quantity.toString()
    );
  }

  async clickAddItemToCart(): Promise<Modal> {
    await this.itemsAddToCartButton.click();
    return new Modal(this.page);
  }
}
