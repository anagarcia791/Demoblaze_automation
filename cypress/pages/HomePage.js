const pageLocators = {
  sliderActiveImage: "div[class*='carousel-item active'] img",
  carouselNextButton: ".carousel-control-next",
  carouselPrevButton: ".carousel-control-prev",
  navBarOptions: ".nav-item",
};

class HomePage {
  getNavBarOption(option) {
    return cy.get(pageLocators.navBarOptions).contains(option);
  }

  getSliderActiveImage(costumerTimeout) {
    return cy.get(pageLocators.sliderActiveImage, { timeout: costumerTimeout });
  }

  getCarouselNextButton() {
    return cy.get(pageLocators.carouselNextButton);
  }

  getCarouselPrevButton() {
    return cy.get(pageLocators.carouselPrevButton);
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
