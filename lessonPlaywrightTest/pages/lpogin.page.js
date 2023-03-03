const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.myAccount = page.locator('#widget-navbar-217834 > ul > li:nth-child(6)'),
      this.loginButton = page.locator('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a'),
      this.loginContainer = page.locator('#content > div > div:nth-child(2) > div > div'),
      this.loginContainerTitle = page.locator('#content > div > div:nth-child(2) > div > div > h2'),
      this.newCustomerContainer = page.locator('#content > div > div:nth-child(1) > div > div'),
      this.newCustomerTitle = page.locator('#content > div > div:nth-child(1) > div > div > h2')
  }

  async hoverElement() {
    await this.myAccount.hover()
    await expect(this.loginButton).toBeVisible();
  }
  async clickMyAccount() {
    await this.loginButton.click();
  }

  async checkComponentes() {
    await expect(this.loginContainer).toBeVisible();
    await expect(this.loginContainerTitle).toHaveText(/Returning Customer/);
    await expect(this.newCustomerContainer).toBeVisible();
    await expect(this.newCustomerTitle).toHaveText(/New Customer/)
  }
}