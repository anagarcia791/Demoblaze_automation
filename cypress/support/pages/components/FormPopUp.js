const pageLocators = {
  modalContainer: ".modal-content",
  modalHeader: ".modal-header",
  modalBody: ".modal-body",
  modalFooter: ".modal-footer",
  contactFormTitle: "#exampleModalLabel",
  aboutUsFormTitle: "#videoModalLabel",
  logInFormTitle: "#logInModalLabel",
  signInFormTitle: "#signInModalLabel",
};

class FormPopUp {
  getModalContainer() {
    return cy.get(pageLocators.modalContainer);
  }

  getModalHeader() {
    return cy.get(pageLocators.modalHeader);
  }

  getModalBody() {
    return cy.get(pageLocators.modalBody);
  }

  getModalFooter() {
    return cy.get(pageLocators.modalFooter);
  }

  getFormTitle(expectedForm) {
    switch (expectedForm) {
      case "Contact":
        return cy.get(pageLocators.contactFormTitle);
        break;
      case "About us":
        return cy.get(pageLocators.aboutUsFormTitle);
        break;
      case "Log in":
        return cy.get(pageLocators.logInFormTitle);
        break;
      case "Sign up":
        return cy.get(pageLocators.signInFormTitle);
        break;
      default:
        break;
    }
  }
}

export default new FormPopUp();
