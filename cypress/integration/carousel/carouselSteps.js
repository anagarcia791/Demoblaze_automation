import { When, Then } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../../support/pages/HomePage";

And("Fixture's data is instantiated", () => {
  cy.fixture("carouselData").as("carouselData");
});

When("User waits for carousel change its image", () => {
  cy.wait(6000);
  HomePage.getSliderActiveImage().as("secondImageShown");
});

Then("Sees a diferent image from the first one", () => {
  cy.get("@carouselData").then((imageSrc) => {
    cy.get("@secondImageShown")
      .should("have.attr", "src")
      .then((srcText) => {
        expect(srcText).to.not.equal(imageSrc.firstSlideSrc);
      });
  });
});

When("User clicks {string} button", (buttonToClick) => {
  HomePage.clickCarouselButton(buttonToClick);
  cy.wait(1000);
});

Then("Sees {string} slide", (slideToCheck) => {
  HomePage.getSliderActiveImage().as("imageShown");

  cy.get("@carouselData").then((imageSrc) => {
    cy.get("@imageShown")
      .should("have.attr", "src")
      .then((srcText) => {
        expect(srcText).to.equal(imageSrc[slideToCheck + "SlideSrc"]);
      });
  });
});
