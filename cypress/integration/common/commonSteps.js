import { Given } from "cypress-cucumber-preprocessor/steps";

Given("User visit the Demoblaze homepage", () => {
  cy.visit("/");
});
