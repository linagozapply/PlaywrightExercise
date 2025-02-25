import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class AccountCreatedPage extends BasePage {
  readonly createAccountConfirmationMessage: Locator;
  readonly continueButton: Locator;
  constructor(page: Page) {
    super(page);
    this.createAccountConfirmationMessage =
      this.page.getByTestId("account-created");
    this.continueButton = this.page.getByTestId("continue-button");
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }
}
