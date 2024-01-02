// additionalInfoPage.ts

import { expect } from 'chai';
import topicselection from '../step/topicselection.ts';
import { random } from '../step/utils.ts';

class PageAdditionalInfo {
  private additionalInfoTitle = '//h2[text()="I just need a little bit more information"]';

  async verifyPageTitleContains(expectedTitle: string) {
    const pageTitle = await $(this.additionalInfoTitle);
    expect(await pageTitle.getText()).to.contain(expectedTitle);
    await browser.pause(5000);
  }

  private questionItemSelector = '//div[@class="question-item fade-in pt-2"]';
  private responseFieldSelector = '//input[@placeholder="Type your response here"]';
  private startWritingButtonSelector = '//button[normalize-space()="Start Writing"]';

  async provideAdditionalInformation() {
    const matchingElements = await $$(this.questionItemSelector);
    const length = matchingElements.length - 1;

    console.log("char count for this: " + length);
    console.log("random checking" + random(length));

    if (length > 0) {
      for (let i = 1; i <= length; i++) {
        const ansCount = await $$(`${this.questionItemSelector}[${i}]/descendant::span`).length;
        console.log("option count: " + ansCount);
        await browser.pause(2000);
        (await this.getAnswerElement(ansCount, i)).click();
        await browser.pause(2000);
      }
    } else {
      // If length is 0, set the email field
      const msgField = await $(this.responseFieldSelector);
      await msgField.setValue('short message');
    }

    const startWritingButton = await $(this.startWritingButtonSelector);
    await startWritingButton.click();
    await browser.pause(5000);
  }

  private async getAnswerElement(answerCount: number, questionIndex: number) {
    return topicselection.ans(answerCount, questionIndex);
  }
}

export default new PageAdditionalInfo();
