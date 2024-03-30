
describe('Multiple domains', () => {

    it('origin', () => {

        cy.viewport(1920, 1024)
        //Navigate to google site--First Origin

        cy.visit('https://www.google.com/')

        //Search git hub 

        cy.get('.gLFyf').first().type('github {enter}')

        cy.get('[jsname="UWckNb"]').first().click()
        //Click on github link--2nd origin- https://github.com/

        cy.origin('https://github.com', () => {

            //Assertion

            cy.get('[href="/login"]').should('be.visible')

            //CLick on sign in link on github page

            cy.get('[href="/login"]').eq(1).click()


        })
    })

    it("Implement given scenarios in below website", () => {
        cy.visit('https://automationexercise.com/')


    })

    it("Dummy payment cards details", () => {

        cy.visit('https://support.bluesnap.com/docs/test-credit-card-numbers',{timeouts:2000})

        


    })


})