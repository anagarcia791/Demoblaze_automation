import { Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../support/pages/HomePage";
import FormPopUp from "../../support/pages/components/FormPopUp";
import CartPage from "../../support/pages/CartPage";

And("Fixture's data is instantiated", () => {
  cy.fixture("urlsData").as("urlsData");
});

Then("Sees home page", () => {
  cy.get("@urlsData").then((urls) => {
    cy.url().should("contains", urls.alternativeHomeURL);
  });

  HomePage.getCategoriesTitle().as("categoriesTitle");

  cy.get("@categoriesTitle").should("be.visible");
});

Then("Sees form pop up", () => {
  FormPopUp.getModalContainer().as("modalContainer");
  FormPopUp.getModalHeader().as("modalHeader");
  FormPopUp.getModalBody().as("modalBody");
  FormPopUp.getModalFooter().as("modalFooter");

  cy.get("@modalContainer").should("be.visible");
  cy.get("@modalHeader").should("be.visible");
  cy.get("@modalBody").should("be.visible");
  cy.get("@modalFooter").should("be.visible");
});

And("{string} form header title as {string}", (expectedForm, expectedFormTitle) => {
  FormPopUp.getFormTitle(expectedForm).as("formTitle");

  cy.get("@formTitle")
    .invoke("text")
    .then((formTitleText) => {
      expect(formTitleText).to.equal(expectedFormTitle);
    });
});

Then("Cart page elements are visible", () => {
  cy.get("@urlsData").then((urls) => {
    cy.url().should("contains", urls.cartURL);
  });

  CartPage.getCartProductsTable().as("cartProductsTable");
  CartPage.getPlaceOrderButton().as("placeOrderButton");

  cy.get("@cartProductsTable").should("be.visible");
  cy.get("@placeOrderButton").should("be.visible");
});
