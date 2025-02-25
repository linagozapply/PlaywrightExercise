import { test as base } from "@playwright/test";
import { HomePage } from "../../page-objects/pages/home.page";

type HomePageDefinition = {
  homePage: HomePage;
};
export const test = base.extend<HomePageDefinition>({
  homePage: async ({ page }, use) => {
    // Create a new home page object
    await use(new HomePage(page));
  },
});
