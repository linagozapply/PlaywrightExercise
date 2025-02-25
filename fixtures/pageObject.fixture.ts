import { mergeTests } from "@playwright/test";

import { test as homePageFixture } from "./home/homePageFixture";
import { test as productsPageFixture } from "./products/productsPageFixture";
import { test as productDetailsPageFixture } from "./productDetails/productDetailsPageFixture";

export const test = mergeTests(
  homePageFixture,
  productsPageFixture,
  productDetailsPageFixture
);
