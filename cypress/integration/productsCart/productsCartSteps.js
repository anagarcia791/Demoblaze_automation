import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../support/pages/HomePage";
import ProductPage from "../../support/pages/ProductPage";
import { getRandomNumber } from "../../support/utils";

And("Fixture's data is instantiated", () => {
  cy.fixture("urlsData").as("urlsData");
  cy.fixture("servicesData").as("servicesData");
});

When("User checks default shown products through the API response", () => {
  let defaultProducts = [];
  cy.get("@servicesData").then((services) => {
    cy.request("GET", services.defaultProducts)
      .then((response) => {
        defaultProducts = response.body.Items;
      })
      .then(() => {
        cy.wrap(defaultProducts).as("defaultProducts");
      });
  });
});

Then("The quantity of shown products must be {int}", (expectedQuantity) => {
  cy.get("@defaultProducts")
    .its("length")
    .then((listLength) => {
      expect(expectedQuantity).to.equal(listLength);
    });
});

When("User clicks a specific category", () => {
  HomePage.getCategoryOptions().as("optionList");

  cy.get("@optionList")
    .its("length")
    .then((listLength) => {
      const optionToClick = getRandomNumber(listLength);
      HomePage.clickCategoryOptionRandomly(optionToClick);
    });

  cy.wait(1000);
});

And("Clicks a specific item", () => {
  HomePage.getCategoryItems().as("itemList");

  cy.get("@itemList")
    .its("length")
    .then((listLength) => {
      const itemToClick = getRandomNumber(listLength);
      HomePage.clickCategoryItemRandomly(itemToClick);
    });
});

Then("Sees new page with product info", () => {
  cy.get("@urlsData").then((urls) => {
    cy.url().should("contains", urls.productSelectedURL);
  });

  ProductPage.getProductContenedor().as("productContenedor");
  ProductPage.getAddToCartButton().as("addToCartButton");

  cy.get("@productContenedor").should("be.visible");
  cy.get("@addToCartButton").should("be.visible");
});
