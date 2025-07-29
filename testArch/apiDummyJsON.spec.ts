import { expect , test } from "@playwright/test";

test("Validate products from API", async ({ request }) => {
  // GET request
  const getResponse = await request.get("https://dummyjson.com/products");

  const getBody = await getResponse.json();
    console.log("GET Response:", getBody);

  expect(getResponse.status()).toBe(200);
});

