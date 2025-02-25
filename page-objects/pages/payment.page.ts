import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAYMENT_PAGE_TEXTS } from "../../constants/paymentPageText";

export class PaymentPage extends BasePage {
  readonly nameCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator;
  readonly expirationMonth: Locator;
  readonly expirationYear: Locator;
  readonly payConfirmOrderButton: Locator;
  constructor(page: Page) {
    super(page);
    this.nameCard = this.page.getByTestId("name-on-card");
    this.cardNumber = this.page.getByTestId("card-number");
    this.cvc = this.page.getByTestId("cvc");
    this.expirationMonth = this.page.getByTestId("expiry_month");
    this.expirationYear = this.page.getByTestId("expiry-year");
    this.payConfirmOrderButton = this.page.getByRole("link", {
      name: PAYMENT_PAGE_TEXTS.PAYMENT_CONFIRM_ORDER_BUTTON,
    });
  }

  async clickPlaceOderButton() {
    await this.payConfirmOrderButton.click();
  }
}
