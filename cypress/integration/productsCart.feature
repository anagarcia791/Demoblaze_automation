Feature: Check products cart behaviour
  In order to buy products
  User interact with available products and products cart
  So user can add, delete and buy products from its products cart

  Background:
    Given User visit the Demoblaze homepage
    And Fixture's data is instantiated

  Scenario: Check home page contains default products to show
    When User checks default shown products through the API response
    Then The quantity of shown products must be 9

  Scenario: Check item selection is correctly done
    When User clicks a specific category
    And Clicks a specific item
    Then Sees new page with product info