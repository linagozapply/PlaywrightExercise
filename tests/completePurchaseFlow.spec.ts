import { expect } from "@playwright/test";
import { test } from "../fixtures/pageObject.fixture";
import { getRandomQuantity } from "../utilities/randomUtils";
import { NAVBAR_LINK_TEXTS } from "../constants/navbarLinksTexts";
import { generateNewClientData } from "../utilities/testDataGenerator";
import { cardInfo } from "../constants/paymentCardDetails"; //card payment info
import { SLUGS } from "../constants/slugs";

//Test case gets pages objects from fixture
//The test is written step by step, it provides a good visual representation of the flow
test("Complete purchase flow", async ({
  homePage,
  productsPage,
  productDetailsPage,
  cartPage,
  loginPage,
  signupPage,
  accountCreatedPage,
  checkoutPage,
  paymentPage,
  paymentCompletePage,
}) => {
  await test.step("Navigate to home page", async () => {
    await homePage.gotoHomePage();
    const expectedLink = NAVBAR_LINK_TEXTS.PRODUCTS;
    await expect(homePage.navBarSection.shopMenu).toContainText(expectedLink);
  });

  await test.step("Navigate to Products listing view", async () => {
    await homePage.navBarSection.clickProducts();
    await expect(
      productsPage.productsListingContainerSection.productsListingContainer
    ).toBeVisible();
  });

  await test.step("Select third product in the products listing", async () => {
    await productsPage.productsListingContainerSection.clickOnProductNumberX(2);
    await expect(
      productDetailsPage.productDetailsSection.productName
    ).toBeVisible();
  });

  await test.step("Enter quantity items", async () => {
    const quantity = getRandomQuantity();
    await productDetailsPage.productDetailsSection.updateItemsQuantity(
      quantity.toString()
    );
    await expect(
      productDetailsPage.productDetailsSection.itemsQuantityInput
    ).toHaveValue(quantity.toString());
  });

  await test.step("Click on add item to cart,validate confirmation modal and proceed to cart page", async () => {
    const cartAddConfirmationModal =
      await productDetailsPage.productDetailsSection.clickAddItemToCart();
    await productDetailsPage.waitForModal();
    await expect(cartAddConfirmationModal.root).toBeVisible();
    await cartAddConfirmationModal.clickViewCartLink();
    await expect(cartPage.cartItemsInfo).toBeVisible();
  });

  await test.step("Proceed to checkout, handle login modal and proceed to login page", async () => {
    const loginModal = await cartPage.clickProceedToCheckout();
    await cartPage.waitForModal();
    await expect(loginModal.root).toBeVisible();
    await loginModal.clickOnRegisteredLoginLink();
    await expect(loginPage.loginForm).toBeVisible();
  });

  await test.step("Fill in user details for new user on login page and proceed to signup", async () => {
    const name = generateNewClientData().firstName;
    const email = generateNewClientData().email;
    await loginPage.signup(name, email);
    await expect(signupPage.signupForm).toBeVisible();
  });

  await test.step("Register new user on signup page and proceed to home page", async () => {
    const clientData = generateNewClientData();
    await signupPage.registerNewUser(
      clientData.title,
      clientData.password,
      clientData.dayDateOfBirth,
      clientData.monthDateOfBirth,
      clientData.yearDateOfBirth,
      clientData.signupForNewsletter,
      clientData.receiveSpecialOffers,
      clientData.firstName,
      clientData.lastName,
      clientData.company,
      clientData.address,
      clientData.addressTwo,
      clientData.country,
      clientData.state,
      clientData.city,
      clientData.zipCode,
      clientData.phone
    );

    await expect(
      accountCreatedPage.createAccountConfirmationMessage
    ).toBeVisible();
    //Another validation should be added confirming that the user is created on database
    await accountCreatedPage.clickContinueButton();
    //clicking on continue button takes user to home page
    await expect(homePage.navBarSection.shopMenu).toBeVisible();
  });

  await test.step("Go to cart page and click on Proceed to checkout and land on payment page ", async () => {
    //I used to click on cart from home page the way user is going to do
    homePage.navBarSection.clickCart();
    await cartPage.clickProceedToCheckout();
    await expect(checkoutPage.checkoutInfo).toBeVisible();
    await expect(checkoutPage.placeOrderButton).toBeVisible();
    await checkoutPage.clickPlaceOderButton();
    await expect(paymentPage.root).toBeVisible();
  });

  await test.step("Fill up payment details on payment page and proceed to payment complete page", async () => {
    const { name, number, CVC, expirationMonth, expirationYear } = cardInfo;

    await paymentPage.fillPaymentDetails(
      name,
      number,
      CVC,
      expirationMonth,
      expirationYear
    );

    await expect(paymentPage.payConfirmOrderButton).toBeVisible();
    await paymentPage.clickPlaceOderButton();
    await expect(paymentCompletePage.orderPlacedHeader).toBeVisible();
    //Another validation should be that the order is created on the database
  });

  await test.step("Logout and got to Login page", async () => {
    await homePage.navBarSection.clickLogout();
    const currentURL = await homePage.getCurrentPageURL();
    expect(currentURL).toContain(SLUGS.LOGIN);
  });
});
