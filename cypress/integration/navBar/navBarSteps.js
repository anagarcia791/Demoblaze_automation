import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../pages/HomePage";
import FormPopUp from "../../pages/components/formPopUp";
import commonData from "../../fixtures/commonData.json";

const homePage = new HomePage();
const formPopUp = new FormPopUp();

Given("User visit the Demoblaze homepage", () => {
  cy.visit("/");
});

When("User clicks {string} link in navbar", (optionToClick) => {
  homePage.clickNavBarOption(optionToClick);
});

Then("Sees home page", () => {
  homePage.getCategoriesTitle().as("categoriesTitle");

  cy.url().should("contains", commonData.homeUrlComplement);
  cy.get("@categoriesTitle").should("be.visible");
});

Then("Sees form pop up", () => {
  formPopUp.getModalContainer().as("modalContainer");
  formPopUp.getModalHeader().as("modalHeader");
  formPopUp.getModalBody().as("modalBody");
  formPopUp.getModalFooter().as("modalFooter");

  cy.get("@modalContainer").should("be.visible");
  cy.get("@modalHeader").should("be.visible");
  cy.get("@modalBody").should("be.visible");
  cy.get("@modalFooter").should("be.visible");
});

And("{string} form header title as {string}", (expectedForm, expectedFormTitle) => {
    formPopUp.getFormTitle(expectedForm).as("formTitle");

    cy.get("@formTitle")
      .invoke("text")
      .then((formTitleText) => {
        expect(formTitleText).to.equal(expectedFormTitle);
      });
  }
);
