// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://buy.am/');
  await page.getByRole('link', { name: 'Սուպերմարկետ ' }).click();
  await page.getByRole('link', { name: 'Քարֆուր' }).click();
  await expect(page).toHaveURL('https://buy.am/hy/supermarket/carrefour')
});

