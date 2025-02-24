import { Locator, Page } from "@playwright/test";
import { FieldActions } from "../../../utilities/fieldActions";

export class ProductDetailsSection {
  readonly page: Page;
  readonly root: Locator;
  readonly productDetails: Locator;
  readonly productInfo: Locator;

  readonly itemQuantityInput: Locator;
  readonly itemAddToCartButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator(".container");
    this.productDetails = this.root.locator(".product-details");
    this.productInfo = this.root.locator(".product-information");
    this.itemQuantityInput = this.productInfo.locator(".span input");
    this.itemAddToCartButton = this.productInfo.locator(
      ".btn btn-default cart"
    );
  }

  async updateItemsQuantity(quantity: number) {
    await FieldActions.fillInputField(
      this.itemQuantityInput,
      quantity.toString()
    );
  }

  async addItemToCart() {
    await this.itemAddToCartButton.click();
  } 
}
