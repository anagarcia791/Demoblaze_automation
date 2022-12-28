import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import utils from "../../support/utils";
import commonData from "../../fixtures/commonData.json";

const homePage = new HomePage();
const productPage = new ProductPage();

Given("User visit the Demoblaze homepage", () => {
  cy.visit("/");
});

When("User clicks a specific category", () => {
  homePage.getCategoryOptions().as("optionList");

  cy.get("@optionList")
    .its("length")
    .then((listLength) => {
      const optionToClick = utils.getRandomNumber(listLength);
      homePage.clickCategoryOptionRandomly(optionToClick);
    });

  cy.wait(1000);
});

And("Clicks a specific item", () => {
  homePage.getCategoryItems().as("itemList");

  cy.get("@itemList")
    .its("length")
    .then((listLength) => {
      const itemToClick = utils.getRandomNumber(listLength);
      homePage.clickCategoryItemRandomly(itemToClick);
    });
});

Then("Sees new page with product info", () => {
  cy.url().should("contains", commonData.productSelectedUrlComplement);

  productPage.getProductContenedor().as("productContenedor");
  productPage.getAddToCartButton().as("addToCartButton");

  cy.get("@productContenedor").should("be.visible");
  cy.get("@addToCartButton").should("be.visible");
});
