import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly loginForm: Locator;
  readonly signUpForm: Locator;
  readonly emailAddressLoginForm: Locator;
  readonly passwordLoginForm: Locator;
  readonly loginButton: Locator;
  readonly emailAddressSignUpForm: Locator;
  readonly nameSignUpForm: Locator;
  readonly signUpButton: Locator;
  constructor(page: Page) {
    super(page);
    //Login Form
    this.loginForm = this.page.locator(".login-form");
    this.emailAddressLoginForm = this.loginForm.getByTestId("login-email");
    this.passwordLoginForm = this.loginForm.getByTestId("login-password");
    this.loginButton = this.loginForm.getByTestId("login-button");
    // Sign Up Form
    this.signUpForm = this.page.locator(".signup-form");
    this.nameSignUpForm = this.signUpForm.getByTestId("signup-name");
    this.emailAddressSignUpForm = this.signUpForm.getByTestId("signup-email");
    this.signUpButton = this.signUpForm.getByTestId("signup-button");
  }
}
