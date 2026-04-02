// Generated from: features\Launch.feature
import { test } from "playwright-bdd";

test.describe('Launch Page - Non Functional Test Cases', () => {

  test('Verify user can land on DS Algo portal', { tag: ['@launch', '@ui'] }, async ({ Given, When, Then, page }) => { 
    await Given('The user has browser open', null, { page }); 
    await When('The user enters the correct dsAlgo url', null, { page }); 
    await Then('The user should be able to land on dsAlgo portal', null, { page }); 
  });

  test('Verify launch page has 1 button', { tag: ['@launch', '@ui'] }, async ({ Given, Then, page }) => { 
    await Given('User is on Launch Page', null, { page }); 
    await Then('User should see 1 button in launch page', null, { page }); 
  });

  test('Verify Get Started button is enabled', { tag: ['@launch', '@ui'] }, async ({ Given, Then, page }) => { 
    await Given('User is on Launch Page', null, { page }); 
    await Then('Button should be in enabled state', null, { page }); 
  });

  test('Verify Get Started button text', { tag: ['@launch', '@ui'] }, async ({ Given, Then, page }) => { 
    await Given('User is on Launch Page', null, { page }); 
    await Then('Button name should be "Get Started"', null, { page }); 
  });

  test('Verify page title', { tag: ['@launch', '@ui'] }, async ({ Given, Then, page }) => { 
    await Given('User is on Launch Page', null, { page }); 
    await Then('Page title should be "Numpy Ninja"', null, { page }); 
  });

  test('Verify launch page heading text', { tag: ['@launch', '@ui'] }, async ({ Given, Then, page }) => { 
    await Given('User is on Launch Page', null, { page }); 
    await Then('User should see the text "Preparing for the Interviews"', null, { page }); 
  });

  test('Verify user lands on Home page after clicking Get Started', { tag: ['@launch', '@ui', '@e2e'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on Launch Page', null, { page }); 
    await When('User clicks on Get Started button', null, { page }); 
    await Then('User lands on Home Page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Launch.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@launch","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user has browser open","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When The user enters the correct dsAlgo url","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to land on dsAlgo portal","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@launch","@ui"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on Launch Page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see 1 button in launch page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":15,"tags":["@launch","@ui"],"steps":[{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is on Launch Page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Button should be in enabled state","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@launch","@ui"],"steps":[{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is on Launch Page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Button name should be \"Get Started\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Get Started\"","children":[{"start":23,"value":"Get Started","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":25,"tags":["@launch","@ui"],"steps":[{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on Launch Page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Page title should be \"Numpy Ninja\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Numpy Ninja\"","children":[{"start":22,"value":"Numpy Ninja","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":30,"tags":["@launch","@ui"],"steps":[{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is on Launch Page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Preparing for the Interviews\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Preparing for the Interviews\"","children":[{"start":26,"value":"Preparing for the Interviews","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":35,"tags":["@launch","@ui","@e2e"],"steps":[{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given User is on Launch Page","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When User clicks on Get Started button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User lands on Home Page","stepMatchArguments":[]}]},
]; // bdd-data-end