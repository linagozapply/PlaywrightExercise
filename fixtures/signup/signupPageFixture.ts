import { test as base } from "@playwright/test";
import { SignupPage } from "../../page-objects/pages/signup.page";

type SignupPageDefinition = {
  signupPage: SignupPage;
};
export const test = base.extend<SignupPageDefinition>({
  signupPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new SignupPage(page));
  },
});
