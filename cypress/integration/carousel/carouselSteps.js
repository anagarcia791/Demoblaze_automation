import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../pages/HomePage";
import carouselData from "../../fixtures/carousel.json";

const homePage = new HomePage();

Given("User visit the Demoblaze homepage", () => {
  cy.visit("/");
});

When("User waits for carousel change its image", () => {
  cy.wait(6000);
  homePage.getSliderActiveImage(0).as("secondImageShown");
});

Then("Sees a diferent image from the first one", () => {
  cy.get("@secondImageShown")
    .should("have.attr", "src")
    .then((srcText) => {
      expect(srcText).to.not.equal(carouselData.firstSlideSrc);
    });
});

When("User clicks next button", () => {
  homePage.clickCarouselNextButton();
  cy.wait(1000);
  homePage.getSliderActiveImage(0).as("imageShown");
});

When("User clicks previous button", () => {
  homePage.clickCarouselPrevButton();
  cy.wait(1000);
  homePage.getSliderActiveImage(0).as("imageShown");
});

Then("Sees {string} slide", (slideToCheck) => {
  cy.get("@imageShown")
    .should("have.attr", "src")
    .then((srcText) => {
      expect(srcText).to.equal(carouselData[slideToCheck + "SlideSrc"]);
    });
});
