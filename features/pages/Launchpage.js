// features/pages/LaunchPage.js
const { expect } = require('@playwright/test');

class LaunchPage {
  constructor(page) {
    this.page           = page;
    this.getStartedBtn  = page.locator('a:has-text("Get Started"), button:has-text("Get Started")').first();
    this.pageHeading    = page.locator('h1, .hero-title, [class*="heading"]').first();
    this.pageSubText    = page.locator('p, .hero-subtitle, [class*="subtext"]').first();
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL || 'https://dsportalapp.herokuapp.com');
    await this.page.waitForLoadState('networkidle');
  }

  async isLaunchPageLoaded() {
    return await this.getStartedBtn.isVisible();
  }

  async clickGetStarted() {
    await this.getStartedBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getPageTitle()   { return await this.page.title(); }
  async getButtonCount() { return await this.page.locator('button, a.btn, input[type="button"]').count(); }
  async getButtonText()  { return await this.getStartedBtn.innerText(); }
  async getHeadingText() { return await this.pageHeading.innerText().catch(() => ''); }
  async getSubText()     { return await this.pageSubText.innerText().catch(() => ''); }

  async isGetStartedButtonEnabled() {
    return await this.getStartedBtn.isEnabled();
  }

  async isOnHomePage() {
    return this.page.url().includes('/home') || this.page.url() !== (process.env.BASE_URL || 'https://dsportalapp.herokuapp.com');
  }
}

module.exports = LaunchPage;