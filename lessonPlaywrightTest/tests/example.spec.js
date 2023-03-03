
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
  await loginPage.hoverElement();
  test.step("click login button", async () => {
  await loginPage.clickMyAccount();
  
  })
});
