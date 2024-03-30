
//This class will stores the elements xpaths/css selector details
class loginPageObjects {


    UserName() {
        return cy.xpath("//input[@name='uid']")
    }

    password() {
        return cy.xpath("//input[@name='password']")
    }

    clickonLoginButton() {

        return cy.xpath("//input[@name='btnLogin']")

    }

}


const loginPage = new loginPageObjects()

Cypress.Commands.add('LoginWithValidCredentials', (username, password) => {

    cy.session('NewSesssion', () => {
        cy.visit('https://demo.guru99.com/V4/index.php')
        loginPage.UserName().should('be.visible')
        loginPage.UserName().type(username)
        loginPage.password().should('be.visible')
        loginPage.password().type(password)
        loginPage.clickonLoginButton().click()

    })

})





export default loginPageObjects
