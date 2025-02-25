import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { ProductDetailsSection } from "../sections/productDetails/productDetails.section";
import { SLUGS } from "../../constants/slugs";

export class ProductDetailsPage extends BasePage {
  readonly productDetailsSection: ProductDetailsSection;
  readonly productName: Locator;
  constructor(page: Page) {
    super(page);
    this.productDetailsSection = new ProductDetailsSection(page);
  }

  async goToProductURL(productID: string) {
    await this.goto(SLUGS.PRODUCT(productID));
    await this.productDetailsSection.productName.waitFor();
  }
}
