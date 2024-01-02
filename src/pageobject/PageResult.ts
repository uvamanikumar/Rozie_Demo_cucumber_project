// resultPage.ts

import { expect } from 'chai';
import { capitalizeFirstLetter, getstate } from '../step/utils.ts';

class PageResult {
  private resultTitleSelector = (resultTitle: string) => `//h2[contains(text(),"${resultTitle}")]`;
  private startOverButtonSelector = '//button[contains(@class, "btn btn-rozie2 mr-2") and contains(text(), "Start over")]';

  async verifyResultPageTitle(expectedTitle: string) {
    const storedResultTitle = capitalizeFirstLetter(getstate("options"));
    const resultTitleElement = await $(this.resultTitleSelector(storedResultTitle));

    if (storedResultTitle !== undefined) {
      const resultTitleText = await resultTitleElement.getText();
      console.log("ResultPageTitle:", resultTitleText);
      expect(resultTitleText).to.contain(expectedTitle);

      if (storedResultTitle === resultTitleText) {
        console.log("Selected option and result title match!");
      } else {
        console.log("Selected option and result title do not match!");
      }
    } else {
      console.error("Error: Cannot find state options");
    }
  }

  async clickGiveMeAnotherButton() {
    const giveMeAnotherButton = await $('//button[normalize-space()="Give me another version"]');
    await giveMeAnotherButton.click();
    await browser.pause(5000);
    console.log("Give me another Version Button is working");
  }

  async clickStartOverButton() {
    const startOverButton = await $(this.startOverButtonSelector);
    await startOverButton.click();
    await browser.pause(5000);
    console.log("Start Over Button is working");
  }
}

export default new PageResult();
