
const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveTitle(/Your Store/);
});

test('Verify the my account field functionality', async ({ page }) => {
  await page.locator('#widget-navbar-217834 > ul > li:nth-child(6)').hover();
  const locator = page.locator('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a');
  await expect(locator).toBeVisible();
  test.step('Click on the Login button', async () => {
    await page.locator('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a').click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  })
})
