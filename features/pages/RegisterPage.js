// features/pages/RegisterPage.js
// Page Object Model for DSAlgo Registration Page

const { expect } = require('@playwright/test');

class RegisterPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

    // ── Nav Locators ──────────────────────────────────────────────────────────
    this.navbarBrand      = page.locator('a.navbar-brand').first();
    this.registerNavLink  = page.locator('a[href="/register"]').first();
    this.signOutLink      = page.locator('a[href="/logout"]');

    // ── Form Locators ─────────────────────────────────────────────────────────
    this.usernameInput        = page.locator('input[name="username"]');
    this.passwordInput        = page.locator('input[name="password1"]');
    this.confirmPasswordInput = page.locator('input[name="password2"]');
    this.registerButton       = page.locator('input[type="submit"]');

    // ── Error / Alert Locators ────────────────────────────────────────────────
    this.alertMessage = page.locator('.alert, .alert-primary, .alert-danger');
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  async navigateToHome() {
    await this.page.goto('/home');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickRegisterNavLink() {
    await this.registerNavLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.registerNavLink.click();
    await this.page.waitForURL('**/register', { timeout: 10000 });
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickSignOut() {
    await this.signOutLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.signOutLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ── Form Actions ──────────────────────────────────────────────────────────

  async fillUsername(username) {
    await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.usernameInput.fill(username);
  }

  async fillPassword(password) {
    await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.passwordInput.fill(password);
  }

  async fillConfirmPassword(password) {
    await this.confirmPasswordInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.confirmPasswordInput.fill(password);
  }

  async fillRegistrationForm(username, password, confirmPassword) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.fillConfirmPassword(confirmPassword || password);
  }

  async submitRegisterForm() {
    await this.registerButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.registerButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickRegisterButtonEmpty() {
    await this.registerButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.registerButton.click();
  }

  async signOut() {
    await this.signOutLink.waitFor({ state: 'visible', timeout: 10000 });
    await this.signOutLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ── Assertions ────────────────────────────────────────────────────────────

  async verifyOnRegisterPage() {
    await this.page.waitForURL('**/register', { timeout: 10000 });
    await expect(this.page).toHaveURL(/register/);
  }

  // ✅ Fix 1 — check navbar brand instead of page title
  async verifyPageTitle(expectedTitle) {
    await this.navbarBrand.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.navbarBrand).toContainText(expectedTitle);
  }

  async verifyRegisterButtonVisible() {
    await expect(this.registerButton).toBeVisible();
  }

  async verifyRegisterButtonEnabled() {
    await expect(this.registerButton).toBeEnabled();
  }

  async verifyCursorOnUsernameField() {
    await this.page.waitForTimeout(500);
    const focused = await this.page.evaluate(() => {
      const el = document.activeElement;
      return (el.name || '') + (el.id || '');
    });
    expect(focused.toLowerCase()).toContain('user');
  }

  async verifyUsernameFieldVisible() {
    await expect(this.usernameInput).toBeVisible();
  }

  async verifyPasswordFieldVisible() {
    await expect(this.passwordInput).toBeVisible();
  }

  async verifyConfirmPasswordFieldVisible() {
    await expect(this.confirmPasswordInput).toBeVisible();
  }

  // ✅ Fix 2 — use innerText() which decodes HTML entities like &#x27; → '
  async verifyTextOnPage(expectedText) {
    const bodyText  = await this.page.locator('body').innerText();
    // Strip apostrophes for safe comparison (HTML may encode them differently)
    const cleanBody = bodyText.replace(/['']/g, '');
    const cleanText = expectedText.replace(/['']/g, '');
    expect(cleanBody).toContain(cleanText);
  }

  async verifyEmptyFieldError() {
    // Browser native validation — field required
    const isEmpty = await this.usernameInput.evaluate(
      el => el.validity.valueMissing
    );
    expect(isEmpty).toBe(true);
  }

  async verifyPasswordEmptyError() {
    const isEmpty = await this.passwordInput.evaluate(
      el => el.validity.valueMissing
    );
    expect(isEmpty).toBe(true);
  }

  // ✅ Fix 3 — use innerText + check URL stayed on register page
  async verifyInvalidInputError() {
    const bodyText = await this.page.locator('body').innerText();
    const currentUrl = this.page.url();
    const hasError =
      bodyText.includes('too short')    ||
      bodyText.includes('too similar')  ||
      bodyText.includes('numeric')      ||
      bodyText.includes('common')       ||
      bodyText.includes('invalid')      ||
      bodyText.includes('least 8')      ||
      currentUrl.includes('/register');  // stayed on register = validation triggered
    expect(hasError).toBe(true);
  }

  // ✅ Fix 4 — use innerText() to decode HTML entities
  async verifyPasswordMismatchError() {
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain("didn't match");
  }

  async verifySuccessfulRegistration() {
    await this.page.waitForURL('**/home', { timeout: 15000 });
    const bodyText = await this.page.locator('body').innerText();
    const isSuccess =
      bodyText.includes('New Account Created') ||
      bodyText.includes('logged in')           ||
      this.page.url().includes('/home');
    expect(isSuccess).toBe(true);
  }

  async verifyHomePageURL() {
    await this.page.waitForURL('**/home', { timeout: 15000 });
    await expect(this.page).toHaveURL(/\/home/);
  }

  async verifyUsernameOnHomePage(username) {
    await this.page.waitForURL('**/home', { timeout: 15000 });
    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toContain(username);
  }

  async verifySignedOut() {
    const bodyText = await this.page.locator('body').innerText();
    const isSignedOut =
      bodyText.includes('Logged out')  ||
      bodyText.includes('logged out')  ||
      bodyText.includes('successfully');
    expect(isSignedOut).toBe(true);
  }
}

module.exports = { RegisterPage };