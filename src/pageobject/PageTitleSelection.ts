import { setstate } from "../step/utils.ts";

class PageTitleSelection {
  async options(index: number) {
    // Implement logic to return the option at the specified index
    // Adjust this based on your actual implementation
    const optionLocator = `//span[@class="badge rounded-pill mr-2 mb-1"][${index}]`;
    return await $(optionLocator);
  }

  async chooseRandomOption() {
    const min = 1;
    const max = 7;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let topic = await this.options(randomNumber);
    topic.click();

    const selectedOption = await topic.getText();
    setstate("options", selectedOption);

    console.log("Selected option:", selectedOption);
    await browser.pause(3000);
  }

  async clickContinueButton() {
    const continueBtn = await $('//button[@type="submit"]');
    await continueBtn.click();
    await browser.pause(5000);
  }

  // Signout 

  private signOutButtonSelector = '//button[@class="btn btn-rozie1"]';
  private loginButtonSelector = '//button[@class="amplify-button amplify-button--fullwidth amplify-button--medium amplify-button--primary"]';

  async clickSignOutButton() {
    const signOutButton = await $(this.signOutButtonSelector);
    await signOutButton.click();
    await browser.pause(2000);
  }

  async verifySignInPage() {
    const loginButton = await $(this.loginButtonSelector);
    expect(await loginButton.isDisplayed()).toBe(true);
  }
}

export default new PageTitleSelection();
