import { Then, When } from "@wdio/cucumber-framework";

When(/the user clicks star to give ratings/, async () => {
    const Stars = await $('//span[@style="cursor: pointer;"][4]');
    await Stars.click();
    await browser.pause(5000);
  });

  Then(/Customer should see "([^"]*)" popup/, async (title) => { 
        const SendFeedbackTitle = await $('//h4[@id="modal-basic-title"]');
        expect(await SendFeedbackTitle.getText()).toContain(title); 
    const feedbackmsg = await $('/html/body/ngb-modal-window/div/div/div[2]/div[2]/textarea');
      await feedbackmsg.setValue('Test message');
      await browser.pause(6000);
      const submitBtn = await $('//button[contains(@class, "btn btn-rozie2") and contains(text(), "Submit")]');
      submitBtn.click();
      await browser.pause(3000); 
  }); 