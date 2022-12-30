Feature: Check navbar behaviour
  In order to consume the navbar options information
  User interacts with top navbar
  So user can see specific information according its need

  Background:
    Given User visit the Demoblaze homepage
    And Fixture's data is instantiated

  @regression
  Scenario: Check that Home option is the first page shown
    When User clicks "Home" link in navbar
    Then Sees home page

  @regression @smoke @sanity
  Scenario: Check that Contact option shows specific pop up
    When User clicks "Contact" link in navbar
    Then Sees form pop up
    And "Contact" form header title as "New message"

  @regression
  Scenario: Check that About us option shows specific pop up
    When User clicks "About us" link in navbar
    Then Sees form pop up
    And "About us" form header title as "About us"

  @regression @smoke @sanity
  Scenario: Check that Cart option shows cart page
    When User clicks "Cart" link in navbar
    Then Cart page elements are visible

  @regression @smoke @sanity
  Scenario: Check that Log in option shows specific pop up
    When User clicks "Log in" link in navbar
    Then Sees form pop up
    And "Log in" form header title as "Log in"

  @regression @smoke @sanity
  Scenario: Check that Sign up option shows specific pop up
    When User clicks "Sign up" link in navbar
    Then Sees form pop up
    And "Sign up" form header title as "Sign up"