import { test as base } from "@playwright/test";
import { AccountCreatedPage } from "../../page-objects/pages/accountCreate.page";

type AccountCreatePageDefinition = {
  accountCreatedPage: AccountCreatedPage;
};
export const test = base.extend<AccountCreatePageDefinition>({
  accountCreatedPage: async ({ page }, use) => {
    // Create a new home page object
    await use(new AccountCreatedPage(page));
  },
});
