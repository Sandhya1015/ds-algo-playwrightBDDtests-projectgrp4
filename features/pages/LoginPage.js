// features/pages/LoginPage.js
// Page Object Model for DSAlgo Sign In Page

const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

    // ── Nav Locators ──────────────────────────────────────────────────────────
    this.signInNavLink  = page.locator('a[href="/login"]').last();
    this.signOutLink    = page.locator('a[href="/logout"]');

    // ── Login Form Locators ───────────────────────────────────────────────────
    this.usernameLabel  = page.locator('label:has-text("Username")');
    this.usernameInput  = page.locator('input[name="username"]');
    this.passwordLabel  = page.locator('label:has-text("Password")');
    this.passwordInput  = page.locator('input[name="password"]');
    this.loginButton    = page.locator('input[type="submit"]');

    // ── Content Locators ──────────────────────────────────────────────────────
    this.registerText   = page.locator("text=If you don't have an account");
    this.registerLink   = page.locator('a[href="/register"]:has-text("Register!")');

    // ── Result Locators ───────────────────────────────────────────────────────
    this.errorAlert     = page.locator('.alert, .alert-danger');
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  async clickSignInNavLink() {
    await this.signInNavLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.signInNavLink.click();
    await this.page.waitForURL('**/login', { timeout: 10000 });
    await this.page.waitForLoadState('domcontentloaded');
  }

  async navigateToLogin() {
    await this.page.goto('/login');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickSignOut() {
    await this.signOutLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.signOutLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ── Login Actions ─────────────────────────────────────────────────────────

  async enterUsername(username) {
    await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.loginButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async clickLoginWithoutCredentials() {
    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.loginButton.click();
  }

  async pressTab() {
    await this.page.keyboard.press('Tab');
  }

  // ── Assertions: Non-Functional ────────────────────────────────────────────

  async verifyOnLoginPage() {
    await this.page.waitForURL('**/login', { timeout: 10000 });
    await expect(this.page).toHaveURL(/login/);
  }

  async verifyUsernameLabelAndInput() {
    await expect(this.usernameLabel).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
  }

  async verifyPasswordLabelAndInput() {
    await expect(this.passwordLabel).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  async verifyLoginButtonVisible() {
    await expect(this.loginButton).toBeVisible();
  }

  async verifyCursorOnUsernameField() {
    await this.page.waitForTimeout(500);
    const focused = await this.page.evaluate(() => {
      const el = document.activeElement;
      return (el.name || '') + (el.id || '');
    });
    expect(focused.toLowerCase()).toContain('user');
  }

  async verifyRegisterTextAndLink() {
    await expect(this.registerText).toBeVisible();
    await expect(this.registerLink).toBeVisible();
  }

  async verifyTabNavigation() {
    // After pressing Tab from username → focus should move to password
    const focused = await this.page.evaluate(() => {
      const el = document.activeElement;
      return (el.name || '') + (el.type || '');
    });
    expect(
      focused.toLowerCase().includes('pass') ||
      focused.toLowerCase().includes('password')
    ).toBe(true);
  }

  // ── Assertions: Functional ────────────────────────────────────────────────

  async verifyInvalidCredentialsError() {
    try {
      await this.errorAlert.waitFor({ state: 'visible', timeout: 10000 });
      const text = await this.errorAlert.innerText();
      expect(text.toLowerCase()).toContain('invalid');
    } catch {
      const content = await this.page.content();
      expect(content.toLowerCase()).toContain('invalid');
    }
  }

  async verifyErrorMessageDisplayed() {
    try {
      await this.errorAlert.waitFor({ state: 'visible', timeout: 10000 });
      const isVisible = await this.errorAlert.isVisible();
      expect(isVisible).toBe(true);
    } catch {
      const content = await this.page.content();
      expect(
        content.toLowerCase().includes('invalid') ||
        content.toLowerCase().includes('error')
      ).toBe(true);
    }
  }

  async verifyEmptyFieldValidation() {
    const isEmpty = await this.usernameInput.evaluate(
      el => el.validity.valueMissing
    );
    expect(isEmpty).toBe(true);
  }

  async verifySuccessfulLogin() {
    await this.page.waitForURL('**/home', { timeout: 15000 });
    expect(this.page.url()).toContain('/home');
  }

  async verifyLoggedInMessage() {
    const content = await this.page.content();
    const isLoggedIn =
      content.includes('logout')    ||
      content.includes('Sign out')  ||
      content.includes('logged in');
    expect(isLoggedIn).toBe(true);
  }

  async verifySignedOut() {
    await this.page.waitForLoadState('domcontentloaded');
    const bodyText = await this.page.locator('body').innerText();
    const isSignedOut =
      bodyText.includes('Logged out')  ||
      bodyText.includes('logged out')  ||
      bodyText.includes('successfully');
    expect(isSignedOut).toBe(true);
  }
}

module.exports = { LoginPage };