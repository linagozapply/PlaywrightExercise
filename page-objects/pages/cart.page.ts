import { Locator ,Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
    readonly cartItemsContainer: Locator;
    readonly cartItemsInfo: Locator
    readonly checkoutButton: Locator
    constructor(page: Page) {
        super(page);
        this.cartItemsContainer = this.page.locator("#cart_items");
        this.cartItemsInfo = this.cartItemsContainer.locator("#cart_info");
        this.checkoutButton = this.page.locator(".check_out");
    }

}