// @ts-check
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('./menu');

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await playwrightDev.clickSignInBtn();
  await expect(page).toHaveURL('https://menu.am/am/auth-sign-in')
});
