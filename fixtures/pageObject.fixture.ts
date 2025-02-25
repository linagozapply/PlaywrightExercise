import { mergeTests } from "@playwright/test";

import { test as homePageFixture } from "./home/homePageFixture";
import { test as productsPageFixture } from "./products/productsPageFixture";
import { test as productDetailsPageFixture } from "./productDetails/productDetailsPageFixture";
import { test as cartPageFixture } from "./cart/cartPageFixture";
import { test as loginPageFixture } from "./login/loginPageFixture";
import { test as signupPageFixture } from "./signup/signupPageFixture";
import { test as paymentPageFixture } from "./payment/paymentPageFixture";
import { test as paymentCompletePageFixture } from "./paymentComplete/paymentCompletePageFixture";

export const test = mergeTests(
  homePageFixture,
  productsPageFixture,
  productDetailsPageFixture,
  cartPageFixture,
  loginPageFixture,
  signupPageFixture,
  paymentPageFixture,
  paymentCompletePageFixture
);
