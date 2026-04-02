// Generated from: features\Home.feature
import { test } from "playwright-bdd";

test.describe('Home Page - Non Functional and Functional Test Cases', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on Home page', null, { page }); 
  });
  
  test('Verify full navigation flow from Launch page to Home page', { tag: ['@home', '@e2e', '@smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on Launch Page', null, { page }); 
    await When('User clicks on Get Started button', null, { page }); 
    await Then('User lands on Home Page', null, { page }); 
  });

  test('Verify NumpyNinja title on top left of Home page', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see "NumpyNinja" brand on the navbar', null, { page }); 
  });

  test('Verify 2 navigation links are present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see 2 navigation links on Home page', null, { page }); 
  });

  test('Verify Register link is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Register" link on Home page', null, { page }); 
  });

  test('Verify Signin link is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Signin" link on Home page', null, { page }); 
  });

  test('Verify Data Structures dropdown is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the Data Structures dropdown', null, { page }); 
  });

  test('Verify 7 cards are visible on Home page', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see 7 cards on Home page', null, { page }); 
  });

  test('Verify 7 Get Started buttons are visible', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see 7 Get Started buttons on Home page', null, { page }); 
  });

  test('Verify Data Structures Introduction text is visible', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see Data Structures Introduction text', null, { page }); 
  });

  test('Verify Array card is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Array" card on Home page', null, { page }); 
  });

  test('Verify Linked List card is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Linked List" card on Home page', null, { page }); 
  });

  test('Verify Stack card is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Stack" card on Home page', null, { page }); 
  });

  test('Verify Queue card is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Queue" card on Home page', null, { page }); 
  });

  test('Verify Tree card is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Tree" card on Home page', null, { page }); 
  });

  test('Verify Graph card is present', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see the "Graph" card on Home page', null, { page }); 
  });

  test('Verify Get Started button on Array card', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see Get Started button on the "Array" card', null, { page }); 
  });

  test('Verify Get Started button on Linked List card', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see Get Started button on the "Linked List" card', null, { page }); 
  });

  test('Verify Get Started button on Stack card', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see Get Started button on the "Stack" card', null, { page }); 
  });

  test('Verify Get Started button on Queue card', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see Get Started button on the "Queue" card', null, { page }); 
  });

  test('Verify Get Started button on Tree card', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see Get Started button on the "Tree" card', null, { page }); 
  });

  test('Verify Get Started button on Graph card', { tag: ['@home', '@ui'] }, async ({ Then, page }) => { 
    await Then('the user should see Get Started button on the "Graph" card', null, { page }); 
  });

  test.describe('Validate alert when unregistered user clicks Get Started on card', () => {

    test('Example #1', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user clicks Get Started on the "Array" card', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #2', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user clicks Get Started on the "Data Structures" card', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #3', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user clicks Get Started on the "Tree" card', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #4', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user clicks Get Started on the "Queue" card', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #5', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user clicks Get Started on the "Stack" card', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #6', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user clicks Get Started on the "Linked List" card', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #7', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user clicks Get Started on the "Graph" card', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

  });

  test.describe('Validate alert when unregistered user selects from dropdown', () => {

    test('Example #1', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user selects "Array" from Data Structures dropdown', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #2', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user selects "Tree" from Data Structures dropdown', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #3', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user selects "Queue" from Data Structures dropdown', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #4', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user selects "Stack" from Data Structures dropdown', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #5', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user selects "Linked List" from Data Structures dropdown', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

    test('Example #6', { tag: ['@home', '@functional', '@unregistered'] }, async ({ When, Then, page }) => { 
      await When('the unregistered user selects "Graph" from Data Structures dropdown', null, { page }); 
      await Then('the alert message "You are not logged in" should be shown', null, { page }); 
    });

  });

  test('Verify Data Structures dropdown options for logged in user', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user opens the Data Structures dropdown', null, { page }); 
    await Then('the user should see all dropdown options', null, { page }); 
  });

  test('Verify logged in user can access Data Structures page', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user clicks Get Started on the "Data Structures" card', null, { page }); 
    await Then('the user should be navigated to the "data-structures" page', null, { page }); 
  });

  test('Verify logged in user can access Array page', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user clicks Get Started on the "Array" card', null, { page }); 
    await Then('the user should be navigated to the "array" page', null, { page }); 
  });

  test('Verify logged in user can access Linked List page', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user clicks Get Started on the "Linked List" card', null, { page }); 
    await Then('the user should be navigated to the "linked-list" page', null, { page }); 
  });

  test('Verify logged in user can access Stack page', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user clicks Get Started on the "Stack" card', null, { page }); 
    await Then('the user should be navigated to the "stack" page', null, { page }); 
  });

  test('Verify logged in user can access Queue page', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user clicks Get Started on the "Queue" card', null, { page }); 
    await Then('the user should be navigated to the "queue" page', null, { page }); 
  });

  test('Verify logged in user can access Tree page', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user clicks Get Started on the "Tree" card', null, { page }); 
    await Then('the user should be navigated to the "tree" page', null, { page }); 
  });

  test('Verify logged in user can access Graph page', { tag: ['@home', '@functional', '@registered'] }, async ({ Given, When, Then, page }) => { 
    await Given('the user logs in with valid credentials from Home page', null, { page }); 
    await When('the user clicks Get Started on the "Graph" card', null, { page }); 
    await Then('the user should be navigated to the "graph" page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@home","@e2e","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is on Launch Page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks on Get Started button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User lands on Home Page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":21,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user should see \"NumpyNinja\" brand on the navbar","stepMatchArguments":[{"group":{"start":20,"value":"\"NumpyNinja\"","children":[{"start":21,"value":"NumpyNinja","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":25,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then the user should see 2 navigation links on Home page","stepMatchArguments":[{"group":{"start":20,"value":"2","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":24,"pickleLine":29,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Register\" link on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Register\"","children":[{"start":25,"value":"Register","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":33,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Signin\" link on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Signin\"","children":[{"start":25,"value":"Signin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":37,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the user should see the Data Structures dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":41,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then the user should see 7 cards on Home page","stepMatchArguments":[{"group":{"start":20,"value":"7","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":40,"pickleLine":45,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then the user should see 7 Get Started buttons on Home page","stepMatchArguments":[{"group":{"start":20,"value":"7","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":44,"pickleLine":49,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then the user should see Data Structures Introduction text","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":53,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Array\" card on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Array\"","children":[{"start":25,"value":"Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":57,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Linked List\" card on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Linked List\"","children":[{"start":25,"value":"Linked List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":61,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Stack\" card on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Stack\"","children":[{"start":25,"value":"Stack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":65,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Queue\" card on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Queue\"","children":[{"start":25,"value":"Queue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":69,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Tree\" card on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Tree\"","children":[{"start":25,"value":"Tree","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":68,"pickleLine":73,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then the user should see the \"Graph\" card on Home page","stepMatchArguments":[{"group":{"start":24,"value":"\"Graph\"","children":[{"start":25,"value":"Graph","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":77,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then the user should see Get Started button on the \"Array\" card","stepMatchArguments":[{"group":{"start":46,"value":"\"Array\"","children":[{"start":47,"value":"Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":76,"pickleLine":81,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then the user should see Get Started button on the \"Linked List\" card","stepMatchArguments":[{"group":{"start":46,"value":"\"Linked List\"","children":[{"start":47,"value":"Linked List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":80,"pickleLine":85,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then the user should see Get Started button on the \"Stack\" card","stepMatchArguments":[{"group":{"start":46,"value":"\"Stack\"","children":[{"start":47,"value":"Stack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":84,"pickleLine":89,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then the user should see Get Started button on the \"Queue\" card","stepMatchArguments":[{"group":{"start":46,"value":"\"Queue\"","children":[{"start":47,"value":"Queue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":93,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"Then the user should see Get Started button on the \"Tree\" card","stepMatchArguments":[{"group":{"start":46,"value":"\"Tree\"","children":[{"start":47,"value":"Tree","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":92,"pickleLine":97,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then the user should see Get Started button on the \"Graph\" card","stepMatchArguments":[{"group":{"start":46,"value":"\"Graph\"","children":[{"start":47,"value":"Graph","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":98,"pickleLine":111,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When the unregistered user clicks Get Started on the \"Array\" card","stepMatchArguments":[{"group":{"start":48,"value":"\"Array\"","children":[{"start":49,"value":"Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":103,"pickleLine":112,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When the unregistered user clicks Get Started on the \"Data Structures\" card","stepMatchArguments":[{"group":{"start":48,"value":"\"Data Structures\"","children":[{"start":49,"value":"Data Structures","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":105,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":108,"pickleLine":113,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When the unregistered user clicks Get Started on the \"Tree\" card","stepMatchArguments":[{"group":{"start":48,"value":"\"Tree\"","children":[{"start":49,"value":"Tree","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":110,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":113,"pickleLine":114,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When the unregistered user clicks Get Started on the \"Queue\" card","stepMatchArguments":[{"group":{"start":48,"value":"\"Queue\"","children":[{"start":49,"value":"Queue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":115,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":118,"pickleLine":115,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When the unregistered user clicks Get Started on the \"Stack\" card","stepMatchArguments":[{"group":{"start":48,"value":"\"Stack\"","children":[{"start":49,"value":"Stack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":120,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":123,"pickleLine":116,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When the unregistered user clicks Get Started on the \"Linked List\" card","stepMatchArguments":[{"group":{"start":48,"value":"\"Linked List\"","children":[{"start":49,"value":"Linked List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":125,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":128,"pickleLine":117,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When the unregistered user clicks Get Started on the \"Graph\" card","stepMatchArguments":[{"group":{"start":48,"value":"\"Graph\"","children":[{"start":49,"value":"Graph","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":130,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":137,"pickleLine":130,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When the unregistered user selects \"Array\" from Data Structures dropdown","stepMatchArguments":[{"group":{"start":30,"value":"\"Array\"","children":[{"start":31,"value":"Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":139,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":142,"pickleLine":132,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When the unregistered user selects \"Tree\" from Data Structures dropdown","stepMatchArguments":[{"group":{"start":30,"value":"\"Tree\"","children":[{"start":31,"value":"Tree","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":147,"pickleLine":133,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When the unregistered user selects \"Queue\" from Data Structures dropdown","stepMatchArguments":[{"group":{"start":30,"value":"\"Queue\"","children":[{"start":31,"value":"Queue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":149,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":152,"pickleLine":134,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When the unregistered user selects \"Stack\" from Data Structures dropdown","stepMatchArguments":[{"group":{"start":30,"value":"\"Stack\"","children":[{"start":31,"value":"Stack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":154,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":157,"pickleLine":135,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When the unregistered user selects \"Linked List\" from Data Structures dropdown","stepMatchArguments":[{"group":{"start":30,"value":"\"Linked List\"","children":[{"start":31,"value":"Linked List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":159,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":162,"pickleLine":136,"tags":["@home","@functional","@unregistered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When the unregistered user selects \"Graph\" from Data Structures dropdown","stepMatchArguments":[{"group":{"start":30,"value":"\"Graph\"","children":[{"start":31,"value":"Graph","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":164,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then the alert message \"You are not logged in\" should be shown","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":169,"pickleLine":143,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":144,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":145,"keywordType":"Action","textWithKeyword":"When the user opens the Data Structures dropdown","stepMatchArguments":[]},{"pwStepLine":172,"gherkinStepLine":146,"keywordType":"Outcome","textWithKeyword":"Then the user should see all dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":175,"pickleLine":149,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":150,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":151,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started on the \"Data Structures\" card","stepMatchArguments":[{"group":{"start":35,"value":"\"Data Structures\"","children":[{"start":36,"value":"Data Structures","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":178,"gherkinStepLine":152,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to the \"data-structures\" page","stepMatchArguments":[{"group":{"start":36,"value":"\"data-structures\"","children":[{"start":37,"value":"data-structures","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":181,"pickleLine":155,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":156,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started on the \"Array\" card","stepMatchArguments":[{"group":{"start":35,"value":"\"Array\"","children":[{"start":36,"value":"Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":184,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to the \"array\" page","stepMatchArguments":[{"group":{"start":36,"value":"\"array\"","children":[{"start":37,"value":"array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":187,"pickleLine":161,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":162,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":163,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started on the \"Linked List\" card","stepMatchArguments":[{"group":{"start":35,"value":"\"Linked List\"","children":[{"start":36,"value":"Linked List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":190,"gherkinStepLine":164,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to the \"linked-list\" page","stepMatchArguments":[{"group":{"start":36,"value":"\"linked-list\"","children":[{"start":37,"value":"linked-list","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":193,"pickleLine":167,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":168,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":169,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started on the \"Stack\" card","stepMatchArguments":[{"group":{"start":35,"value":"\"Stack\"","children":[{"start":36,"value":"Stack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":196,"gherkinStepLine":170,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to the \"stack\" page","stepMatchArguments":[{"group":{"start":36,"value":"\"stack\"","children":[{"start":37,"value":"stack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":199,"pickleLine":173,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":174,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":201,"gherkinStepLine":175,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started on the \"Queue\" card","stepMatchArguments":[{"group":{"start":35,"value":"\"Queue\"","children":[{"start":36,"value":"Queue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":202,"gherkinStepLine":176,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to the \"queue\" page","stepMatchArguments":[{"group":{"start":36,"value":"\"queue\"","children":[{"start":37,"value":"queue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":205,"pickleLine":179,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":206,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":207,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started on the \"Tree\" card","stepMatchArguments":[{"group":{"start":35,"value":"\"Tree\"","children":[{"start":36,"value":"Tree","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":208,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to the \"tree\" page","stepMatchArguments":[{"group":{"start":36,"value":"\"tree\"","children":[{"start":37,"value":"tree","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":211,"pickleLine":185,"tags":["@home","@functional","@registered"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":212,"gherkinStepLine":186,"keywordType":"Context","textWithKeyword":"Given the user logs in with valid credentials from Home page","stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":187,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started on the \"Graph\" card","stepMatchArguments":[{"group":{"start":35,"value":"\"Graph\"","children":[{"start":36,"value":"Graph","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":214,"gherkinStepLine":188,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to the \"graph\" page","stepMatchArguments":[{"group":{"start":36,"value":"\"graph\"","children":[{"start":37,"value":"graph","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end