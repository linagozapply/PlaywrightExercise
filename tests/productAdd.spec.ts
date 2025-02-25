import { expect } from "@playwright/test";
import { test } from "../fixtures/pageObject.fixture";

test.describe("Clothing Store - Critical User Flow", () => {



    test(`Complete purchase flow on the Clothing Store`, async ({
      homePage,
      productsPage,
      productDetailsPage,
    }) => {
      // Step 1: Navigate to the website
      await homePage.gotoHomePage();

      // Expect a Navbar "to contain" a Products link
      await expect(homePage.navBarSection.shopMenu).toContainText(" Products");

      // Step 2: Go to the Products section
      await homePage.navBarSection.clickProducts();
      // Expect products page to have products container
      await expect(
        productsPage.productsListingContainerSection.productsListingContainer
      ).toBeVisible();

      // Step 3: Choose the third product in the list
      await productsPage.productsListingContainerSection.clickOnProductNumberX(
        2
      );
      // Expect product details page to have product name
      await expect(
        productDetailsPage.productDetailsSection.productName
      ).toBeVisible();

      // Step 4: Enter a random quantity between 1 and 20
      const quantity = Math.floor(Math.random() * 20) + 1;
      await productDetailsPage.productDetailsSection.updateItemsQuantity(
        quantity.toString()
      );
      await expect(
        productDetailsPage.productDetailsSection.itemsQuantityInput
      ).toHaveValue(quantity.toString());
      // Step 5: Add the product to the cart
      const cartConfirmationModal =
        await productDetailsPage.productDetailsSection.clickAddItemToCart();
      await expect(cartConfirmationModal.cartModalBody).toBeVisible();

      // Step 6: Proceed to checkout
    });

});
