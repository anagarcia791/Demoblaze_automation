Feature: Check navbar behaviour
  In order to consume the navbar options information
  User interacts with top navbar
  So user can see specific information according its need

  Background:
    Given User visit the Demoblaze homepage

  Scenario: Check that Home option is the first page shown
    When User clicks "Home" link in navbar
    Then Sees home page

  Scenario: Check that Contact option shows specific pop up
    When User clicks "Contact" link in navbar
    Then Sees form pop up
    And "Contact" form header title as "New message"

  Scenario: Check that About us option shows specific pop up
    When User clicks "About us" link in navbar
    Then Sees form pop up
    And "About us" form header title as "About us"

  Scenario: Check that Cart option shows cart page
    When User clicks "Cart" link in navbar
    Then Cart page elements are visible

  Scenario: Check that Log in option shows specific pop up
    When User clicks "Log in" link in navbar
    Then Sees form pop up
    And "Log in" form header title as "Log in"

  Scenario: Check that Sign up option shows specific pop up
    When User clicks "Sign up" link in navbar
    Then Sees form pop up
    And "Sign up" form header title as "Sign up"