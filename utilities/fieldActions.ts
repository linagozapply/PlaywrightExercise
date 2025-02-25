import { Locator } from "@playwright/test";

export const FieldActions = {
  async fillInputField(fieldLocator: Locator, text: string) {
    await fieldLocator.waitFor();
    await fieldLocator.clear();
    await fieldLocator.fill(text);
  },
};