import { test, expect } from "@playwright/test";

// Wrap all tests within a describe block to improve structure.
test.describe("Testpages herokuapp testing", () => {
  // Add a beforeEach hook to avoid repeating page.goto() in every test.
  test.beforeEach(
    "Navigate to the testpages.heroukuapp page",
    async ({ page }) => {
      const url = process.env.TESTPAGES_URL as string;
      await page.goto(url, { timeout: 60000 });
    }
  );

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test username field", async ({ page }) => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("testUser");
    await expect(usernameInput).toHaveValue("testUser");
  });

  test("Test Checkbox selection", async ({ page }) => {
    const checkboxEl = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  // After the checkbox test, add a similar test for Radio Items.
  test("Test Radio Items selection", async ({ page }) => {
    const radioItemEl = page.locator("xpath=//input[@value='rd3']");
    await expect(radioItemEl).toBeVisible();
    await radioItemEl.check();
    await expect(radioItemEl).toBeChecked();
  });

  test("Select dropdown option", async ({ page }) => {
    const dropdown = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("dd2");
    await expect(dropdown).toHaveValue("dd2");
  });

  // Locate the Password field, fill it with a test value, and validate the input.
  test("Locate the Password field", async ({ page }) => {
    const password = page.locator("xpath=//input[@name='password']");
    await expect(password).toBeVisible();
    await password.fill("0000");
    await expect(password).toHaveValue("0000");
  });

  // Locate the TextArea field, fill it with a test value, and validate the input.
  test(" Locate the TextArea field", async ({ page }) => {
    const textArea = page.locator("xpath=//textarea[@name='comments']");
    await expect(textArea).toBeVisible();
    await textArea.fill("test");
    await expect(textArea).toHaveValue("test");
  });

  // Finally, submit the form by locating the input with type="submit" and triggering a click action.
  test("Test Submit form selection", async ({ page }) => {
    const submitForm = page.locator("xpath=//input[@type='submit']");
    await expect(submitForm).toBeVisible();
    await submitForm.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    const headingTwo = page.getByRole("heading", { name: "Submitted Values" });
    await expect(headingTwo).toBeVisible();
  });
});
