import { Page } from "@playwright/test";
import { NavBarSection } from "../sections/navbar/navbar.sestion";

export class BasePage {
  readonly page: Page;
  readonly navBarSection: NavBarSection;
  constructor(page: Page) {
    this.page = page;
    this.navBarSection = new NavBarSection(page);
    //should have footer section here
  }

  async waitForModal() {
    await this.page.waitForSelector(".modal", {
      state: "visible",
      timeout: 2000,
    });
  }
  async goto(url: string) {
    await this.page.goto(url);
  }

  async getCurrentPageURL() {
    return this.page.url();
  }
}
