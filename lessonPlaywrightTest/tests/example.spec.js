
const { test, expect } = require('@playwright/test');
const { Page } = require('../pages/page');
const { LoginPage } = require('../pages/lpogin.page');


test.beforeEach(async ({ page }, testInfo) => {
  const mainPage = new Page(page);
  await mainPage.goto();
  await expect(page).toHaveTitle(/Your Store/);
});


test('Verify the my account field functionality @C8', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step("Click login button", async () => {
    await loginPage.hoverElement();
  })
  await test.step("Click login button", async () => {
    await loginPage.clickMyAccount();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  })
  await test.step("Checked  container.", async () => {
    await loginPage.checkComponentes();
  })
});













// test('Verify the my account field functionality @C8', async ({ page }) => {

//   await page.locator(selector.myAccount).hover();
//   await expect(page.locator(selector.loginButton)).toBeVisible();
//   await page.locator(selector.loginButton).click();
//   await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
//   await expect(page.locator(selector.loginContainer)).toBeVisible();
//   await expect(page.locator(selector.loginContainerTitle)).toHaveText(/Returning Customer/);
//   await expect(page.locator(selector.newCustomerContainer)).toBeVisible();
//   await expect(page.locator(selector.newCustomerTitle)).toHaveText(/New Customer/);

// })
