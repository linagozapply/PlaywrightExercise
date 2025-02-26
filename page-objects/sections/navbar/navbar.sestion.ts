import { Locator, Page } from "@playwright/test";
import { NAVBAR_LINK_TEXTS } from "../../../constants/navbarLinksTexts";

export class NavBarSection {
  readonly page: Page;
  readonly root: Locator;
  readonly shopMenu: Locator;
  readonly products: Locator;
  readonly cart: Locator;
  readonly logout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = this.page.locator("#header");
    this.shopMenu = this.root.locator(".shop-menu");
    this.cart = this.shopMenu.getByRole("link", {
      name: NAVBAR_LINK_TEXTS.CART,
    });
    this.products = this.shopMenu.getByRole("link", {
      name: NAVBAR_LINK_TEXTS.PRODUCTS,
    });
    this.logout = this.shopMenu.getByRole("link", {
      name: NAVBAR_LINK_TEXTS.LOGOUT,
    })
  }

  async clickProducts() {
    await this.products.click();
  }

  async clickCart() {
    await this.cart.click();
  }

  async clickLogout() {
    await this.logout.click();
  }
}
