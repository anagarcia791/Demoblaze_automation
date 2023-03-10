const pageLocators = {
  navBarOptions: ".nav-item",
  sliderActiveImage: "div[class*='carousel-item active'] img",
  carouselNextButton: ".carousel-control-next",
  carouselPrevButton: ".carousel-control-prev",
  categoriesTitle: "#cat",
  categoryOptions: ".list-group #itemc",
  categoryItems: "#tbodyid .card",
};

class HomePage {
  getNavBarOption(option) {
    return cy.get(pageLocators.navBarOptions).contains(option);
  }

  getSliderActiveImage() {
    return cy.get(pageLocators.sliderActiveImage);
  }

  getCarouselNextButton() {
    return cy.get(pageLocators.carouselNextButton);
  }

  getCarouselPrevButton() {
    return cy.get(pageLocators.carouselPrevButton);
  }

  getCategoriesTitle() {
    return cy.get(pageLocators.categoriesTitle);
  }

  getCategoryOptions() {
    return cy.get(pageLocators.categoryOptions);
  }

  getCategoryItems() {
    return cy.get(pageLocators.categoryItems);
  }

  clickNavBarOption(option) {
    return this.getNavBarOption(option).click();
  }

  clickCarouselButton(buttonToClick) {
    if (buttonToClick === "previous") {
      return this.getCarouselPrevButton().click();
    }
    return this.getCarouselNextButton().click();
  }

  clickCategoryOptionRandomly(optionToClick) {
    return cy.get(`.list-group :nth-child(${optionToClick + 1})`).click();
  }

  clickCategoryItemRandomly(itemToClick) {
    return cy
      .get(`#tbodyid :nth-child(${itemToClick}) .card a :nth-child(1)`)
      .click();
  }
}

export default new HomePage();
