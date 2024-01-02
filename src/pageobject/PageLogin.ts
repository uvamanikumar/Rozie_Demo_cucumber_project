// LoginPage.ts

export class LoginPage {
    private loginButtonSelector = '//button[@class="amplify-button amplify-button--fullwidth amplify-button--medium amplify-button--primary"]';
    private emailFieldSelector = '//input[@class="amplify-input"]';
    private passwordFieldSelector = '//input[@class="amplify-field-group__control amplify-field__show-password amplify-input"]';
    private loginBtnSelector = 'button.amplify-button--fullwidth.amplify-button--medium.amplify-button--primary';
    private homePageTitleSelector = '//h1[@class="card-title mt-5 mb-4 d-flex justify-content-center"]';
  
    public async isLoginButtonDisplayed(): Promise<boolean> {
        const loginButton = await $(this.loginButtonSelector);
        return await loginButton.isDisplayed();
      }
      
    public async enterEmail(email: string): Promise<void> {
      const emailField = await $(this.emailFieldSelector);
      await emailField.setValue(email);
    }
  
    public async enterPassword(password: string): Promise<void> {
      const pwdField = await $(this.passwordFieldSelector);
      await pwdField.setValue(password);
    }
  
    public async clickLoginBtn(): Promise<void> {
      const clickloginBtn = await $(this.loginBtnSelector);
      await clickloginBtn.click();
      await browser.pause(5000);
    }
  
    public async assertHomePageTitle(title: string): Promise<void> {
      const homePageTitle = await $(this.homePageTitleSelector);
      expect(await homePageTitle.getText()).toContain(title);
    }
  }
  
  export default new LoginPage();
  