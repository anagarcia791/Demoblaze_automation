var pageLocators = {
  sliderActiveImage: "div[class*='carousel-item active'] img",
};

class HomePage {
  getSliderActiveImage(costumerTimeout) {
    return cy.get(pageLocators.sliderActiveImage, { timeout: costumerTimeout });
  }
}
export default HomePage;
