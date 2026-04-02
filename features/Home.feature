Feature: Home Page - Non Functional and Functional Test Cases

  Background:
    Given User is on Home page

  # ─────────────────────────────────────────────────────
  # E2E FLOW - Launch to Home (runs once)
  # ─────────────────────────────────────────────────────

  @home @e2e @smoke
  Scenario: Verify full navigation flow from Launch page to Home page
    Given User is on Launch Page
    When User clicks on Get Started button
    Then User lands on Home Page

  # ─────────────────────────────────────────────────────
  # NON-FUNCTIONAL / UI TESTS
  # ─────────────────────────────────────────────────────

  @home @ui
  Scenario: Verify NumpyNinja title on top left of Home page
    Then the user should see "NumpyNinja" brand on the navbar

  @home @ui
  Scenario: Verify 2 navigation links are present
    Then the user should see 2 navigation links on Home page

  @home @ui
  Scenario: Verify Register link is present
    Then the user should see the "Register" link on Home page

  @home @ui
  Scenario: Verify Signin link is present
    Then the user should see the "Signin" link on Home page

  @home @ui
  Scenario: Verify Data Structures dropdown is present
    Then the user should see the Data Structures dropdown

  @home @ui
  Scenario: Verify 7 cards are visible on Home page
    Then the user should see 7 cards on Home page

  @home @ui
  Scenario: Verify 7 Get Started buttons are visible
    Then the user should see 7 Get Started buttons on Home page

  @home @ui
  Scenario: Verify Data Structures Introduction text is visible
    Then the user should see Data Structures Introduction text

  @home @ui
  Scenario: Verify Array card is present
    Then the user should see the "Array" card on Home page

  @home @ui
  Scenario: Verify Linked List card is present
    Then the user should see the "Linked List" card on Home page

  @home @ui
  Scenario: Verify Stack card is present
    Then the user should see the "Stack" card on Home page

  @home @ui
  Scenario: Verify Queue card is present
    Then the user should see the "Queue" card on Home page

  @home @ui
  Scenario: Verify Tree card is present
    Then the user should see the "Tree" card on Home page

  @home @ui
  Scenario: Verify Graph card is present
    Then the user should see the "Graph" card on Home page

  @home @ui
  Scenario: Verify Get Started button on Array card
    Then the user should see Get Started button on the "Array" card

  @home @ui
  Scenario: Verify Get Started button on Linked List card
    Then the user should see Get Started button on the "Linked List" card

  @home @ui
  Scenario: Verify Get Started button on Stack card
    Then the user should see Get Started button on the "Stack" card

  @home @ui
  Scenario: Verify Get Started button on Queue card
    Then the user should see Get Started button on the "Queue" card

  @home @ui
  Scenario: Verify Get Started button on Tree card
    Then the user should see Get Started button on the "Tree" card

  @home @ui
  Scenario: Verify Get Started button on Graph card
    Then the user should see Get Started button on the "Graph" card

  # ─────────────────────────────────────────────────────
  # FUNCTIONAL - UNREGISTERED USER ALERTS (Cards)
  # ─────────────────────────────────────────────────────

  @home @functional @unregistered
  Scenario Outline: Validate alert when unregistered user clicks Get Started on card
    When the unregistered user clicks Get Started on the "<module>" card
    Then the alert message "You are not logged in" should be shown

    Examples:
      | module          |
      | Array           |
      | Data Structures |
      | Tree            |
      | Queue           |
      | Stack           |
      | Linked List     |
      | Graph           |

  # ─────────────────────────────────────────────────────
  # FUNCTIONAL - UNREGISTERED USER ALERTS (Dropdown)
  # ─────────────────────────────────────────────────────

  @home @functional @unregistered
  Scenario Outline: Validate alert when unregistered user selects from dropdown
    When the unregistered user selects "<module>" from Data Structures dropdown
    Then the alert message "You are not logged in" should be shown

    Examples:
      | module          |
      | Array           |
      
      | Tree            |
      | Queue           |
      | Stack           |
      | Linked List     |
      | Graph           |

  # ─────────────────────────────────────────────────────
  # FUNCTIONAL - REGISTERED USER
  # ─────────────────────────────────────────────────────

  @home @functional @registered
  Scenario: Verify Data Structures dropdown options for logged in user
    Given the user logs in with valid credentials from Home page
    When the user opens the Data Structures dropdown
    Then the user should see all dropdown options

  @home @functional @registered
  Scenario: Verify logged in user can access Data Structures page
    Given the user logs in with valid credentials from Home page
    When the user clicks Get Started on the "Data Structures" card
    Then the user should be navigated to the "data-structures" page

  @home @functional @registered
  Scenario: Verify logged in user can access Array page
    Given the user logs in with valid credentials from Home page
    When the user clicks Get Started on the "Array" card
    Then the user should be navigated to the "array" page

  @home @functional @registered
  Scenario: Verify logged in user can access Linked List page
    Given the user logs in with valid credentials from Home page
    When the user clicks Get Started on the "Linked List" card
    Then the user should be navigated to the "linked-list" page

  @home @functional @registered
  Scenario: Verify logged in user can access Stack page
    Given the user logs in with valid credentials from Home page
    When the user clicks Get Started on the "Stack" card
    Then the user should be navigated to the "stack" page

  @home @functional @registered
  Scenario: Verify logged in user can access Queue page
    Given the user logs in with valid credentials from Home page
    When the user clicks Get Started on the "Queue" card
    Then the user should be navigated to the "queue" page

  @home @functional @registered
  Scenario: Verify logged in user can access Tree page
    Given the user logs in with valid credentials from Home page
    When the user clicks Get Started on the "Tree" card
    Then the user should be navigated to the "tree" page

  @home @functional @registered
  Scenario: Verify logged in user can access Graph page
    Given the user logs in with valid credentials from Home page
    When the user clicks Get Started on the "Graph" card
    Then the user should be navigated to the "graph" page
