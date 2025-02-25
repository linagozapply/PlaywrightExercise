import { Locator, Page } from "@playwright/test";

export class NavBarSection {
  readonly page: Page;
  readonly root: Locator;
  readonly shopMenu: Locator;
  readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator("#header");
    this.shopMenu = this.root.locator(".shop-menu");
    this.products = this.shopMenu.locator("ul.nav.navbar-nav li a", {
      hasText: "Products",
    });
  }

  async clickProducts() {
    await this.products.click();
  }
}
