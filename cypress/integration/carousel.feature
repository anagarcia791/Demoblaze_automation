Feature: Check carousel behaviour
  In order to see all promo available, As a valid user
  User interacts with top carousel
  So user can check all items with discount

  Background:
    Given User visit the Demoblaze homepage
    
  Scenario: Check that carousel changes image by itself
    When User waits for carousel change its image
    Then Sees a diferent image from the first one