// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

//import data from '../fixtures/test_data.json'
import 'cypress-file-upload';
import 'cypress-iframe';





Cypress.Commands.add("LoginFunctionality", () => {
  cy.get('#username').type("username")
  cy.get('#passwrd').type('pass')
  cy.get('#login').click()
})
//If website is not loaded and getting uncaught exception error need to update below line
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Syntax for creating custom commands

Cypress.Commands.add('LoginWithValidCredentials', (email, password) => {

  cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  cy.get('[id="input-email"]').type(email);
  cy.get('[id="input-password"]').type(password);
  cy.get('[type="submit"]').eq(0).click();
})

Cypress.Commands.add('VerifyHomePageProductLength', (productNo) => {

  cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home")

  //Findout product
  cy.get(".image").should('have.length', productNo)

})

Cypress.Commands.add("verifyProductsLengthOnCategoryPage", (noOfProduct) => {
  cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20")

  cy.get(".image").should('have.length', noOfProduct)
})

Cypress.Commands.add("HRMLogin", (username,pass)=>{

  cy.session("loginsession", ()=>{
    cy.visit("/web/index.php/auth/login")
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(pass)
    cy.get('button[type="submit"]').click()

  })

})


Cypress.Commands.add(("HRMLogin"), (username, password) => {


  cy.session(("Login Session"), () => {
    cy.visit('https://demo.guru99.com/V1/index.php')
    cy.visit("/web/index.php/auth/login")
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()

  })

})


Cypress.Commands.add("Parabank_registration", () => {

  //Enter firstname

  cy.visit(data.url)
  cy.get('input[name="customer.firstName"]').type(data.Fname)

})

Cypress.Commands.add('test', () => {
  cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")

  const addcustomer = cy.get('[ng-class="btnClass1"]')
  addcustomer.click()

  var fname = cy.get('[ng-model="fName"]')
  fname.type('Test')

  var lname = cy.get('[ng-model="lName"]')
  lname.type('Test1')

  var pname = cy.get('[ng-model="postCd"]')
  pname.type('500018')


  var button = cy.get('[class="btn btn-default"]')
  button.click()

})

Cypress.Commands.add('SelectADateValue', (day) => {
  //Visit website
  cy.visit('https://www.globalsqa.com/demo-site/datepicker/')

  //Findout iframe
  cy.frameLoaded('[class="demo-frame lazyloaded"]')

  //Click on date picker inside the iframe
  cy.iframe('[class="demo-frame lazyloaded"]').find('#datepicker').click()

  //31 matched elements
  cy.iframe('[class="demo-frame lazyloaded"]').find('tbody>tr>td>a')
    .each((ele) => {

      let datevalues = ele.text()

      //cy.log(datevalues)

      if (datevalues == day) {
        cy.wrap(ele).click()
      }

      // for (let i = 0; i <= datevalues; i++) {
      //   cy.wrap(ele).click({force:true})

      // }



    })

  })

  Cypress.Commands.add('twoMonthsCalendar', (monthvalue,days) => {

    cy.viewport(1920, 1024)
    cy.visit('https://jqueryui.com/datepicker/#date-range')

    cy.frameLoaded('.demo-frame').should('be.visible')

    cy.iframe('.demo-frame').find('.hasDatepicker').eq(monthvalue).scrollIntoView().click()

    cy.iframe('.demo-frame').find('.ui-datepicker-calendar').first().find('tbody>tr>td>a')
      .each((ele) => {
        let eletext = ele.text()

        if (eletext == days) {
          cy.wrap(ele).click()
        }


      })

    cy.iframe('.demo-frame').find('.ui-datepicker-calendar').first().scrollIntoView()
  })
