
const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/Your Store/);
});


test('Verify the my account field functionality @C8', async ({ page }) => {
  await page.locator('#widget-navbar-217834 > ul > li:nth-child(6)').hover();
  const locator = page.locator('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a');
  await expect(locator).toBeVisible();
  await page.locator('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a').click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  const loginContainer = page.locator('#content > div > div:nth-child(2) > div > div');
  await expect(loginContainer).toBeVisible();
  const loginContainerTitle = page.locator('#content > div > div:nth-child(2) > div > div > h2');
  await expect(loginContainerTitle).toHaveText(/Returning Customer/);
  const newCustomerContainer = page.locator('#content > div > div:nth-child(1) > div > div');
  await expect(newCustomerContainer).toBeVisible();
  const newCustomerTitle = page.locator('#content > div > div:nth-child(1) > div > div > h2');
  await expect(newCustomerTitle).toHaveText(/New Customer/);
})

