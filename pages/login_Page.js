// class LoginPage {
//   constructor(page) {
//     this.page = page;
//   }

//   async launchApp(baseURL) {
//     await this.page.goto(baseURL);
//   }

//   async clickSignIn() {
//     await this.page.click('text=Sign in');
//   }

//   async enterCredentials(username, password) {
//     await this.page.fill('#id_username', username);
//     await this.page.fill('#id_password', password);
//   }

//   async clickLogin() {
//     await this.page.click('input[value="Login"]');
//   }
// }

// module.exports = LoginPage;


const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(user, pass) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  async verifySuccess() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }
}

module.exports = { LoginPage };