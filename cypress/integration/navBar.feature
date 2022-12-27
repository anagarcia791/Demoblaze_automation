Feature: Check navbar behaviour
  In order to consume the navbar options information
  User interacts with top navbar
  So user can see specific information according its need

  Background:
    Given User visit the Demoblaze homepage

  Scenario: Check that Home option is the first page shown
    When User clicks Home link in navbar
    Then Sees home page