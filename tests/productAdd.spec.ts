import { expect } from "@playwright/test";
import { test } from "../fixtures/pageObject.fixture";
import { getRandomQuantity } from "../utilities/randomUtils";

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
    await productsPage.productsListingContainerSection.clickOnProductNumberX(2);
    // Expect product details page to have product name
    await expect(
      productDetailsPage.productDetailsSection.productName
    ).toBeVisible();

    // Step 4: Enter a random quantity between 1 and 20
    const quantity = getRandomQuantity();
    await productDetailsPage.productDetailsSection.updateItemsQuantity(
      quantity.toString()
    );
    await expect(
      productDetailsPage.productDetailsSection.itemsQuantityInput
    ).toHaveValue(quantity.toString());
    // Step 5: Add the product to the cart
    const cartAddConfirmationModal =
      await productDetailsPage.productDetailsSection.clickAddItemToCart();
    await productDetailsPage.waitForModal();
    await expect(cartAddConfirmationModal.root).toBeVisible();

    // Step 6: Proceed to cart page

    // Step 7: Proceed to checkout

    // Step 7: Register/Login modal should appear

    // Step 8 (Optional): Register a new user

    // Step 9 (Optional): Confirm the order and log out
  });
});
