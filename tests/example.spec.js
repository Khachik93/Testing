// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://buy.am/');
  await page.getByRole('link', { name: '0 ' }).click();
  await page.getByRole('link', { name: '\nՎերադառնալ ' }).click();
  await page.locator('div:nth-child(109) > .emotion--product-slider > .product-slider > .product-slider--container > div:nth-child(6) > .product--box > .box--content > .product--info > .product--details > .product-actions > .product--btn-container > .buybox--form > .buybox--button').click();
  await page.getByRole('link', { name: '1 ' }).click();
  await page.getByRole('button', { name: '' }).click();
});

