import testData from '../fixtures/Register.json'

describe("Read the data from fixtures", () => {
   
       it('Login test', () => {

        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
   
           //Enter user email id
           cy.get("#input-email").type(testData.login.email,{ log: false })
   
           //Enter passwrod
           cy.get("#input-password").type(testData.login.password, { log: false })
   
           //Click on Login button
          cy.get('[value="Login"]').click()
       })
   
   })