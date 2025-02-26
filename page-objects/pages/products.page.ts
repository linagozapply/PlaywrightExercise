import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { ProductsListingContainerSection } from "../sections/products/productsListingContainer.section";
import { SLUGS } from "../../constants/slugs";

export class ProductsPage extends BasePage {
  readonly productsListingContainerSection: ProductsListingContainerSection;
  constructor(page: Page) {
    super(page);
    this.productsListingContainerSection = new ProductsListingContainerSection(
      page
    );
  }

  async gotoProductsPage() {
    await Promise.all([
      this.page.goto(SLUGS.PRODUCTS),
      this.page.waitForLoadState("domcontentloaded"),
    ]);
  }
}