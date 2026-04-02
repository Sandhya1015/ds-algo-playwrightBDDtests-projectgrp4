# features/Login.feature

Feature: Sign In Page
  As a registered user of DSAlgo portal
  I want to verify the Sign In page functionality
  So that I can log in successfully

  # ── Background: Full E2E flow from Home page ─────────────────────────────
  Background:
    Given User is on Home page
    When User clicks the Sign In link on Home page

  # ──────────────────────────────────────────────────────────────────────────
  # NON FUNCTIONAL - UI Verification
  # ──────────────────────────────────────────────────────────────────────────

  @signin @nonfunctional
  Scenario: Verify Username field is present on Sign In page
    Then User should see Username Text with a textbox

  @signin @nonfunctional
  Scenario: Verify Password field is present on Sign In page
    Then User should see Password Text with a textbox

  @signin @nonfunctional
  Scenario: Verify Login button is present on Sign In page
    Then User should see a Login Button

  @signin @nonfunctional
  Scenario: Verify content below Login button
    Then User should see "If you don't have an account, please Register!" below Login Button

  @signin @nonfunctional
  Scenario: Verify Auto Focus cursor is on Username field
    Then The cursor should be in the username field

  # ──────────────────────────────────────────────────────────────────────────
  # FUNCTIONAL - Sign In
  # ──────────────────────────────────────────────────────────────────────────

  @signin @functional @smoke @integration
  Scenario: Verify that user is able to navigate to Login Page
    Then The user should be able to land on login page

  @signin @functional
  Scenario: Verify Keyboard Navigation using Tab key
    When The user presses the Tab key
    Then The focus should move in correct order

  @signin @functional @negative
  Scenario: Login with unregistered username and valid password
    Given User is on login page
    When User logs in with credentials from excel row "unregistered_valid"
    Then "Invalid Username and Password" error should be displayed

  @signin @functional @negative
  Scenario: Login with valid username and invalid password - all numbers
    Given User is on login page
    When User logs in with credentials from excel row "valid_user_numeric_pass"
    Then "Invalid Username and Password" error should be displayed

  @signin @functional @negative
  Scenario: Login with valid username and invalid password - only 5 characters
    Given User is on login page
    When User logs in with credentials from excel row "valid_user_short_pass"
    Then "Invalid Username and Password" error should be displayed

  @signin @functional @negative
  Scenario: Login with valid username and unregistered but valid password
    Given User is on login page
    When User logs in with credentials from excel row "valid_user_unregistered_pass"
    Then "Invalid Username and Password" error should be displayed

  @signin @functional @negative
  Scenario: Login with unregistered username and unregistered password
    Given User is on login page
    When User logs in with credentials from excel row "unregistered_both"
    Then "Invalid Username and Password" error should be displayed

  @signin @functional @negative
  Scenario: Login with invalid username and valid password
    Given User is on login page
    When User logs in with credentials from excel row "invalid_user_valid_pass"
    Then Error message should be displayed on login page

  @signin @functional @negative
  Scenario: Login with empty fields
    Given User is on login page
    When User clicks Login without entering credentials
    Then Please fill out this field message should be displayed

  @signin @functional @smoke @integration
  Scenario: Valid login with correct credentials
    Given User is on login page
    When User logs in with credentials from excel row "valid_credentials"
    Then User should be redirected to Home page after login
    And User should see logged in confirmation message

  # ──────────────────────────────────────────────────────────────────────────
  # FUNCTIONAL - Sign Out
  # ──────────────────────────────────────────────────────────────────────────

  @signin @functional @signout @smoke @integration
  Scenario: Verify logged in user can sign out successfully
    Given Registered user is logged in and on Home page
    When The logged in user clicks Sign out
    Then User should be redirected to Home page with sign out confirmation
