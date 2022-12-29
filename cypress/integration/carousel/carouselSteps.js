import { When, Then } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../pages/HomePage";
import carouselData from "../../fixtures/carouselData.json";

const homePage = new HomePage();

When("User waits for carousel change its image", () => {
  cy.wait(6000);
  homePage.getSliderActiveImage().as("secondImageShown");
});

Then("Sees a diferent image from the first one", () => {
  cy.get("@secondImageShown")
    .should("have.attr", "src")
    .then((srcText) => {
      expect(srcText).to.not.equal(carouselData.firstSlideSrc);
    });
});

When("User clicks {string} button", (buttonToClick) => {
  homePage.clickCarouselButton(buttonToClick);
  cy.wait(1000);
  homePage.getSliderActiveImage().as("imageShown");
});

Then("Sees {string} slide", (slideToCheck) => {
  cy.get("@imageShown")
    .should("have.attr", "src")
    .then((srcText) => {
      expect(srcText).to.equal(carouselData[slideToCheck + "SlideSrc"]);
    });
});
