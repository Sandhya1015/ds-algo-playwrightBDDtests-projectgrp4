// features/steps/Homesteps.js
const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect }            = require('@playwright/test');
const { HomePage }          = require('../pages/HomePage');

// ── Test credentials ──────────────────────────────────────────────────────────
const VALID_USER     = process.env.LOGIN_USER     || 'bunny@189.com';
const VALID_PASSWORD = process.env.LOGIN_PASSWORD || 'Password@777';

// ── Background Step ───────────────────────────────────────────────────────────
// ✅ Goes DIRECTLY to /home — no launch page click for every scenario
Given('User is on Home page', async function ({ page }) {
  this.homePage = new HomePage(page);
  await page.goto('/home');
  await page.waitForLoadState('domcontentloaded');
});

// ── E2E Flow Step (runs ONCE in dedicated scenario) ───────────────────────────
// NOTE: 'User is on Launch Page', 'User clicks on Get Started button',
//       'User lands on Home Page' are already in Launchsteps.js ✅

// ── Non-Functional / UI Steps ─────────────────────────────────────────────────

Then('the user should see {string} brand on the navbar', async function ({ page }, brand) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyNavbarBrandVisible(brand);
});

Then('the user should see {int} navigation links on Home page', async function ({ page }, count) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyNavLinkCount(count);
});

Then('the user should see the {string} link on Home page', async function ({ page }, linkText) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyLinkVisible(linkText);
});

Then('the user should see the Data Structures dropdown', async function ({ page }) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyDataStructuresDropdownVisible();
});

Then('the user should see {int} cards on Home page', async function ({ page }, count) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyCardCount(count);
});

Then('the user should see {int} Get Started buttons on Home page', async function ({ page }, count) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyGetStartedButtonCount(count);
});

Then('the user should see Data Structures Introduction text', async function ({ page }) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyDSIntroTitleVisible();
});

Then('the user should see the {string} card on Home page', async function ({ page }, cardName) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyCardVisible(cardName);
});

Then('the user should see Get Started button on the {string} card', async function ({ page }, cardName) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyGetStartedOnCard(cardName);
});

// ── Functional Steps - Unregistered User ──────────────────────────────────────

When('the unregistered user clicks Get Started on the {string} card', async function ({ page }, module) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.clickGetStartedOnCard(module);
});

When('the unregistered user selects {string} from Data Structures dropdown', async function ({ page }, module) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.selectFromDropdown(module);
});

Then('the alert message {string} should be shown', async function ({ page }, alertText) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.verifyNotLoggedInAlert();
});

// ── Functional Steps - Registered User ───────────────────────────────────────

Given('the user logs in with valid credentials from Home page', async function ({ page }) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.loginAs(VALID_USER, VALID_PASSWORD);
});

When('the user opens the Data Structures dropdown', async function ({ page }) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.clickDataStructuresDropdown();
});

Then('the user should see all dropdown options', async function ({ page }) {
  this.homePage = this.homePage || new HomePage(page);
  const options = ['Arrays', 'Linked List', 'Stack', 'Queue', 'Tree', 'Graph'];
  await this.homePage.verifyDropdownOptions(options);
});

When('the user clicks Get Started on the {string} card', async function ({ page }, module) {
  this.homePage = this.homePage || new HomePage(page);
  await this.homePage.clickGetStartedOnCard(module);
});

Then('the user should be navigated to the {string} page', async function ({ page }, urlSegment) {
  await expect(page).toHaveURL(new RegExp(urlSegment, 'i'));
});