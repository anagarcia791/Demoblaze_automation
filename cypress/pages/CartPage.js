const pageLocators = {
  cartProductsTable: ".table-responsive",
  itemsToBuy: ".success",
  totalPrice: "#totalp",
  placeOrderButton: ".btn-success",
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

  clickPlaceOrderButton() {
    return this.getPlaceOrderButton().click();
  }
}
export default CartPage;
