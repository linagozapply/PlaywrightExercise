import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { SLUGS } from "../../constants/slugs";

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

  async gotoLoginPage() {
    await Promise.all([
      this.page.goto(SLUGS.LOGIN),
      this.page.waitForLoadState("domcontentloaded"),
    ]);
  }
  async login(email: string, password: string) {
    await this.emailAddressLoginForm.fill(email);
    await this.passwordLoginForm.fill(password);
    await this.loginButton.click();
  }

  async signup(name: string, email: string) {
    await this.nameSignUpForm.fill(name);
    await this.emailAddressSignUpForm.fill(email);
    await this.signUpButton.click();
  }
}
