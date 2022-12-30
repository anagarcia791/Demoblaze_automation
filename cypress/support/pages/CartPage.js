const pageLocators = {
  cartProductsTable: ".table-responsive",
  itemsToBuy: ".success",
  totalPrice: "#totalp",
  placeOrderButton: ".btn-success",
  nameInput: "#name",
  countryInput: "#country",
  cityInput: "#city",
  creditCardInput: "#card",
  monthInput: "#month",
  yearInput: "#year",
  purchaseButton: `button[onClick*='purchaseOrder']`,
  confirmButton: ".confirm",
};

class CartPage {
  getCartProductsTable() {
    return cy.get(pageLocators.cartProductsTable);
  }

  getItemsToBuy() {
    return cy.get(pageLocators.itemsToBuy);
  }

  getTotalPrice() {
    return cy.get(pageLocators.totalPrice);
  }

  getPlaceOrderButton() {
    return cy.get(pageLocators.placeOrderButton);
  }

  getNameInput() {
    return cy.get(pageLocators.nameInput);
  }

  getCountryInput() {
    return cy.get(pageLocators.countryInput);
  }

  getCityInput() {
    return cy.get(pageLocators.cityInput);
  }

  getCreditCardInput() {
    return cy.get(pageLocators.creditCardInput);
  }

  getMonthInput() {
    return cy.get(pageLocators.monthInput);
  }

  getYearInput() {
    return cy.get(pageLocators.yearInput);
  }

  getPurchaseButton() {
    return cy.get(pageLocators.purchaseButton);
  }

  getConfirmButton() {
    return cy.get(pageLocators.confirmButton);
  }

  clickDeleteFromCartButton(productPosition) {
    return cy
      .get(`#tbodyid :nth-child(${productPosition}) a[onClick*='deleteItem']`)
      .click();
  }

  clickPlaceOrderButton() {
    return this.getPlaceOrderButton().click();
  }

  typeOnNameInput(text) {
    return this.getNameInput().invoke("val", text);
  }

  typeOnCountryInput(text) {
    return this.getCountryInput().invoke("val", text);
  }

  typeOnCityInput(text) {
    return this.getCityInput().invoke("val", text);
  }

  typeOnCreditCardInput(text) {
    return this.getCreditCardInput().invoke("val", text);
  }

  typeOnMonthInput(text) {
    return this.getMonthInput().invoke("val", text);
  }

  typeOYearInput(text) {
    return this.getYearInput().invoke("val", text);
  }

  clickPurchaseButton() {
    cy.get("@servicesData").then((services) => {
      cy.intercept("POST", services.deleteCart).as("deleteCartResponse");
    });

    return this.getPurchaseButton().click();
  }

  clickConfirmButton() {
    return this.getConfirmButton().click();
  }
}

export default new CartPage();
