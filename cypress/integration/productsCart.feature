Feature: Check products cart behaviour
  In order to buy products
  User interact with available products and products cart
  So user can add, delete and buy products from its products cart

  Background:
    Given User visit the Demoblaze homepage
    And Fixture's data is instantiated

  @regression @smoke @sanity
  Scenario: Check home page contains default products to show
    When User checks default shown products through the API response
    Then The quantity of shown products must be 9

  @regression @smoke @sanity
  Scenario: Check category and item selection is correctly done
    When User clicks a category
    And Clicks a item
    Then Sees new page with product detail info

  @regression @smoke @sanity
  Scenario: Add product to shopping cart
    Given User is in a product detail info page
    When Clicks add to cart button
    And User clicks "Cart" link in navbar
    Then 1 products should be in the shopping cart

  @regression @smoke @sanity
  Scenario: Delete product from shopping cart
    Given User adds 2 product to shopping cart
    And User clicks "Cart" link in navbar
    When Clicks delete product n° 2 button
    Then 1 products should be in the shopping cart

  @regression @smoke @sanity
  Scenario: Buying process
    Given User adds 1 product to shopping cart
    And User clicks "Cart" link in navbar
    When Clicks place order button
    And Fills all needed data for purchase
    And Clicks purchase button and confirm button
    Then Shopping cart must be cleaned