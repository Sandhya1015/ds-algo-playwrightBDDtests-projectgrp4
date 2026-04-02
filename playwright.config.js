const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig }       = require('playwright-bdd');
require('dotenv').config();

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps:    'features/steps/**/*.js',
});

module.exports = defineConfig({
  testDir,
  timeout:       30000,
  retries:       1,
  fullyParallel: false,

 reporter: [
  ['list'],
  ['allure-playwright', {
    detail: true,
    outputFolder: 'allure-results',
    suiteTitle: true,
  }]
],
  use: {
    baseURL:    process.env.BASE_URL || 'https://dsportalapp.herokuapp.com',
    headless:   process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    video:      'retain-on-failure',
    trace:      'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});