import { test, expect, Page } from "@playwright/test";

interface Inputs {
  username: string;
  password: string;
}

const correctInputs: Inputs = {
  username: process.env.LOGIN_USERNAME as string,
  password: process.env.LOGIN_PASSWORD as string,
};

const incorrectUsernameInput: Inputs = {
  username: "incorrectUser",
  password: process.env.LOGIN_PASSWORD as string,
};

const incorrectPasswordInput: Inputs = {
  username: process.env.LOGIN_USERNAME as string,
  password: "incorrectPassword",
};

const fillFields = async (page: Page, inputs: Inputs) => {
  //Locate and fill username input
  const usernameInput = page.locator("xpath=//input[@id='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill(inputs.username);
  await expect(usernameInput).toHaveValue(inputs.username);

  //Locate and fill password field
  const password = page.locator("xpath=//input[@id='password']");
  await expect(password).toBeVisible();
  await password.fill(inputs.password);
  await expect(password).toHaveValue(inputs.password);
};

test.describe("Test Basic HTML Form", () => {
  test.beforeEach("Go to HTML Form Page", async ({ page }) => {
    const htmlFormUrl = process.env.TEST_PAGE_URL as string;
    await page.goto(htmlFormUrl, { timeout: 60000 });
  });

  test("Positive LogIn test", async ({ page }) => {
    const submitBtn = page.locator("xpath=//button[@id='submit']");
    await expect(submitBtn).toBeVisible();
    await fillFields(page, correctInputs);
    await submitBtn.click();
    await expect(page).toHaveURL(
      "https://practicetestautomation.com/logged-in-successfully/"
    );

    const title = page.locator("xpath=//h1[@class='post-title']");
    await expect(title).toHaveText("Logged In Successfully");

    const btnLogOut = page.locator("xpath=//a[text()='Log out']");
    await expect(btnLogOut).toBeVisible();
  });

  test("Negative username test", async ({ page }) => {
    const submitBtn = page.locator("xpath=//button[@id='submit']");
    await expect(submitBtn).toBeVisible();
    await fillFields(page, incorrectUsernameInput);
    await submitBtn.click();

    const errorMsg = page.locator("xpath=//div[@id='error']");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText("Your username is invalid!");
  });

  test("Negative password test", async ({ page }) => {
    const submitBtn = page.locator("xpath=//button[@id='submit']");
    await expect(submitBtn).toBeVisible();
    await fillFields(page, incorrectPasswordInput);
    await submitBtn.click();

    const errorMsg = page.locator("xpath=//div[@id='error']");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText("Your password is invalid!");
  });
});
