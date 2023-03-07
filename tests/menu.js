const { expect } = require('@playwright/test')
exports.PlaywrightDevPage = class PlaywrightDevPage {

constructor(page) {
    this.page = page;
    this.getSingInBtn =page.locator("header > div[class^=MuiContainer-root MuiContainer-maxWidthXl]",)
   //this.getSingInBtn = page.getByRole('button', { name:'Sign In' });
     //this.getSingInBtn = this.page.locator('header > div[class^=MuiContainer-root MuiContainer-maxWidthXl] > div[class^=MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2] > div[class=MuiGrid-root MuiGrid-item] > div[class=MuiBox-root] > button[class^=MuiButtonBase-root MuiButton-root')
     // this.getSingInBtn = this.page.locator('header > div.MuiContainer-root.MuiContainer-maxWidthXl > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-12.MuiGrid-grid-lg-5.MuiGrid-grid-xl-5 > div > div.MuiBox-root.jss3556.jss9.jss5 > button.MuiButtonBase-root.MuiButton-root.jss34.MuiButton-outlined.jss10.MuiButton-outlinedPrimary.jss36.MuiButton-disableElevation')
    //  this.getSingInBtn = this.page.locator('//*[@id="__next"]/div/header/div[1]/div/div[3]/div/div[2]/button[1]/span[1]')
    }
//*[@id="__next"]/div/header/div[1]/div/div[3]/div/div[2]/button[1]/span[1]
  // this.getSingInBtn = this.page.locator('header > div[class^=MuiContainer-root MuiContainer-maxWidthXl] > div[class^=MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2] > div[class=MuiGrid-root MuiGrid-item] > div[class=MuiBox-root] > button[class^=MuiButtonBase-root MuiButton-root')
  async goto() {
    await this.page.goto('https://menu.am/',{ waitUntil: 'networkidle' });
    console.log('GOTO')
   
  }
  async getStartedSingIn() {
    await this.page.waitForLoadState('networkidle');
    const t =await this.getSingInBtn.count();
    // await this.getSingInBtn.click();
    console.log(t)
    // await expect(page).toHaveURL('https://menu.am/am/auth-sign-in')
    // console.log("display")
  }
}