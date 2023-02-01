// @ts-check
const { test, expect } = require('@playwright/test');
// const { TestRailClient } = require("testrail-integration");
// (async () => {
//   const options = {
//     username: "khachik_m@instigatemobile.com",
//     password: "/HhVpupcyq1uTxFDJrri",
//     url: "https://testgsfhfgsjgfrgg.testrail.io"
//   }
//   const client = new TestRailClient(options);
//   const res = await client.getTests(1);
//   console.log(JSON.stringify(res));
// })();




test.beforeAll(async ({ browser }) => {
 const page = await browser.newPage();
  await page.goto('https://buy.am/');
  
  await page.getByRole('link', { name: '0 ' }).click();
  await expect(page.getByText('Ձեր զամբյուղը դատարկ է')).toContainText('Ձեր զամբյուղը դատարկ է');
  await page.getByRole('link', { name: '\nՎերադառնալ ' }).click();
  await expect(page.locator('.container--ajax-cart off-canvas is--right is--active ')).toBeHidden();
  await page.locator('.container--ajax-cart off-canvas is--right is--active ').isHidden();
  await page.locator('div:nth-child(109) > .emotion--product-slider > .product-slider > .product-slider--container > div:nth-child(6) > .product--box > .box--content > .product--info > .product--details > .product-actions > .product--btn-container > .buybox--form > .buybox--button').click();
  await page.getByRole('link', { name: '1 ' }).click();
  await page.getByRole('button', { name: '' }).click();

 
});



  // const client = new TestRailClient(options);
  // const res = await client.getTests(1);
  // console.log(JSON.stringify(res));

  // await page.getByRole('link', { name: '0 ' }).click();
  // await expect(page.getByText('Ձեր զամբյուղը դատարկ է')).toContainText('Ձեր զամբյուղը դատարկ է');
  // await page.getByRole('link', { name: '\nՎերադառնալ ' }).click();
  // await expect(page.locator('.container--ajax-cart off-canvas is--right is--active ')).toBeHidden();
  // await page.locator('.container--ajax-cart off-canvas is--right is--active ').isHidden();
  // await page.locator('div:nth-child(109) > .emotion--product-slider > .product-slider > .product-slider--container > div:nth-child(6) > .product--box > .box--content > .product--info > .product--details > .product-actions > .product--btn-container > .buybox--form > .buybox--button').click();
  // await page.getByRole('link', { name: '1 ' }).click();
  // await page.getByRole('button', { name: '' }).click();



