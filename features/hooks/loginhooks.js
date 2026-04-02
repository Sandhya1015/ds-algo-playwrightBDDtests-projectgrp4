// features/hooks/loginhooks.js
const { Before, After, BeforeAll, AfterAll } = require('playwright-bdd');

BeforeAll(async function () {
  console.log('\n Framework ready');
});

AfterAll(async function () {
  console.log('\n All done');
});

Before(async function ({ page }, scenario) {
  console.log(`\n Starting: ${scenario.pickle.name}`);
});

After(async function ({ page }, scenario) {
  if (scenario.result?.status === 'FAILED') {
    console.log(`\n FAILED: ${scenario.pickle.name}`);
    // screenshot auto handled by playwright.config.js
  } else {
    console.log(`\n PASSED: ${scenario.pickle.name}`);
  }
});