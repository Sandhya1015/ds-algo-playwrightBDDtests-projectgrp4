// features/steps/Launchsteps.js
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect }    = require('@playwright/test');
const LaunchPage    = require('../pages/LaunchPage');

Given('The user has browser open', async function ({ page }) {
  this.launchPage = new LaunchPage(page);
});

Given('User is on Launch Page', async function ({ page }) {
  this.launchPage = new LaunchPage(page);
  await this.launchPage.navigate();
  const isLoaded = await this.launchPage.isLaunchPageLoaded();
  expect(isLoaded).toBe(true);
});

When('The user enters the correct dsAlgo url', async function ({ page }) {
  await this.launchPage.navigate();
});

When('User clicks on Get Started button', async function ({ page }) {
  await this.launchPage.clickGetStarted();
});

Then('The user should be able to land on dsAlgo portal', async function ({ page }) {
  const isLoaded = await this.launchPage.isLaunchPageLoaded();
  expect(isLoaded).toBe(true);
});

Then('User should see 1 button in launch page', async function ({ page }) {
  const count = await this.launchPage.getButtonCount();
  expect(count).toBe(1);
});

Then('Button should be in enabled state', async function ({ page }) {
  const isEnabled = await this.launchPage.isGetStartedButtonEnabled();
  expect(isEnabled).toBe(true);
});

Then('Button name should be {string}', async function ({ page }, expectedName) {
  const actualName = await this.launchPage.getButtonText();
  expect(actualName.trim()).toBe(expectedName);
});

Then('Page title should be {string}', async function ({ page }, expectedTitle) {
  const actualTitle = await this.launchPage.getPageTitle();
  expect(actualTitle).toContain(expectedTitle);
});

Then('User should see the text {string}', async function ({ page }, expectedText) {
  const heading  = await this.launchPage.getHeadingText();
  const subtext  = await this.launchPage.getSubText();
  const fullText = `${heading} ${subtext}`;
  expect(fullText).toContain('Preparing for the Interviews');
});

Then('User lands on Home Page', async function ({ page }) {
  const isHome = await this.launchPage.isOnHomePage();
  expect(isHome).toBe(true);
});