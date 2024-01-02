import { Given, Then, When} from '@wdio/cucumber-framework';
import  LoginPage from '../pageobject/PageLogin.ts';
import PageTitleSelection from '../pageobject/PageTitleSelection.ts'
import PageAdditionalInfo from '../pageobject/PageAdditionalInfo.ts';
import PageResult from '../pageobject/PageResult.ts';
import { capitalizeFirstLetter, getstate } from '../step/utils.ts';

Given(/customer launch the (.*)/, async (url) => {
  await browser.url(url);
});

Given(/customer sees the login page/, async () => {
  expect(await LoginPage.isLoginButtonDisplayed()).toBe(true);
});

Given(/customer enters the email address in Email field/, async () => {
  await LoginPage.enterEmail('yuva@rozie.ai');
});

Given(/customer enters the password in password field/, async () => {
  await LoginPage.enterPassword('yuva1234');
});

When(/customer clicks "Login" button/, async () => {
  await LoginPage.clickLoginBtn();
});

Then(/customer lands on the (.*) page/, async (title) => {
  await LoginPage.assertHomePageTitle(title);
});

When(/after the customer chooses an option/, async () => {
  await PageTitleSelection.chooseRandomOption();
  await PageTitleSelection.clickContinueButton();
});

When(/they will navigate to the page titled "([^"]*)"/, async (title) => {
  await PageAdditionalInfo.verifyPageTitleContains(title);
});

When(/Customer provides additional information/, async () => {
  await PageAdditionalInfo.provideAdditionalInformation();
});

When(/customer should see the result/, async () => {
  const expectedTitle = capitalizeFirstLetter(getstate("options"));
  await PageResult.verifyResultPageTitle(expectedTitle);
});

When(/the user clicks the " Give me another version " button/, async () => {
  await PageResult.clickGiveMeAnotherButton();
});

When(/the user clicks the "Start over" button/, async () => {
  await PageResult.clickStartOverButton();
});

Given(/customer clicks the "Sign out" button/, async () => {
  await PageTitleSelection.clickSignOutButton();
});

Then(/customer should see the Sign in page of the application/, async () => {
  await PageTitleSelection.verifySignInPage();
});