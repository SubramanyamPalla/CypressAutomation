class managersPageObjects {

    bankManagerLoginButton() {
        return cy.xpath('(//button[@class="btn btn-primary btn-lg"])[2]')
    }





}

//Create object for above class
const bankManagerPage = new managersPageObjects()

//Create custom command for bank manager login button
Cypress.Commands.add('clickOnMangerLoginButton', () => {
    //Verify manaber button is visible
    bankManagerPage.bankManagerLoginButton().should('be.visible')

    //Click on manager login button
    bankManagerPage.bankManagerLoginButton().click({force:true})
})


//Create custom command for lauching the website
Cypress.Commands.add('launchWebsite', (url) => {
    //Lanch website URL
    cy.visit(url)
    //Assertion
    cy.url().should('include', '/login')
})




export default managersPageObjects