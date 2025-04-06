import { test, expect, Page } from "@playwright/test";
import path from "path";

interface Results {
  username: string;
  password: string;
  comments: string;
  dropdownValue: string;
}

const results = {
  username: "testUser",
  password: "secret",
  comments: "Test comments",
  dropdownValue: "dd2",
};

const fillFields = async (page: Page, resultsObj: Results) => {
  //Locate and fill username input
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill(resultsObj.username);
  await expect(usernameInput).toHaveValue(resultsObj.username);

  //Locate and fill password field
  const password = page.locator("xpath=//input[@name='password']");
  await expect(password).toBeVisible();
  await password.fill(resultsObj.password);
  await expect(password).toHaveValue(resultsObj.password);

  //Locate and fill comments field
  const commentsField = page.locator("xpath=//textarea[@name='comments']");
  await expect(commentsField).toBeVisible();
  await commentsField.fill(resultsObj.comments);
  await expect(commentsField).toHaveValue(resultsObj.comments);

  //Locate and check the checkbox
  const checkboxEl = page.locator("xpath=//input[@value='cb2']");
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();

  //Locate and check the radio buttons
  const radioItemEl = page.locator("xpath=//input[@value='rd3']");
  await expect(radioItemEl).toBeVisible();
  await radioItemEl.check();
  await expect(radioItemEl).toBeChecked();

  //Locate and select option from dropdown
  const dropdown = page.locator("xpath=//select[@name='dropdown']");
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption(resultsObj.dropdownValue);
  await expect(dropdown).toHaveValue(resultsObj.dropdownValue);

  //Locate upload button and upload a file
  const uploadBtn = page.locator("xpath=//input[@type='file']");
  const filePath = path.resolve(__dirname, "./test.txt");

  await expect(uploadBtn).toBeVisible();
  await uploadBtn.setInputFiles(filePath);
};

// Wrap all tests within a describe block to improve structure.
test.describe("Test Basic HTML Form", () => {
  // Add a beforeEach hook to avoid repeating page.goto() in every test.
  test.beforeEach("Go to HTML Form Page", async ({ page }) => {
    const htmlFormUrl = process.env.BASE_HTML_RORM_URL as string;
    await page.goto(htmlFormUrl, { timeout: 60000 });
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Reset Form", async ({ page }) => {
    const canselBtn = page.locator("xpath=//input[@type='reset']");
    await expect(canselBtn).toBeVisible();
    await fillFields(page, results);
    await canselBtn.click();
    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator("xpath=//input[@value='cb3']")).toBeChecked();
  });

  // Finally, submit the form by locating the input with type="submit" and triggering a click action.
  test("Test Submit form selection", async ({ page }) => {
    const submitBtn = page.locator("xpath=//input[@type='submit']");
    await expect(submitBtn).toBeVisible();
    await fillFields(page, results);
    await submitBtn.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    const usernameVal = page.locator("xpath=//li[@id='_valueusername']");
    await expect(usernameVal).toHaveText(results.username);

    const dropdownVal = page.locator("xpath=//li[@id='_valuedropdown']");
    await expect(dropdownVal).toHaveText(results.dropdownValue);
  });
});
