import { BasePage } from "./base.page";
import { Page } from "@playwright/test";
import { NavBarSection } from "../sections/navbar/navbar.sestion";
export class HomePage extends BasePage {

  readonly navBarSection: NavBarSection;
  constructor(page: Page) {
    super(page);
    this.navBarSection = new NavBarSection(page);
  }

  async gotoHomePage() {
    await Promise.all([
      this.page.goto("/"),
      this.page.waitForLoadState("domcontentloaded"),
    ]);
  }
}
