import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { ProductsListingContainerSection } from "../sections/products/productslistingContainer.section";

export class ProductsPage extends BasePage {
    readonly productsListingContainerSection :ProductsListingContainerSection;
    constructor(page: Page) {
        super(page);
        this.productsListingContainerSection = new ProductsListingContainerSection(page);
    }

    async gotoProductsPage() {
        await Promise.all([
        this.page.goto("/products"),
        this.page.waitForLoadState('domcontentloaded')]); 
    }
}