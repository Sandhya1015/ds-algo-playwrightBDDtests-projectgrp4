// Generated from: features\Register.feature
import { test } from "playwright-bdd";

test.describe('Registration Page', () => {

  test.beforeEach('Background', async ({ Given, When, Then, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on Home page', null, { page }); 
    await When('User clicks the Register link on Home page', null, { page }); 
    await Then('User should land on the Register page', null, { page }); 
  });
  
  test('Verify Register link navigates to Registration page', { tag: ['@register', '@nonfunctional', '@smoke', '@integration'] }, async ({ Then, page }) => { 
    await Then('User should land on the Register page', null, { page }); 
  });

  test('Verify Title of Registration page', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see the title "NumpyNinja" on Register page', null, { page }); 
  });

  test('Verify presence of Register button', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see the Register button on the page', null, { page }); 
  });

  test('Verify Register button is clickable', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('The Register button should be in enabled state', null, { page }); 
  });

  test('Verify cursor is focused on Username field', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('The cursor should be focused on Username field', null, { page }); 
  });

  test('Verify Username field is present', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see the Username input field', null, { page }); 
  });

  test('Verify Password field is present', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see the Password input field', null, { page }); 
  });

  test('Verify Password confirmation field is present', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see the Password confirmation field with a textbox', null, { page }); 
  });

  test('Verify Username field character rule text', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see the rule text "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."', null, { page }); 
  });

  test('Verify password rule - similar password', { tag: ['@register', '@nonfunctional', '@bug'] }, async ({ Then, page }) => { 
    await Then('User should see the rule text "Your password can\'t be too similar to your other personal information."', null, { page }); 
  });

  test('Verify password rule - minimum 8 characters', { tag: ['@register', '@nonfunctional'] }, async ({ Then, page }) => { 
    await Then('User should see the rule text "Your password must contain at least 8 characters."', null, { page }); 
  });

  test('Verify password rule - commonly used password', { tag: ['@register', '@nonfunctional', '@bug'] }, async ({ Then, page }) => { 
    await Then('User should see the rule text "Your password can\'t be a commonly used password."', null, { page }); 
  });

  test('Verify password rule - entirely numeric not allowed', { tag: ['@register', '@nonfunctional', '@bug'] }, async ({ Then, page }) => { 
    await Then('User should see the rule text "Your password can\'t be entirely numeric."', null, { page }); 
  });

  test('Validate error when all fields are empty', { tag: ['@register', '@functional', '@negative'] }, async ({ When, Then, page }) => { 
    await When('User clicks Register button with all fields empty', null, { page }); 
    await Then('The error message "Please fill out this field." should be displayed', null, { page }); 
  });

  test('Validate error when username is empty and other fields filled', { tag: ['@register', '@functional', '@negative'] }, async ({ When, Then, And, page }) => { 
    await When('User enters password with username field left empty', null, { page }); 
    await And('User clicks the Register submit button', null, { page }); 
    await Then('The error message "Please fill out this field." should be displayed', null, { page }); 
  });

  test('Validate error when password contains only numbers', { tag: ['@register', '@functional', '@negative'] }, async ({ When, Then, And, page }) => { 
    await When('User enters username and a password with only numbers', null, { page }); 
    await And('User clicks the Register submit button', null, { page }); 
    await Then('The error message "Please fill out this field." should be displayed for Password field', null, { page }); 
  });

  test('Validate error when password has only 5 characters', { tag: ['@register', '@functional', '@negative', '@bug'] }, async ({ When, Then, And, page }) => { 
    await When('User enters username and a password with only 5 characters', null, { page }); 
    await And('User clicks the Register submit button', null, { page }); 
    await Then('Invalid input error should be displayed on Register page', null, { page }); 
  });

  test('Validate error when password exceeds 150 characters', { tag: ['@register', '@functional', '@negative', '@bug'] }, async ({ When, Then, And, page }) => { 
    await When('User enters username and a password with more than 150 characters', null, { page }); 
    await And('User clicks the Register submit button', null, { page }); 
    await Then('Invalid input error should be displayed on Register page', null, { page }); 
  });

  test('Validate error when passwords do not match', { tag: ['@register', '@functional', '@negative', '@bug'] }, async ({ When, Then, And, page }) => { 
    await When('User enters username and mismatched passwords', null, { page }); 
    await And('User clicks the Register submit button', null, { page }); 
    await Then('User should see the warning "The two password fields didn\'t match."', null, { page }); 
  });

  test('Validate error when password field has more than 150 characters of only letters', { tag: ['@register', '@functional', '@negative', '@bug'] }, async ({ When, Then, And, page }) => { 
    await When('User enters username and a password with only letters exceeding 150 characters', null, { page }); 
    await And('User clicks the Register submit button', null, { page }); 
    await Then('Invalid input error should be displayed on Register page', null, { page }); 
  });

  test('Validate successful registration with valid inputs', { tag: ['@register', '@functional', '@smoke', '@integration'] }, async ({ When, Then, page }) => { 
    await When('User enters valid registration details and clicks Register', null, { page }); 
    await Then('User should be redirected to Home page after registration', null, { page }); 
  });

  test('Verify Home page URL after successful registration', { tag: ['@register', '@functional'] }, async ({ When, Then, page }) => { 
    await When('User enters valid registration details and clicks Register', null, { page }); 
    await Then('User should be on the correct Home page URL', null, { page }); 
  });

  test('Verify registered username is visible on Home page', { tag: ['@register', '@functional'] }, async ({ When, Then, page }) => { 
    await When('User enters valid registration details and clicks Register', null, { page }); 
    await Then('The registered username should be visible on Home page', null, { page }); 
  });

  test('Verify registered user is able to sign out successfully', { tag: ['@register', '@functional', '@signout', '@smoke', '@integration'] }, async ({ Given, When, Then, page }) => { 
    await Given('Registered user has completed registration and is on Home page', null, { page }); 
    await When('The registered user clicks Sign out', null, { page }); 
    await Then('The user should be redirected to Home page with message "Logged out successfully"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Register.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":19,"tags":["@register","@nonfunctional","@smoke","@integration"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":23,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should see the title \"NumpyNinja\" on Register page","stepMatchArguments":[{"group":{"start":26,"value":"\"NumpyNinja\"","children":[{"start":27,"value":"NumpyNinja","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":27,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the Register button on the page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":31,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then The Register button should be in enabled state","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":35,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then The cursor should be focused on Username field","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":39,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should see the Username input field","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":43,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see the Password input field","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":47,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see the Password confirmation field with a textbox","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":51,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User should see the rule text \"Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.\"","children":[{"start":31,"value":"Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":57,"tags":["@register","@nonfunctional","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then User should see the rule text \"Your password can't be too similar to your other personal information.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your password can't be too similar to your other personal information.\"","children":[{"start":31,"value":"Your password can't be too similar to your other personal information.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":61,"tags":["@register","@nonfunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see the rule text \"Your password must contain at least 8 characters.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your password must contain at least 8 characters.\"","children":[{"start":31,"value":"Your password must contain at least 8 characters.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":65,"tags":["@register","@nonfunctional","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User should see the rule text \"Your password can't be a commonly used password.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your password can't be a commonly used password.\"","children":[{"start":31,"value":"Your password can't be a commonly used password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":69,"tags":["@register","@nonfunctional","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then User should see the rule text \"Your password can't be entirely numeric.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your password can't be entirely numeric.\"","children":[{"start":31,"value":"Your password can't be entirely numeric.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":77,"tags":["@register","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When User clicks Register button with all fields empty","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then The error message \"Please fill out this field.\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"Please fill out this field.\"","children":[{"start":19,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":69,"pickleLine":82,"tags":["@register","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When User enters password with username field left empty","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"And User clicks the Register submit button","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":85,"keywordType":"Outcome","textWithKeyword":"Then The error message \"Please fill out this field.\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"Please fill out this field.\"","children":[{"start":19,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":75,"pickleLine":88,"tags":["@register","@functional","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User enters username and a password with only numbers","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And User clicks the Register submit button","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then The error message \"Please fill out this field.\" should be displayed for Password field","stepMatchArguments":[{"group":{"start":18,"value":"\"Please fill out this field.\"","children":[{"start":19,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":81,"pickleLine":96,"tags":["@register","@functional","@negative","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":97,"keywordType":"Action","textWithKeyword":"When User enters username and a password with only 5 characters","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":98,"keywordType":"Action","textWithKeyword":"And User clicks the Register submit button","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Invalid input error should be displayed on Register page","stepMatchArguments":[]}]},
  {"pwTestLine":87,"pickleLine":102,"tags":["@register","@functional","@negative","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"When User enters username and a password with more than 150 characters","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"And User clicks the Register submit button","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Then Invalid input error should be displayed on Register page","stepMatchArguments":[]}]},
  {"pwTestLine":93,"pickleLine":108,"tags":["@register","@functional","@negative","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When User enters username and mismatched passwords","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"And User clicks the Register submit button","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see the warning \"The two password fields didn't match.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"The two password fields didn't match.\"","children":[{"start":29,"value":"The two password fields didn't match.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":99,"pickleLine":114,"tags":["@register","@functional","@negative","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When User enters username and a password with only letters exceeding 150 characters","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":116,"keywordType":"Action","textWithKeyword":"And User clicks the Register submit button","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"Then Invalid input error should be displayed on Register page","stepMatchArguments":[]}]},
  {"pwTestLine":105,"pickleLine":124,"tags":["@register","@functional","@smoke","@integration"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When User enters valid registration details and clicks Register","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Home page after registration","stepMatchArguments":[]}]},
  {"pwTestLine":110,"pickleLine":129,"tags":["@register","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":130,"keywordType":"Action","textWithKeyword":"When User enters valid registration details and clicks Register","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then User should be on the correct Home page URL","stepMatchArguments":[]}]},
  {"pwTestLine":115,"pickleLine":134,"tags":["@register","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":135,"keywordType":"Action","textWithKeyword":"When User enters valid registration details and clicks Register","stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":136,"keywordType":"Outcome","textWithKeyword":"Then The registered username should be visible on Home page","stepMatchArguments":[]}]},
  {"pwTestLine":120,"pickleLine":143,"tags":["@register","@functional","@signout","@smoke","@integration"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks the Register link on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should land on the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":144,"keywordType":"Context","textWithKeyword":"Given Registered user has completed registration and is on Home page","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":145,"keywordType":"Action","textWithKeyword":"When The registered user clicks Sign out","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":146,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to Home page with message \"Logged out successfully\"","stepMatchArguments":[{"group":{"start":56,"value":"\"Logged out successfully\"","children":[{"start":57,"value":"Logged out successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end