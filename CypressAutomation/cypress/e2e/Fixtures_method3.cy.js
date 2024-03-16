
const testDataValue=require('../fixtures/Login.json')

describe("Read the data from fixtures", () => {
   
    it('Login test', () => {

     cy.visit(testDataValue.URL)

        //Enter user email id
        cy.get("#input-email").type(testDataValue.email,{ log: false })

        //Enter passwrod
        cy.get("#input-password").type(testDataValue.password, { log: false })

        //Click on Login button
        cy.get('[value="Login"]').click()
    })

})