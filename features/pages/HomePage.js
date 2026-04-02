// features/pages/HomePage.js
const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    // ── Navbar ────────────────────────────────────────────────────────────────
    this.navbarBrand      = page.locator('a.navbar-brand').first();
    this.dataStructuresDd = page.locator('a.nav-link:has-text("Data Structures")').first();
    this.registerLink     = page.locator('a[href="/register"]').first();
    this.signinLink       = page.locator('a[href="/login"]').first();
   // Register + Sign in links — both inside the same nav-item group
this.navLinks = page.locator('.navbar-nav a[href="/register"], .navbar-nav a[href="/login"]');

    // ── Cards ─────────────────────────────────────────────────────────────────
    // Use h5 card titles — 7 on the page
    this.allCards          = page.locator('h5.card-title, .card h5');
    // Get Started buttons are ONLY inside cards — not dropdown items
    this.allGetStartedBtns = page.locator('.card a:has-text("Get Started")');

    // ── DS Introduction ───────────────────────────────────────────────────────
    this.dsIntroTitle = page.locator('h5:has-text("Data Structures-Introduction")').first();

    // ── Individual card titles ────────────────────────────────────────────────
    this.cardTitles = {
      'Array'           : page.locator('h5:has-text("Array")').first(),
      'Linked List'     : page.locator('h5:has-text("Linked List")').first(),
      'Stack'           : page.locator('h5:has-text("Stack")').first(),
      'Queue'           : page.locator('h5:has-text("Queue")').first(),
      'Tree'            : page.locator('h5:has-text("Tree")').first(),
      'Graph'           : page.locator('h5:has-text("Graph")').first(),
      'Data Structures' : page.locator('h5:has-text("Data Structures-Introduction")').first(),
    };

    // ── Alert message ─────────────────────────────────────────────────────────
    this.alertMessage = page.locator('.alert, [role="alert"]').first();

    // ── Login fields ──────────────────────────────────────────────────────────
    this.usernameInput  = page.locator('input[name="username"]');
    this.passwordInput  = page.locator('input[name="password"]');
    this.loginSubmitBtn = page.locator('input[type="submit"]');
  }

  // ── Get Started button per card ───────────────────────────────────────────
  // ✅ Fix: use card container to scope the Get Started button
  // This avoids matching hidden dropdown items with same href
  getStartedBtn(module) {
    const cardTitleMap = {
      'Array'           : 'Array',
      'Linked List'     : 'Linked List',
      'Stack'           : 'Stack',
      'Queue'           : 'Queue',
      'Tree'            : 'Tree',
      'Graph'           : 'Graph',
      'Data Structures' : 'Data Structures-Introduction',
    };
    const title = cardTitleMap[module] || module;
    // Scope Get Started button INSIDE the card that contains the module title
    return this.page.locator(`.card:has(h5:has-text("${title}")) a:has-text("Get Started")`).first();
  }

  // ── Dropdown item ─────────────────────────────────────────────────────────
  dropdownItem(module) {
    // Dropdown items are ONLY inside .dropdown-menu
    return this.page.locator(`.dropdown-menu a:has-text("${module}")`).first();
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  async navigateToHome() {
    await this.page.goto('/home');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async loginAs(username, password) {
    await this.page.goto('/login');
    await this.page.waitForLoadState('domcontentloaded');
    await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginSubmitBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ── Assertions: Non-Functional ────────────────────────────────────────────

  async verifyNavbarBrandVisible(expectedTitle) {
    await this.navbarBrand.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.navbarBrand).toContainText(expectedTitle);
  }

  async verifyNavLinkCount(count) {
    await expect(this.navLinks).toHaveCount(count);
  }

  async verifyLinkVisible(linkText) {
    if (linkText === 'Register') {
      await expect(this.registerLink).toBeVisible();
    } else {
      await expect(this.signinLink).toBeVisible();
    }
  }

  async verifyDataStructuresDropdownVisible() {
    await expect(this.dataStructuresDd).toBeVisible();
  }

  async verifyCardCount(count) {
    await expect(this.allCards).toHaveCount(count);
  }

  async verifyGetStartedButtonCount(count) {
    await expect(this.allGetStartedBtns).toHaveCount(count);
  }

  async verifyDSIntroTitleVisible() {
    await expect(this.dsIntroTitle).toBeVisible();
  }

  async verifyCardVisible(cardName) {
    await expect(this.cardTitles[cardName]).toBeVisible();
  }

  async verifyGetStartedOnCard(cardName) {
    const btn = this.getStartedBtn(cardName);
    await expect(btn).toBeVisible();
  }

  // ── Actions: Unregistered User ────────────────────────────────────────────

  async clickGetStartedOnCard(module) {
    const btn = this.getStartedBtn(module);
    await btn.waitFor({ state: 'visible', timeout: 10000 });
    await btn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async selectFromDropdown(module) {
    // ✅ First click the dropdown toggle to open it
    await this.dataStructuresDd.click();
    await this.page.waitForTimeout(500);
    const item = this.dropdownItem(module);
    await item.waitFor({ state: 'visible', timeout: 10000 });
    await item.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyNotLoggedInAlert() {
    await this.alertMessage.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.alertMessage).toContainText('You are not logged in');
  }

  // ── Actions: Registered User ──────────────────────────────────────────────

  async clickDataStructuresDropdown() {
    await this.dataStructuresDd.click();
    await this.page.waitForTimeout(500);
  }

  async verifyDropdownOptions(options) {
    for (const option of options) {
      const item = this.dropdownItem(option);
      await expect(item).toBeVisible();
    }
  }

  async verifyNavigatedToPage(module) {
    const urlMap = {
      'Array'           : /array/i,
      'Linked List'     : /linked-list/i,
      'Stack'           : /stack/i,
      'Queue'           : /queue/i,
      'Tree'            : /tree/i,
      'Graph'           : /graph/i,
      'Data Structures' : /data-structures-introduction/i,
    };
    await expect(this.page).toHaveURL(urlMap[module] || new RegExp(module, 'i'));
  }
}

module.exports = { HomePage };