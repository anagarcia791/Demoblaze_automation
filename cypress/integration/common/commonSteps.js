import { Given, When } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../support/pages/HomePage";

Given("User visit the Demoblaze homepage", () => {
  cy.visit("/");
});

When("User clicks {string} link in navbar", (optionToClick) => {
  HomePage.clickNavBarOption(optionToClick);
});
