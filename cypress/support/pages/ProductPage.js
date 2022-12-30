const pageLocators = {
  productContenedor: ".product-content",
  addToCartButton: `a[onClick*='addToCart']`,
};

class ProductPage {
  getProductContenedor() {
    return cy.get(pageLocators.productContenedor);
  }

  getAddToCartButton() {
    return cy.get(pageLocators.addToCartButton);
  }

  clickAddToCartButton() {
    return this.getAddToCartButton().click();
  }
}

export default new ProductPage();
