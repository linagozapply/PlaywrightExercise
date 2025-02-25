import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { CHECKOUT_PAGE_TEXTS } from "../../constants/checkoutPageText";
import { checkoutCartInfoSection } from "../sections/checkoutCartInfo/checkoutCartInfo.section";

export class CheckoutPage extends BasePage {
  readonly checkoutInfo: Locator;
  readonly placeOrderButton: Locator;
  readonly cartInfoSection: checkoutCartInfoSection;

  constructor(page: Page) {
    super(page);
    this.checkoutInfo = this.page.getByTestId("account-created");

    this.cartInfoSection = new checkoutCartInfoSection(page);
    this.placeOrderButton = this.page.getByRole("link", {
      name: CHECKOUT_PAGE_TEXTS.PLACE_ORDER_BUTTON,
    });
  }

  async clickPlaceOderButton() {
    await this.placeOrderButton.click();
  }
}
