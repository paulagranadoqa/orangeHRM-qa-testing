import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Orange HRM tests', () => {

  const selectorsList = {
    
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
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
  dateOfBirthField:  {
    label: "Date of Birth", 
    target: "input" 
  },
    nationalityField:  {
    label: "Nationality", 
    target: "div.oxd-select-wrapper" 
  },
  maritalStatusField:  {
    label: "Marital Status", 
    target: "div.oxd-select-wrapper"  
  }
}
    
it('User Info Update', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)  
  
  cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
   
  cy.get(selectorsList.myInfoButton).click()
  cy.get(selectorsList.firstNameField).clear().type('Tyler')
  cy.get(selectorsList.middleNameField).clear().type('Crazy')
  cy.get(selectorsList.lastNameField).clear().type('Dandelion')

  cy.contains('label', selectorsList.employeeIdField.label)
      .parents('.oxd-input-group') 
      .find(selectorsList.employeeIdField.target)  
      .clear()
      .type('12345');

  cy.contains('label', selectorsList.otherIdField.label)
      .parents('.oxd-input-group')
      .find(selectorsList.otherIdField.target)
      .clear()
      .type('ABC-6789');

  cy.contains('label', selectorsList.driversLicenseField.label)
      .parents('.oxd-input-group')
      .find(selectorsList.driversLicenseField.target)
      .clear()
      .type('XYZ-1011');

  cy.contains('label', selectorsList.dateOfBirthField.label) 
      .parents('.oxd-input-group')                       
      .find(selectorsList.dateOfBirthField.target)           
      .clear()
      .type('1990-01-01');   
 
  cy.get('button[type="submit"]').eq(0).click(); 
  
  cy.get('.oxd-toast-start').should('be.visible').and('contain.text', 'Successfully Updated');

  cy.wait(2000);
});
  
})

