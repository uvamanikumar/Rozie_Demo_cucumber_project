import { Given , When , Then} from '@wdio/cucumber-framework';
// import { $ } from 'webdriverio';


When(/customer clicks the "Create Account" tab/, async () => {
  const tabElement = await $('//div[@class="amplify-tabs-item"][2]');
  await tabElement.click();

  const createAccountBtn = await $('//button[@class="amplify-button amplify-button--fullwidth amplify-button--medium amplify-button--primary"]');
  expect(await createAccountBtn.isDisplayed()).toBe(true);
});

Given(/customer enters the registered email address in Email field/, async () => {
  const emailField = await $('//input[contains(@placeholder, "Enter your Email")]');
  await emailField.setValue('yuva@rozie.ai');
  await browser.pause(5000);
});



Given(/the user enters a valid password/, async () => { 
    const pwdField = await $('//*[contains(@placeholder,"Enter your Password")]');
    await pwdField.setValue('yuva1234');
    await browser.pause(5000);
});

Given(/the user enters the same password in the confirm password field/, async () => {
  const CpwdField = await $('//*[contains(@placeholder,"Please confirm your Password")]');
  await CpwdField.setValue('yuva1234');
  await browser.pause(5000);
});


When(/the user clicks the "Create Account" button/, async () => {
    const clickloginBtn = await $('button.amplify-button--fullwidth.amplify-button--medium.amplify-button--primary');
    await clickloginBtn.click(); // Corrected the method call by adding ()
    await browser.pause(5000);
  });

Then(/the user should see an error message indicating "([^"]*)"/, async (errorMessage) => {
  const homePageTitle = await $('//div[text()=" An account with the given email already exists. "]');
  expect(await homePageTitle.getText()).toContain(errorMessage);   // Your code to verify the error message
});



