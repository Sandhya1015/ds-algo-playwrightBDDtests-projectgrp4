// features/steps/Loginsteps.js
const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect }            = require('@playwright/test');
const { LoginPage }         = require('../pages/LoginPage');
const { getLoginData }      = require('../../testdata/loginData');
require('dotenv').config();

// ── Background Steps ──────────────────────────────────────────────────────────
// NOTE: 'User is on Home page' is defined in Homesteps.js ✅

When('User clicks the Sign In link on Home page', async function ({ page }) {
  this.loginPage = new LoginPage(page);
  await this.loginPage.clickSignInNavLink();
});

// ── Non-Functional Steps ──────────────────────────────────────────────────────

Then('User should see Username Text with a textbox', async function ({ page }) {
  this.loginPage = this.loginPage || new LoginPage(page);
  await this.loginPage.verifyUsernameLabelAndInput();
});

Then('User should see Password Text with a textbox', async function ({ page }) {
  await this.loginPage.verifyPasswordLabelAndInput();
});

Then('User should see a Login Button', async function ({ page }) {
  await this.loginPage.verifyLoginButtonVisible();
});

Then('User should see {string} below Login Button', async function ({ page }, expectedText) {
  await this.loginPage.verifyRegisterTextAndLink();
});

Then('The cursor should be in the username field', async function ({ page }) {
  await this.loginPage.verifyCursorOnUsernameField();
});

// ── Functional Steps ──────────────────────────────────────────────────────────

Then('The user should be able to land on login page', async function ({ page }) {
  this.loginPage = this.loginPage || new LoginPage(page);
  await this.loginPage.verifyOnLoginPage();
});

When('The user presses the Tab key', async function ({ page }) {
  this.loginPage = this.loginPage || new LoginPage(page);
  await this.loginPage.pressTab();
});

Then('The focus should move in correct order', async function ({ page }) {
  await this.loginPage.verifyTabNavigation();
});

// ── Given: Navigate to login page directly ────────────────────────────────────

Given('User is on login page', async function ({ page }) {
  this.loginPage = this.loginPage || new LoginPage(page);
  await this.loginPage.navigateToLogin();
});

// ── Excel Data Driven Steps ───────────────────────────────────────────────────

When('User logs in with credentials from excel row {string}', async function ({ page }, rowKey) {
  this.loginPage = this.loginPage || new LoginPage(page);
  // ✅ Read credentials from Excel file
  const { username, password } = getLoginData(rowKey);
  console.log(`\n📊 Excel row: ${rowKey} | User: ${username}`);
  await this.loginPage.login(username, password);
});

Then('"Invalid Username and Password" error should be displayed', async function ({ page }) {
  await this.loginPage.verifyInvalidCredentialsError();
});

Then('Error message should be displayed on login page', async function ({ page }) {
  await this.loginPage.verifyErrorMessageDisplayed();
});

When('User clicks Login without entering credentials', async function ({ page }) {
  this.loginPage = this.loginPage || new LoginPage(page);
  await this.loginPage.clickLoginWithoutCredentials();
});

Then('Please fill out this field message should be displayed', async function ({ page }) {
  await this.loginPage.verifyEmptyFieldValidation();
});

Then('User should be redirected to Home page after login', async function ({ page }) {
  await this.loginPage.verifySuccessfulLogin();
});

Then('User should see logged in confirmation message', async function ({ page }) {
  await this.loginPage.verifyLoggedInMessage();
});

// ── Sign Out Steps — uses Excel valid_credentials ─────────────────────────────

Given('Registered user is logged in and on Home page', async function ({ page }) {
  this.loginPage = new LoginPage(page);

  // ✅ Read credentials from Excel — consistent with data-driven approach
  const { username, password } = getLoginData('valid_credentials');
  console.log(`\n📊 Sign out test — logging in as: ${username}`);

  await page.goto('/login');
  await page.waitForLoadState('domcontentloaded');
  await this.loginPage.login(username, password);
  await page.waitForLoadState('domcontentloaded');

  console.log('URL after login:', page.url());

  if (!page.url().includes('/home')) {
    throw new Error(
      `Login failed — still on: ${page.url()}\n` +
      `Check valid_credentials row in testdata/loginData.xlsx`
    );
  }
});

When('The logged in user clicks Sign out', async function ({ page }) {
  // ✅ Try multiple sign out selectors
  const selectors = [
    'a[href="/logout"]',
    'a:has-text("Sign out")',
    'a:has-text("Logout")',
    'button:has-text("Sign out")',
  ];

  for (const selector of selectors) {
    const el    = page.locator(selector);
    const count = await el.count();
    if (count > 0) {
      await el.first().waitFor({ state: 'visible', timeout: 10000 });
      await el.first().click();
      await page.waitForLoadState('domcontentloaded');
      return;
    }
  }
  throw new Error('Sign out button not found — check nav after login');
});

Then('User should be redirected to Home page with sign out confirmation', async function ({ page }) {
  await this.loginPage.verifySignedOut();
});