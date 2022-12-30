import { getRandomNumber } from "./utils";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

Cypress.Commands.add("GetDefaultProducts", () => {
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

Cypress.Commands.add("ClickCategory", () => {
  HomePage.getCategoryOptions().as("optionList");

  cy.get("@optionList")
    .its("length")
    .then((listLength) => {
      const optionToClick = getRandomNumber(listLength);
      HomePage.clickCategoryOptionRandomly(optionToClick);
    });

  cy.wait(1000);
});

Cypress.Commands.add("ClickItem", () => {
  HomePage.getCategoryItems().as("itemList");

  cy.get("@itemList")
    .its("length")
    .then((listLength) => {
      const itemToClick = getRandomNumber(listLength);
      HomePage.clickCategoryItemRandomly(itemToClick);
    });
});

Cypress.Commands.add("AddMoreThanOneProduct", (quantity = 1) => {
  let quantityAdded = 0;

  do {
    cy.ClickCategory();
    cy.ClickItem();
    ProductPage.clickAddToCartButton();
    HomePage.clickNavBarOption("Home");
    quantityAdded++;
  } while (quantityAdded < quantity);
});
