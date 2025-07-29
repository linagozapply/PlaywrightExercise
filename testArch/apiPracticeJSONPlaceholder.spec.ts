import { expect , test } from "@playwright/test";

test("Practice API calls with JSONPlaceholder", async ({ request }) => {
  // GET request
  const getResponse = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const getBody = await getResponse.json();
  expect(getResponse.status()).toBe(200);
  console.log("GET Response:", getBody);

  // POST request
  const postResponse = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "Test Post",
        body: "This is a test",
        userId: 1,
      },
    }
  );
  const postBody = await postResponse.json();
  expect(postResponse.status()).toBe(201); // 201 for created
  console.log("POST Response:", postBody);
});
