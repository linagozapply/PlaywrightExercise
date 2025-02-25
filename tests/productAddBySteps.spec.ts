import { expect } from "@playwright/test";
import { test } from "../fixtures/pageObject.fixture";
import { getRandomQuantity } from "../utilities/randomUtils";
import { NAVBAR_LINK_TEXTS } from "../constants/navbarLinksTexts";

test("Complete purchase flow", async ({
  homePage,
  productsPage,
  productDetailsPage,
}) => {
  await test.step("Navigate to home page", async () => {
    await homePage.gotoHomePage();
    const expectedLink = NAVBAR_LINK_TEXTS.PRODUCTS;
    await expect(homePage.navBarSection.shopMenu).toContainText(expectedLink);
  });

  await test.step("Navigate to Products section", async () => {
    await homePage.navBarSection.clickProducts();
    await expect(
      productsPage.productsListingContainerSection.productsListingContainer
    ).toBeVisible();
  });

  await test.step("Select third product", async () => {
    await productsPage.productsListingContainerSection.clickOnProductNumberX(2);
    await expect(
      productDetailsPage.productDetailsSection.productName
    ).toBeVisible();
  });

  await test.step("Enter quantity and add to cart", async () => {
    const quantity = getRandomQuantity();
    await productDetailsPage.productDetailsSection.updateItemsQuantity(
      quantity.toString()
    );
    await expect(
      productDetailsPage.productDetailsSection.itemsQuantityInput
    ).toHaveValue(quantity.toString());

    const cartAddConfirmationModal =
      await productDetailsPage.productDetailsSection.clickAddItemToCart();
    await productDetailsPage.waitForModal();
    await expect(cartAddConfirmationModal.root).toBeVisible();
  });

});
