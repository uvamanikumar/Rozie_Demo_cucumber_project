import { Given, Then, When} from '@wdio/cucumber-framework';
import topicselection from './topicselection.ts';
import { capitalizeFirstLetter, getstate, random, setstate } from './utils.ts';
// import { $ } from 'webdriverio';

Given(/customer launch the (.*)/, async (url) => {
    await browser.url(url);
    await browser.pause(10000);
});

Given(/customer sees the login page/, async ()=> {
 const loginbtn = await $('//button[@class="amplify-button amplify-button--fullwidth amplify-button--medium amplify-button--primary"]');
 expect(await loginbtn.isDisplayed()).toBe(true);
});


Given(/customer enters the email address in Email field/,async ()=>{   
  const emailField = await $('//input[@class="amplify-input"]');
  await emailField.setValue('yuva@rozie.ai');
});

Given(/customer enters the password in password field/,async ()=>{   
    const pwdField = await $('//input[@class="amplify-field-group__control amplify-field__show-password amplify-input"]');
      await pwdField.setValue('yuva1234');
      await browser.pause(6000);
});

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
  let topic = await topicselection.options(randomNumber);
  topic.click();
  const selectedOption = await topic.getText();
  setstate("options", selectedOption);

  // Print the setstate value in the console
  console.log("Selected option:", selectedOption);

  await browser.pause(5000);
  const continueBtn = await $('//button[@type="submit"]');
  await continueBtn.click();
  await browser.pause(5000);
});



When(/they will navigate to the page titled "([^"]*)"/, async (title) => {
  const AdditionalInfoTitle = await $('//h2[text()="I just need a little bit more information"]');
  expect(await AdditionalInfoTitle.getText()).toContain(title);   // verify the additionInfo page title
});


When(/Customer provides additional information/, async () => {
  const matchingElements = await $$('.question-item.fade-in.pt-2');
  const length = matchingElements.length - 1;

  console.log("char count for this: " + length);
  console.log("random checking" + random(length));

  if (length > 0) {
    for (let i = 1; i <= length; i++) {
      const ansCount = await $$(`//div[@class="question-item fade-in pt-2"][${i}]/descendant::span`).length;
      console.log("option count: " + ansCount);
      await browser.pause(2000);
      (await topicselection.ans(ansCount, i)).click();
      await browser.pause(5000);
    }
  } else {
    // If length is 0, set the email field
    const msgField = await $('//input[@placeholder="Type your response here"]');
    await msgField.setValue('short message');
  }

  const StartWriting = await $('//button[normalize-space()="Start Writing"]');
  await StartWriting.click();
  await browser.pause(10000);
});


When(/customer should see the result/, async () => {
  const storedResultTitle = capitalizeFirstLetter(getstate("options"));
  const ResultTitle = await $(`//h2[contains(text(),'${storedResultTitle}')]`);

  const resultTitleText = await ResultTitle.getText();
  console.log("ResultPageTitle:", resultTitleText);

  if (storedResultTitle !== undefined) {
    expect(storedResultTitle).toContain(resultTitleText);

    if (storedResultTitle === resultTitleText) {
      console.log("Selected option and result title match!");
    } else {
      console.log("Selected option and result title do not match!");
    }
  } else {
    console.error("Error: Cannot find state options");
  }
});

When(/the user clicks the " Give me another version " button/, async () => {
  const giveMeAnotherButton = await $('//button[normalize-space()="Give me another version"]');
  await giveMeAnotherButton.click();
  await browser.pause(5000);
  console.log("Give me another Version Button is working");
});

When(/the user clicks the "Start over" button/, async () => {
  const startoverButton = await $('//button[contains(@class, "btn btn-rozie2 mr-2") and contains(text(), "Start over")]');
  await startoverButton.click();
  await browser.pause(5000);
  console.log("Start Over Button is working");
});




