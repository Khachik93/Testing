const { expect } = require('@playwright/test')
exports.PlaywrightDevPage = class PlaywrightDevPage {

constructor(page) {
    this.page = page;
    this.getSingInBtn = page.getByRole('button', { name:'Sign In' });
    this.loginWindow = page.getByTitle('Մուտք');
  
  }

  async goto() {
    await this.page.goto('https://menu.am/',{ waitUntil: 'networkidle' });
    console.log('GOTO')
   
  }
  async getStartedSingIn() {
    await this.getSingInBtn.click();
    console.log("click true ==== ")
    await expect(this.loginWindow).toBeDisabled();
    console.log("display")
  }
}