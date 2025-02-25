import { Locator, Page } from "@playwright/test";
import { FieldActions } from "../../../utilities/fieldActions";
import { CheckOutConfirmationModal } from "../../modals/checkOutConfirmationModal.modal";
import { CartAddConfirmationModal } from "../../modals/cartAddConfirmationModal.modal";
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
    this.productInfo = this.root.locator(".product-information");
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

  async clickAddItemToCart(): Promise<CartAddConfirmationModal> {
    await this.itemsAddToCartButton.click();
    return new CartAddConfirmationModal(this.page);
  }
}
