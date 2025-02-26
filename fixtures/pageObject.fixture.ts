import { mergeTests } from "@playwright/test";

import { test as accountCreatePageFixture } from "./accountCreate/accountCreatePageFixture";
import { test as cartPageFixture } from "./cart/cartPageFixture";
import { test as checkoutPageFixture } from "./checkout/checkoutPageFixture";
import { test as homePageFixture } from "./home/homePageFixture";
import { test as loginPageFixture } from "./login/loginPageFixture";
import { test as paymentPageFixture } from "./payment/paymentPageFixture";
import { test as paymentCompletePageFixture } from "./paymentComplete/paymentCompletePageFixture";
import { test as productDetailsPageFixture } from "./productDetails/productDetailsPageFixture";
import { test as productsPageFixture } from "./products/productsPageFixture";
import { test as signupPageFixture } from "./signup/signupPageFixture";
   
export const test = mergeTests(
  accountCreatePageFixture,
  cartPageFixture,
  checkoutPageFixture,
  homePageFixture,
  loginPageFixture,
  paymentPageFixture,
  paymentCompletePageFixture,
  productDetailsPageFixture,
  productsPageFixture,
  signupPageFixture
);
