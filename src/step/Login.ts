import { Given, Then, When} from '@wdio/cucumber-framework';
import topicselection from './topicselection.ts';
import { random } from './utils.ts';
// import { $ } from 'webdriverio';

Given(/customer launch the (.*)/, async (url) => {
    await browser.url(url);
    await browser.pause(10000);
});

Given(/customer sees the login page/, async () => {
  const signInTabTitle = await $('//div[@id="radix-id-9--cOiGZiQif-1-trigger-0"]');
  console.log('Is login button present:', await signInTabTitle.isDisplayed());
  await expect(await signInTabTitle.getText()).toEqual(" Sign In ");
});


Given(/customer enters the email address in Email field/,async ()=>{   
  const emailField = await $('//input[@class="amplify-input"]');
  await emailField.setValue('yuva@rozie.ai');
});

Given(/customer enters the password in password field/,async ()=>{   
    const pwdField = await $('//input[@class="amplify-field-group__control amplify-field__show-password amplify-input"]');
      await pwdField.setValue('yuva1234');
      await browser.pause(10000);
});

// When(/customer clicks "Login" button/,async ()=>{   
//     const clickloginBtn = await $('//button[@class="amplify-button amplify-button--fullwidth amplify-button--medium amplify-button--primary"]');
//     clickloginBtn.click;
//     await browser.pause(10000);
// });
When(/customer clicks "Login" button/, async () => {
    const clickloginBtn = await $('button.amplify-button--fullwidth.amplify-button--medium.amplify-button--primary');
    await clickloginBtn.click(); // Corrected the method call by adding ()
    await browser.pause(10000);
  });

Then(/customer lands on the (.*) page/, async (title)=> {
   const homePageTitle = await $('//h1[@class="card-title mt-5 mb-4 d-flex justify-content-center"]');
   expect(await homePageTitle.getText()).toContain(title);
});


When(/after the customer chooses an option/, async () => {
  // Generate a random number between 1 and 7
  const min = 1;
  const max = 7;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // console.log(`Random number between 1 and 7: ${randomNumber}`);
  (await topicselection.options(randomNumber)).click();
  await browser.pause(5000);
  const continueBtn = await $('//button[@type="submit"]');
  await continueBtn.click(); 
  await browser.pause(10000);

});

Then(/they will navigate to the page titled "([^"]*)"/, async (title) => {
  const AdditionalInfoTitle = await $('//h2[text()="I just need a little bit more information"]');
  expect(await AdditionalInfoTitle.getText()).toContain(title);   // verify the additionInfo page title
});


Then(/Customer provides additional information/, async () => {
  const matchingElements = await $$('.question-item.fade-in.pt-2');
  const length = matchingElements.length;
  console.log("uk is mass: " + length);
  console.log("random checking"+random(length));
  for(let i=1;i<=length;i++){
      const ansCount = await $$ (`//div[@class="question-item fade-in pt-2"][${i}]/descendant::span`).length;
      console.log("yuva is loose: " + ansCount);
      await browser.pause(2000);
      (await topicselection.ans(ansCount,i)).click();
  }
});




