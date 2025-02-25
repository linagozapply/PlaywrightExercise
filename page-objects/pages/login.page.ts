import { Locator ,Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly loginForm: Locator;
  readonly signUpForm: Locator;
  readonly emailAddressLoginForm: Locator;
  readonly passwordLoginForm: Locator;
  readonly emailAddressSignUpForm: Locator;
  readonly passwordSignUpForm: Locator;
  constructor(page: Page) {
    super(page);
    this.loginForm = this.page.locator(".login-form");
      this.signUpForm = this.page.locator(".signup-form");
      this.emailAddressLoginForm = this.loginForm.locator("#email");
      this.passwordLoginForm = this.loginForm.locator("#password");
      this.emailAddressSignUpForm = this.signUpForm.locator("#email");
      this.passwordSignUpForm = this.signUpForm.locator("#password");
  }
}