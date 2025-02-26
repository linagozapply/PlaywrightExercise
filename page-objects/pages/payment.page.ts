import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAYMENT_PAGE_TEXTS } from "../../constants/paymentPageText";
import { th } from "@faker-js/faker";

export class PaymentPage extends BasePage {
  readonly root: Locator;
  readonly nameCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator;
  readonly expirationMonth: Locator;
  readonly expirationYear: Locator;
  readonly payConfirmOrderButton: Locator;
  constructor(page: Page) {
    super(page);
    this.root = this.page.locator("#cart_items");
    this.nameCard = this.page.getByTestId("name-on-card");
    this.cardNumber = this.page.getByTestId("card-number");
    this.cvc = this.page.getByTestId("cvc");
    this.expirationMonth = this.page.getByTestId("expiry-month");
    this.expirationYear = this.page.getByTestId("expiry-year");
    this.payConfirmOrderButton = this.page.getByTestId("pay-button");
  }

  async clickPlaceOderButton() {
    await this.payConfirmOrderButton.click();
  }

  async fillPaymentDetails(
    nameCard: string,
    cardNumber: string,
    cvc: string,
    expirationMonth: string,
    expirationYear: string
  ) {
    await this.nameCard.fill(nameCard);
    await this.cardNumber.fill(cardNumber);
    await this.cvc.fill(cvc);
    await this.expirationMonth.fill(expirationMonth);
    await this.expirationYear.fill(expirationYear);
  }
}
