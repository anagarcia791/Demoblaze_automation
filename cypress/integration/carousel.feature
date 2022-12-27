Feature: Check carousel behaviour
  In order to see all promo available, As a valid user
  User interacts with top carousel
  So user can check all items with discount

  Background:
    Given User visit the Demoblaze homepage

  Scenario: Check that carousel changes image by itself
    When User waits for carousel change its image
    Then Sees a diferent image from the first one

  Scenario: User clicks carousel to next slide
    When User clicks next button
    Then Sees "second" slide

  Scenario: User clicks carousel to previous slide
    When User clicks previous button
    Then Sees "third" slide