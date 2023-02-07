exports.PlaywrightDevPage = class PlaywrightDevPage {

constructor(page) {
    this.page = page;
    // this.getSingInBtn = page.locator("header > div[class^=MuiContainer-root] > div[class^=MuiGrid-root] > div[class=MuiBox-root] > div[class=MuiBox-root] > button[class=MuiButtonBase-root] > span[class=MuiButton-label]");
    this.getSingInBtn = page.getByRole('button', { name:'Sign In' });
    this.loginWindow = page.locator('div').toHaveClass('MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthXs MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded')
  }

  async goto() {
    await this.page.goto('https://menu.am/');
    console.log('GOTO')
   
  }
  async getStartedSingIn() {
    await this.getSingInBtn.click();
    await expect(this.loginWindow).isDisabled();
  }
}