import { Given, Then, When} from '@wdio/cucumber-framework';
// import { $ } from 'webdriverio';

Given(/customer launch the (.*)/, async (url) => {
    await browser.url(url);
    await browser.pause(10000);
});

Given(/customer sees the login page/, async ()=> {
    // Your code to verify that the login page is displayed
    // For example, using WebdriverIO's $ function with a CSS selector:
   const loginbtn = await $('//button[@class="amplify-button amplify-button--fullwidth amplify-button--medium amplify-button--primary"]');
   expect(await loginbtn.isDisplayed()).toBe(true);
    //  expect(await browser.getUrl()).toEqual("https://www.ghostwriter.rozie.ai/")
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


