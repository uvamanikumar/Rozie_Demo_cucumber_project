import { Given, Then, When} from '@wdio/cucumber-framework';
// import { $ } from 'webdriverio';

// Import necessary functions and setup for your testing framework

When('customer lands on the (.*) page', async (title)=> {
    const homePageTitle = await $('//h1[@class="card-title mt-5 mb-4 d-flex justify-content-center"]');
    expect(await homePageTitle.getText()).toContain(title);
});

Given('customer clicks the "Sign out" button', async () => {
  // Implement code to locate and click the "Sign out" button
  const signOutButton = await $("//button[@class='btn btn-rozie1']");
  await signOutButton.click();
  await browser.pause(5000);
});

Then('customer should see the Sign in page of the application', async () => {
    const loginbtn = await $('//button[@class="amplify-button amplify-button--fullwidth amplify-button--medium amplify-button--primary"]');
    expect(await loginbtn.isDisplayed()).toBe(true);
     //  expect(await browser.getUrl()).toEqual("https://www.ghostwriter.rozie.ai/")
 });

