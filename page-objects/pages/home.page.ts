import { BasePage } from "./base.page";
import { Page } from "@playwright/test";
export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }



  async gotoHomePage() {
    await Promise.all([
      this.page.goto("/"),
      this.page.waitForLoadState("domcontentloaded"),
    ]);
  }
}
