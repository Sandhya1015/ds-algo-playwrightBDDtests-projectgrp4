Feature: Launch Page - Non Functional Test Cases

  @launch @ui
  Scenario: Verify user can land on DS Algo portal
    Given The user has browser open
    When The user enters the correct dsAlgo url
    Then The user should be able to land on dsAlgo portal

  @launch @ui
  Scenario: Verify launch page has 1 button
    Given User is on Launch Page
    Then User should see 1 button in launch page

  @launch @ui
  Scenario: Verify Get Started button is enabled
    Given User is on Launch Page
    Then Button should be in enabled state

  @launch @ui
  Scenario: Verify Get Started button text
    Given User is on Launch Page
    Then Button name should be "Get Started"

  @launch @ui
  Scenario: Verify page title
    Given User is on Launch Page
    Then Page title should be "Numpy Ninja"

  @launch @ui
  Scenario: Verify launch page heading text
    Given User is on Launch Page
    Then User should see the text "Preparing for the Interviews"

  @launch @ui @e2e
  Scenario: Verify user lands on Home page after clicking Get Started
    Given User is on Launch Page
    When User clicks on Get Started button
    Then User lands on Home Page
