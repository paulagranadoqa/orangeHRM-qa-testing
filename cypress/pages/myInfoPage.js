class MyInfoPage {

  selectorsList() {
    return {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      firstNameField: "[placeholder='First Name']",
      middleNameField: "[placeholder='Middle Name']",
      lastNameField: "[placeholder='Last Name']",
      
      employeeIdField: {
        label: "Employee Id",
        target: "input"
      },
      otherIdField: {
        label: "Other Id",
        target: "input"
      },
      driversLicenseField: {
        label: "Driver's License Number",
        target: "input"
      },
      dateOfBirthField: {
        label: "Date of Birth",
        target: "input"
      },
      submitButton: 'button[type="submit"]',
      toastMessage: '.oxd-toast-start'
    }
  }

  goToMyInfo() {
    cy.get(this.selectorsList().myInfoButton).click()
  }

  fillPersonalNames(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  }

  fillEmployeeDetails(employeeId, otherId, driversLicense, dateOfBirth) {
    const selectors = this.selectorsList()

    cy.contains('label', selectors.employeeIdField.label)
      .parents('.oxd-input-group')
      .find(selectors.employeeIdField.target)
      .clear()
      .type(employeeId)

    cy.contains('label', selectors.otherIdField.label)
      .parents('.oxd-input-group')
      .find(selectors.otherIdField.target)
      .clear()
      .type(otherId)

    cy.contains('label', selectors.driversLicenseField.label)
      .parents('.oxd-input-group')
      .find(selectors.driversLicenseField.target)
      .clear()
      .type(driversLicense)

    cy.contains('label', selectors.dateOfBirthField.label)
      .parents('.oxd-input-group')
      .find(selectors.dateOfBirthField.target)
      .clear()
      .type(dateOfBirth)
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click()
    cy.get(this.selectorsList().toastMessage)
      .should('be.visible')
      .and('contain.text', 'Successfully Updated')
  }
}

export default MyInfoPage