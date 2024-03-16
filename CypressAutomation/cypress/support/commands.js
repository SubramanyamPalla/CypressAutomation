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
import testData from '../fixtures/LoginTest.json'
import 'cypress-file-upload';

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {

 })
//
Cypress.Commands.add("LoginFunctionality",()=>{
    cy.get('#username').type("username")
    cy.get('#passwrd').type('pass')
    cy.get('#login').click()
})

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

Cypress.Commands.add('LoginWithValidCredentials',(email,password)=>{

  cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  cy.get('[id="input-email"]').type(email);
  cy.get('[id="input-password"]').type(password);
  cy.get('[type="submit"]').eq(0).click();  
})

Cypress.Commands.add('VerifyHomePageProductLength',(productNo)=>{

  cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home")

  //Findout product
  cy.get(".image").should('have.length',productNo)

})

Cypress.Commands.add("verifyProductsLengthOnCategoryPage",(noOfProduct)=>{
  cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20")

  cy.get(".image").should('have.length',noOfProduct)
})

// Cypress.Commands.add("HRMLogin", (username,pass)=>{

//   cy.session("loginsession", ()=>{
//     cy.visit("/web/index.php/auth/login")
//     cy.get('input[name="username"]').type(username)
//     cy.get('input[name="password"]').type(pass)
//     cy.get('button[type="submit"]').click()
  
//   })
  
// })


Cypress.Commands.add(("HRMLogin"),(username,password)=>{


  cy.session(("Login Session"),()=>{

    cy.visit("/web/index.php/auth/login")
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()

})  

})