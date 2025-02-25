import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { PAYMENT_PAGE_TEXTS } from "../../constants/paymentPageText";

export class PaymentCompletePage extends BasePage {
  readonly orderPlacedHeader: Locator;
  readonly downloadInvoiceButton: Locator;
  readonly continueButton: Locator;
  constructor(page: Page) {
    super(page);
    this.orderPlacedHeader = this.page.getByTestId("order-placed");
    this.continueButton = this.page.getByTestId("continue-button");

    this.downloadInvoiceButton = this.page.getByRole("link", {
      name: PAYMENT_PAGE_TEXTS.DOWNLOAD_INVOICE_BUTTON,
    });
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickDownloadInvoiceButton() {
    await this.downloadInvoiceButton.click();
  }
}
