import {Given,when,then, context, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { chromium } from "playwright";
let browser;
let page;

Given("I open the sauce demo login page", async  ()=> {
  browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");
});
When("I login using standard user credentials", async () => {
await page.waitForSelector("#user-name");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
});
Then("I should see the products page", async () => {
  await page.waitForSelector(".title");
  const title = await page.textContent(".title");
  expect(title).toBe("Products");
});