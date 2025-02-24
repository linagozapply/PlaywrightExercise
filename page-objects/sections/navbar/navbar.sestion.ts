import { Locator, Page } from "@playwright/test";

export class NavBarSection {
  readonly page: Page;
  readonly root: Locator;

  readonly logo: Locator;
  readonly shopMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = this.page.getByTestId("header");
    this.shopMenu = this.root.locator(".shop-menu");
  }
}
