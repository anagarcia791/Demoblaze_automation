# Demoblaze automation

## Description
Create a framework for scratch using cypress (any version), cucumber, and allure reporter, to test the web page: https://www.demoblaze.com/. The framework should include test cases for the following functionalities:
1. Test the featured items Carousel. It should be in a feature including at least 3 scenarios.
2. Test Navigation to all header links. It should be in a feature including at least 3 scenarios.
3. Test the categories Selection, product Selection, Adding product to cart, Buying cart, Removing element from cart. All of the defined scenarios for these functionalities should be on a feature.

## Setup
1. Download or clone the project.
2. Run ```npm install```.
3. The project has already some commands for run tests you can start with ```npm test```, for more commands consult ```package.json```

## Notes
1. Cypress version used: ```9.7.0```.
2. Tests are located inside the folder ```cypress/integration```.
3. The Project design pattern is Page Object Model (POM), and is located in ```cypress/support```.

## Architecture diagram

![Architecture diagram]()

## Documentation
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Allure](https://docs.qameta.io/allure/)
- [Cucumber](https://cucumber.io/)