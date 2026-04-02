// Generated from: features\Login.feature
import { test } from "playwright-bdd";

test.describe('Sign In Page', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on Home page', null, { page }); 
    await When('User clicks the Sign In link on Home page', null, { page }); 
  });
  
  test('Verify Username field is present on Sign In page', { tag: ['@signin', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see Username Text with a textbox', null, { page }); 
  });

  test('Verify Password field is present on Sign In page', { tag: ['@signin', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see Password Text with a textbox', null, { page }); 
  });

  test('Verify Login button is present on Sign In page', { tag: ['@signin', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see a Login Button', null, { page }); 
  });

  test('Verify content below Login button', { tag: ['@signin', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see "If you don\'t have an account, please Register!" below Login Button', null, { page }); 
  });

  test('Verify Auto Focus cursor is on Username field', { tag: ['@signin', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('The cursor should be in the username field', null, { page }); 
  });

  test('Verify that user is able to navigate to Login Page', { tag: ['@signin', '@functional', '@smoke', '@integration'] }, async ({ Then, page }) => { 
    await Then('The user should be able to land on login page', null, { page }); 
  });

  test('Verify Keyboard Navigation using Tab key', { tag: ['@signin', '@functional'] }, async ({ When, Then, page }) => { 
    await When('The user presses the Tab key', null, { page }); 
    await Then('The focus should move in correct order', null, { page }); 
  });

  test('Login with unregistered username and valid password', { tag: ['@signin', '@functional', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User logs in with credentials from excel row "unregistered_valid"', null, { page }); 
    await Then('"Invalid Username and Password" error should be displayed', null, { page }); 
  });

  test('Login with valid username and invalid password - all numbers', { tag: ['@signin', '@functional', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User logs in with credentials from excel row "valid_user_numeric_pass"', null, { page }); 
    await Then('"Invalid Username and Password" error should be displayed', null, { page }); 
  });

  test('Login with valid username and invalid password - only 5 characters', { tag: ['@signin', '@functional', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User logs in with credentials from excel row "valid_user_short_pass"', null, { page }); 
    await Then('"Invalid Username and Password" error should be displayed', null, { page }); 
  });

  test('Login with valid username and unregistered but valid password', { tag: ['@signin', '@functional', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User logs in with credentials from excel row "valid_user_unregistered_pass"', null, { page }); 
    await Then('"Invalid Username and Password" error should be displayed', null, { page }); 
  });

  test('Login with unregistered username and unregistered password', { tag: ['@signin', '@functional', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User logs in with credentials from excel row "unregistered_both"', null, { page }); 
    await Then('"Invalid Username and Password" error should be displayed', null, { page }); 
  });

  test('Login with invalid username and valid password', { tag: ['@signin', '@functional', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User logs in with credentials from excel row "invalid_user_valid_pass"', null, { page }); 
    await Then('Error message should be displayed on login page', null, { page }); 
  });

  test('Login with empty fields', { tag: ['@signin', '@functional', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User clicks Login without entering credentials', null, { page }); 
    await Then('Please fill out this field message should be displayed', null, { page }); 
  });

  test('Valid login with correct credentials', { tag: ['@signin', '@functional', '@smoke', '@integration'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is on login page', null, { page }); 
    await When('User logs in with credentials from excel row "valid_credentials"', null, { page }); 
    await Then('User should be redirected to Home page after login', null, { page }); 
    await And('User should see logged in confirmation message', null, { page }); 
  });

  test('Verify logged in user can sign out successfully', { tag: ['@signin', '@functional', '@signout', '@smoke', '@integration'] }, async ({ Given, When, Then, page }) => { 
    await Given('Registered user is logged in and on Home page', null, { page }); 
    await When('The logged in user clicks Sign out', null, { page }); 
    await Then('User should be redirected to Home page with sign out confirmation', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":18,"tags":["@signin","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User should see Username Text with a textbox","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":22,"tags":["@signin","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see Password Text with a textbox","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":26,"tags":["@signin","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see a Login Button","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":30,"tags":["@signin","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should see \"If you don't have an account, please Register!\" below Login Button","stepMatchArguments":[{"group":{"start":16,"value":"\"If you don't have an account, please Register!\"","children":[{"start":17,"value":"If you don't have an account, please Register!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":34,"tags":["@signin","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then The cursor should be in the username field","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":42,"tags":["@signin","@functional","@smoke","@integration"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to land on login page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":46,"tags":["@signin","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When The user presses the Tab key","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then The focus should move in correct order","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":51,"tags":["@signin","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When User logs in with credentials from excel row \"unregistered_valid\"","stepMatchArguments":[{"group":{"start":45,"value":"\"unregistered_valid\"","children":[{"start":46,"value":"unregistered_valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then \"Invalid Username and Password\" error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":57,"tags":["@signin","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When User logs in with credentials from excel row \"valid_user_numeric_pass\"","stepMatchArguments":[{"group":{"start":45,"value":"\"valid_user_numeric_pass\"","children":[{"start":46,"value":"valid_user_numeric_pass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then \"Invalid Username and Password\" error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":63,"tags":["@signin","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When User logs in with credentials from excel row \"valid_user_short_pass\"","stepMatchArguments":[{"group":{"start":45,"value":"\"valid_user_short_pass\"","children":[{"start":46,"value":"valid_user_short_pass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then \"Invalid Username and Password\" error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":69,"tags":["@signin","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User logs in with credentials from excel row \"valid_user_unregistered_pass\"","stepMatchArguments":[{"group":{"start":45,"value":"\"valid_user_unregistered_pass\"","children":[{"start":46,"value":"valid_user_unregistered_pass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then \"Invalid Username and Password\" error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":75,"tags":["@signin","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":76,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":77,"keywordType":"Action","textWithKeyword":"When User logs in with credentials from excel row \"unregistered_both\"","stepMatchArguments":[{"group":{"start":45,"value":"\"unregistered_both\"","children":[{"start":46,"value":"unregistered_both","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then \"Invalid Username and Password\" error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":81,"tags":["@signin","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When User logs in with credentials from excel row \"invalid_user_valid_pass\"","stepMatchArguments":[{"group":{"start":45,"value":"\"invalid_user_valid_pass\"","children":[{"start":46,"value":"invalid_user_valid_pass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":73,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Error message should be displayed on login page","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":87,"tags":["@signin","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":88,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User clicks Login without entering credentials","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then Please fill out this field message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":93,"tags":["@signin","@functional","@smoke","@integration"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":94,"keywordType":"Context","textWithKeyword":"Given User is on login page","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"When User logs in with credentials from excel row \"valid_credentials\"","stepMatchArguments":[{"group":{"start":45,"value":"\"valid_credentials\"","children":[{"start":46,"value":"valid_credentials","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":85,"gherkinStepLine":96,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Home page after login","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"And User should see logged in confirmation message","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":104,"tags":["@signin","@functional","@signout","@smoke","@integration"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Sign In link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given Registered user is logged in and on Home page","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When The logged in user clicks Sign out","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Home page with sign out confirmation","stepMatchArguments":[]}]},
]; // bdd-data-end