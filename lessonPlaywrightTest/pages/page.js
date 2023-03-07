const { expect } = require('@playwright/test');


exports.Page = class Page {
    constructor(page) { 
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/');
      }
}
