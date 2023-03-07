const { expect } = require('@playwright/test')

exports.PlaywrightDevPage = class PlaywrightDevPage {

  constructor(page) {
    this.page = page;
    this.closeModal = page.getByRole('button').first();
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });
  }

  async goto() {
    await this.page.goto('https://menu.am/', { waitUntil: 'networkidle' });
    console.log('GOTO')

  }
  async getStarted() {
    await this.closeModal.click();
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.clickSignInBtn();
  }
}