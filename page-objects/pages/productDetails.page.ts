import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { ProductDetailsSection } from "../sections/productDetails/productDetails.section";

export class ProductDetailsPage extends BasePage {
  readonly productDetailsSection: ProductDetailsSection;
  readonly productName: Locator;
  constructor(page: Page) {
    super(page);
    this.productDetailsSection = new ProductDetailsSection(page);
  }

  async goToProductURL(productHref: string) {
    await this.goto(productHref);
    // Wait a visible element from UI instead of a waitResponse.
    await this.productDetailsSection.productName.waitFor();
  }
}
