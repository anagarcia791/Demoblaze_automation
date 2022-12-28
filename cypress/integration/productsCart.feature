Feature: Check products cart behaviour
  In order to buy products
  User interact with available products and products cart
  So user can add, delete and buy products from its products cart

  Background:
    Given User visit the Demoblaze homepage

  Scenario: Check item selection is correctly done
    When User clicks a specific category
    And Clicks a specific item
    Then Sees new page with product info