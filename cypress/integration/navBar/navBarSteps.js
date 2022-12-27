import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../pages/HomePage";

const homePage = new HomePage();

Given("User visit the Demoblaze homepage", () => {
  cy.visit("/");
});

When("User clicks Home link in navbar", () => {
  homePage.clickNavBarHomeOption();
});

Then("Sees home page", () => {
  cy.url().should("contains", "/index.html");
});
