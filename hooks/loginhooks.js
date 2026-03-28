// 
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await browser.close();
});