const pageLocators = {
  navBarOptions: ".nav-item",
  sliderActiveImage: "div[class*='carousel-item active'] img",
  carouselNextButton: ".carousel-control-next",
  carouselPrevButton: ".carousel-control-prev",
  categoriesTitle: "#cat",
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

  clickNavBarHomeOption() {
    return this.getNavBarOption("Home").click();
  }

  clickCarouselNextButton() {
    return this.getCarouselNextButton().click();
  }

  clickCarouselPrevButton() {
    return this.getCarouselPrevButton().click();
  }
}
export default HomePage;
