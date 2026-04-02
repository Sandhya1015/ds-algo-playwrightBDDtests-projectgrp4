# features/Register.feature

Feature: Registration Page
  As a new user of DSAlgo portal
  I want to verify the Registration page
  So that I can register successfully

  # ── Background: Full E2E flow from Home page ─────────────────────────────
  Background:
    Given User is on Home page
    When User clicks the Register link on Home page
    Then User should land on the Register page

  # ──────────────────────────────────────────────────────────────────────────
  # NON FUNCTIONAL - UI Verification
  # ──────────────────────────────────────────────────────────────────────────

  @register @nonfunctional @smoke @integration
  Scenario: Verify Register link navigates to Registration page
    Then User should land on the Register page

  @register @nonfunctional
  Scenario: Verify Title of Registration page
    Then User should see the title "NumpyNinja" on Register page

  @register @nonfunctional
  Scenario: Verify presence of Register button
    Then User should see the Register button on the page

  @register @nonfunctional
  Scenario: Verify Register button is clickable
    Then The Register button should be in enabled state

  @register @nonfunctional
  Scenario: Verify cursor is focused on Username field
    Then The cursor should be focused on Username field

  @register @nonfunctional
  Scenario: Verify Username field is present
    Then User should see the Username input field

  @register @nonfunctional
  Scenario: Verify Password field is present
    Then User should see the Password input field

  @register @nonfunctional
  Scenario: Verify Password confirmation field is present
    Then User should see the Password confirmation field with a textbox

  @register @nonfunctional
  Scenario: Verify Username field character rule text
    Then User should see the rule text "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."

  # ── Known App Bugs — apostrophe encoding issue ────────────────────────────

  @register @nonfunctional @bug
  Scenario: Verify password rule - similar password
    Then User should see the rule text "Your password can't be too similar to your other personal information."

  @register @nonfunctional
  Scenario: Verify password rule - minimum 8 characters
    Then User should see the rule text "Your password must contain at least 8 characters."

  @register @nonfunctional @bug
  Scenario: Verify password rule - commonly used password
    Then User should see the rule text "Your password can't be a commonly used password."

  @register @nonfunctional @bug
  Scenario: Verify password rule - entirely numeric not allowed
    Then User should see the rule text "Your password can't be entirely numeric."

  # ──────────────────────────────────────────────────────────────────────────
  # FUNCTIONAL - Validation and Error Messages
  # ──────────────────────────────────────────────────────────────────────────

  @register @functional @negative
  Scenario: Validate error when all fields are empty
    When User clicks Register button with all fields empty
    Then The error message "Please fill out this field." should be displayed

  @register @functional @negative
  Scenario: Validate error when username is empty and other fields filled
    When User enters password with username field left empty
    And User clicks the Register submit button
    Then The error message "Please fill out this field." should be displayed

  @register @functional @negative
  Scenario: Validate error when password contains only numbers
    When User enters username and a password with only numbers
    And User clicks the Register submit button
    Then The error message "Please fill out this field." should be displayed for Password field

  # ── Known App Bugs — no error displayed ──────────────────────────────────

  @register @functional @negative @bug
  Scenario: Validate error when password has only 5 characters
    When User enters username and a password with only 5 characters
    And User clicks the Register submit button
    Then Invalid input error should be displayed on Register page

  @register @functional @negative @bug
  Scenario: Validate error when password exceeds 150 characters
    When User enters username and a password with more than 150 characters
    And User clicks the Register submit button
    Then Invalid input error should be displayed on Register page

  @register @functional @negative @bug
  Scenario: Validate error when passwords do not match
    When User enters username and mismatched passwords
    And User clicks the Register submit button
    Then User should see the warning "The two password fields didn't match."

  @register @functional @negative @bug
  Scenario: Validate error when password field has more than 150 characters of only letters
    When User enters username and a password with only letters exceeding 150 characters
    And User clicks the Register submit button
    Then Invalid input error should be displayed on Register page

  # ──────────────────────────────────────────────────────────────────────────
  # FUNCTIONAL - Successful Registration
  # ──────────────────────────────────────────────────────────────────────────

  @register @functional @smoke @integration
  Scenario: Validate successful registration with valid inputs
    When User enters valid registration details and clicks Register
    Then User should be redirected to Home page after registration

  @register @functional
  Scenario: Verify Home page URL after successful registration
    When User enters valid registration details and clicks Register
    Then User should be on the correct Home page URL

  @register @functional
  Scenario: Verify registered username is visible on Home page
    When User enters valid registration details and clicks Register
    Then The registered username should be visible on Home page

  # ──────────────────────────────────────────────────────────────────────────
  # FUNCTIONAL - Sign Out
  # ──────────────────────────────────────────────────────────────────────────

  @register @functional @signout @smoke @integration
  Scenario: Verify registered user is able to sign out successfully
    Given Registered user has completed registration and is on Home page
    When The registered user clicks Sign out
    Then The user should be redirected to Home page with message "Logged out successfully"
