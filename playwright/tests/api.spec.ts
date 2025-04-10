import { test, expect } from "@playwright/test";
import { REQUEST_URL, PRODUCT_ID } from "../test-data/constants";
import REQUEST_BODY from "../test-data/request_body.json";
import { request } from "http";

test.describe("Matchers example", async () => {
  test("toContainEqual example", async () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    expect(users).toContainEqual({ id: 1, name: "Alice" });
  });

  test("toEqual example", async () => {
    expect({ name: "Alice", age: 30 }).toEqual({
      name: "Alice",
      age: 30,
    });
  });

  test("toMatchObject example", async () => {
    const user = {
      id: 1,
      name: "Alice",
      age: 30,
    };

    expect(user).toMatchObject({ name: "Alice" });
  });

  test("toNHaveProperty example", async () => {
    const user = {
      profile: {
        name: "Alice",
      },
    };

    expect(user).toHaveProperty("profile.name");
    expect(user).toHaveProperty("profile.name", "Alice");
  });
});

test.describe("CRUD Operations", async () => {
  test("API Test - GET Products", async ({ request }) => {
    const response = await request.get(REQUEST_URL);

    const responseBody = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responseBody).toContainEqual(
      expect.objectContaining({
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });

  test("API Test 2 - GET Product", async ({ request }) => {
    const requestURL = `${REQUEST_URL}/${PRODUCT_ID}`;

    const response = await request.get(requestURL);

    const responseBody = await response.json();

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);

    expect(responseBody).toEqual(
      expect.objectContaining({
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      })
    );

    expect(responseBody).toMatchObject({ price: 695, category: "jewelery" });
    expect(responseBody).toHaveProperty("image");
    expect(responseBody).toHaveProperty("rating.rate");
  });

  test("API Test 3 - Create Product", async ({ request }) => {
    const response = await request.post(REQUEST_URL, {
      data: REQUEST_BODY,
      // data: {
      //   id: 21,
      //   title: "string",
      //   price: 0.1,
      //   description: "string",
      //   category: "string",
      //   image: "http://example.com",
      // },
    });

    const responseBody = await response.json();

    console.log(responseBody);

    expect(response.ok()).toBeTruthy();
    console.log(response.status());
    expect(response.status()).toBe(200);

    expect(responseBody).toEqual({
      id: 21,
      title: "Test title",
      price: 0.1,
      description: "test description",
      image: "http://example.com",
      category: "test category",
    });

    expect(responseBody).toHaveProperty("price", 0.1);
  });

  test("API Test 4 - UPDATE Product", async ({ request }) => {
    const response = await request.put(`${REQUEST_URL}/${PRODUCT_ID}`, {
      data: {
        id: 7,
        title: "test update title",
        price: 0.1,
        description: "test update description",
        category: "string update category",
        image: "http://example.com",
      },
    });

    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);
    expect(responseBody).toMatchObject({
      title: "test update title",
      price: 0.1,
      description: "test update description",
    });
  });

  test("API Test 5 - Delete Product", async ({ request }) => {
    const response = await request.delete(`${REQUEST_URL}/${PRODUCT_ID}`);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);
  });
});
