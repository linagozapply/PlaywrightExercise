import { Locator, Page } from "@playwright/test";
import { NAVBAR_LINK_TEXTS } from "../../../constants/navbarLinksTexts";

export class NavBarSection {
  readonly page: Page;
  readonly root: Locator;
  readonly shopMenu: Locator;
  readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator("#header");
    this.shopMenu = this.root.locator(".shop-menu");
    this.products = this.shopMenu.getByRole("link", {
      name: NAVBAR_LINK_TEXTS.PRODUCTS
    });
  }

  async clickProducts() {
    await this.products.click();
  }
}
