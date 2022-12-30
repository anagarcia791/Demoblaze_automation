import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import ProductPage from "../../support/pages/ProductPage";
import CartPage from "../../support/pages/CartPage";

And("Fixture's data is instantiated", () => {
  cy.fixture("urlsData").as("urlsData");
  cy.fixture("servicesData").as("servicesData");
  cy.fixture("placeOrderData").as("placeOrderData");
});

When("User checks default shown products through the API response", () => {
  cy.GetDefaultProducts();
});

Then("The quantity of shown products must be {int}", (expectedQuantity) => {
  cy.get("@defaultProducts")
    .its("length")
    .then((listLength) => {
      expect(expectedQuantity).to.equal(listLength);
    });
});

When("User clicks a category", () => {
  cy.ClickCategory();
});

And("Clicks a item", () => {
  cy.ClickItem();
});

Then("Sees new page with product detail info", () => {
  cy.get("@urlsData").then((urls) => {
    cy.url().should("contains", urls.productSelectedURL);
  });

  ProductPage.getProductContenedor().as("productContenedor");
  ProductPage.getAddToCartButton().as("addToCartButton");

  cy.get("@productContenedor").should("be.visible");
  cy.get("@addToCartButton").should("be.visible");
});

Given("User is in a product detail info page", () => {
  cy.ClickCategory();
  cy.ClickItem();
});

When("Clicks add to cart button", () => {
  ProductPage.clickAddToCartButton();
});

Then(
  "{int} products should be in the shopping cart",
  (expectedProductQuantityInCart) => {
    CartPage.getItemsToBuy().as("itemsToBuy");

    cy.get("@itemsToBuy")
      .its("length")
      .then((listLength) => {
        expect(expectedProductQuantityInCart).to.equal(listLength);
      });
  }
);

Given("User adds {int} product to shopping cart", (quantityToAdd) => {
  cy.AddMoreThanOneProduct(quantityToAdd);
  cy.wait(1000);
});

When("Clicks delete product n° {int} button", (productToDelete) => {
  CartPage.clickDeleteFromCartButton(productToDelete);
  cy.wait(1000);
});

When("Clicks place order button", () => {
  CartPage.clickPlaceOrderButton();
});

And("Fills all needed data for purchase", () => {
  cy.get("@placeOrderData").then((orderData) => {
    CartPage.typeOnNameInput(orderData.name);
    CartPage.typeOnCountryInput(orderData.country);
    CartPage.typeOnCityInput(orderData.city);
    CartPage.typeOnCreditCardInput(orderData.card);
    CartPage.typeOnMonthInput(orderData.month);
    CartPage.typeOYearInput(orderData.year);
  });
});

And("Clicks purchase button and confirm button", () => {
  CartPage.clickPurchaseButton();
  CartPage.clickConfirmButton();
});

Then("Shopping cart must be cleaned", () => {
  cy.wait("@deleteCartResponse").its("response.statusCode").should("eq", 200);
});
