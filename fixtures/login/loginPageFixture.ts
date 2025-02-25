import { test as base } from "@playwright/test";
import { LoginPage } from "../../page-objects/pages/login.page";

type LoginPageDefinition = {
  loginPage: LoginPage;
};
export const test = base.extend<LoginPageDefinition>({
  loginPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new LoginPage(page));
  },
});
