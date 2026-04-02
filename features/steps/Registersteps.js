// features/steps/Registersteps.js
const { createBdd }         = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect }            = require('@playwright/test');
const { RegisterPage }      = require('../pages/RegisterPage');

// ── Shared test data ──────────────────────────────────────────────────────────
const VALID_PASSWORD = 'TestPass@123';

// ── Background Steps ──────────────────────────────────────────────────────────
// NOTE: 'User is on Home page' is defined in Homesteps.js ✅

When('User clicks the Register link on Home page', async function ({ page }) {
  this.registerPage = new RegisterPage(page);
  await this.registerPage.clickRegisterNavLink();
});

Then('User should land on the Register page', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.verifyOnRegisterPage();
});

// ── Non-Functional Steps ──────────────────────────────────────────────────────

Then('User should see the title {string} on Register page', async function ({ page }, title) {
  await this.registerPage.verifyPageTitle(title);
});

Then('User should see the Register button on the page', async function ({ page }) {
  await this.registerPage.verifyRegisterButtonVisible();
});

Then('The Register button should be in enabled state', async function ({ page }) {
  await this.registerPage.verifyRegisterButtonEnabled();
});

Then('The cursor should be focused on Username field', async function ({ page }) {
  await this.registerPage.verifyCursorOnUsernameField();
});

Then('User should see the Username input field', async function ({ page }) {
  await this.registerPage.verifyUsernameFieldVisible();
});

Then('User should see the Password input field', async function ({ page }) {
  await this.registerPage.verifyPasswordFieldVisible();
});

Then('User should see the Password confirmation field with a textbox', async function ({ page }) {
  await this.registerPage.verifyConfirmPasswordFieldVisible();
});

Then('User should see the rule text {string}', async function ({ page }, expectedText) {
  await this.registerPage.verifyTextOnPage(expectedText);
});

// ── Functional Steps — Validation ─────────────────────────────────────────────

When('User clicks Register button with all fields empty', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.clickRegisterButtonEmpty();
});

When('User enters password with username field left empty', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.fillPassword(VALID_PASSWORD);
  await this.registerPage.fillConfirmPassword(VALID_PASSWORD);
});

When('User enters username and a password with only numbers', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.fillUsername(`testuser_${Date.now()}`);
  await this.registerPage.fillPassword('12345678');
  await this.registerPage.fillConfirmPassword('12345678');
});

When('User enters username and a password with only 5 characters', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.fillUsername(`testuser_${Date.now()}`);
  await this.registerPage.fillPassword('Ab@12');
  await this.registerPage.fillConfirmPassword('Ab@12');
});

When('User enters username and a password with more than 150 characters', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.fillUsername(`testuser_${Date.now()}`);
  await this.registerPage.fillPassword('a'.repeat(151));
  await this.registerPage.fillConfirmPassword('a'.repeat(151));
});

When('User enters username and mismatched passwords', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.fillUsername(`testuser_${Date.now()}`);
  await this.registerPage.fillPassword(VALID_PASSWORD);
  await this.registerPage.fillConfirmPassword('DifferentPass@999');
});

When('User enters username and a password with only letters exceeding 150 characters', async function ({ page }) {
  this.registerPage = this.registerPage || new RegisterPage(page);
  await this.registerPage.fillUsername(`testuser_${Date.now()}`);
  await this.registerPage.fillPassword('a'.repeat(151));
  await this.registerPage.fillConfirmPassword('a'.repeat(151));
});

When('User clicks the Register submit button', async function ({ page }) {
  await this.registerPage.submitRegisterForm();
});

Then('The error message {string} should be displayed', async function ({ page }, errorText) {
  await this.registerPage.verifyEmptyFieldError();
});

Then('The error message {string} should be displayed for Password field', async function ({ page }, errorText) {
  await this.registerPage.verifyPasswordEmptyError();
});

Then('Invalid input error should be displayed on Register page', async function ({ page }) {
  await this.registerPage.verifyInvalidInputError();
});

Then('User should see the warning {string}', async function ({ page }, warningText) {
  await this.registerPage.verifyPasswordMismatchError();
});

// ── Functional Steps — Successful Registration ────────────────────────────────

When('User enters valid registration details and clicks Register', async function ({ page }) {
  this.registerPage   = this.registerPage || new RegisterPage(page);
  const uniqueUser    = `testuser_${Date.now()}`;
  this.registeredUser = uniqueUser;
  await this.registerPage.fillRegistrationForm(uniqueUser, VALID_PASSWORD, VALID_PASSWORD);
  await this.registerPage.submitRegisterForm();
});

Then('User should be redirected to Home page after registration', async function ({ page }) {
  await this.registerPage.verifySuccessfulRegistration();
});

Then('User should be on the correct Home page URL', async function ({ page }) {
  await this.registerPage.verifyHomePageURL();
});

Then('The registered username should be visible on Home page', async function ({ page }) {
  await this.registerPage.verifyUsernameOnHomePage(this.registeredUser);
});

// ── Functional Steps — Sign Out ───────────────────────────────────────────────

// ✅ Given: register a new user first then land on home page
Given('Registered user has completed registration and is on Home page', async function ({ page }) {
  this.registerPage   = new RegisterPage(page);
  const uniqueUser    = `testuser_${Date.now()}`;
  this.registeredUser = uniqueUser;
  // Navigate to register page
  await page.goto('/register');
  await page.waitForLoadState('domcontentloaded');
  // Complete registration
  await this.registerPage.fillRegistrationForm(uniqueUser, VALID_PASSWORD, VALID_PASSWORD);
  await this.registerPage.submitRegisterForm();
  // Should now be on home page logged in
  await page.waitForURL('**/home', { timeout: 15000 });
});

When('The registered user clicks Sign out', async function ({ page }) {
  await this.registerPage.signOut();
});

Then('The user should be redirected to Home page with message {string}', async function ({ page }, expectedMsg) {
  await this.registerPage.verifySignedOut();
});