import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { SLUGS } from "../../constants/slugs";

export class SignupPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoSignupPage() {
    await Promise.all([
      this.page.goto(SLUGS.SIGNUP),
      this.page.waitForLoadState("domcontentloaded"),
    ]);
  }
}
