import data from '../fixtures/LoginTest.json'

describe("Website Login and Product Search", () => {

    it("should navigate to the website, log in, and search for 'Macbook'", () => {

        cy.LoginWithValidCredentials(data.email, data.password)

        cy.get('[name="search"]').eq(0).type("Macbook");
        cy.get('button.btn.btn-default.btn-lg').click();
        cy.contains("Macbook").should('be.visible');
    });

    it('Verify products length', () => {
        cy.VerifyHomePageProductLength(4)
        cy.verifyProductsLengthOnCategoryPage(12)
    })

    it.only("login test",()=>{
        cy.visit("https://air4433.in.suremdm.io/console/v3/#/user/login")

        cy.get("#username").type("")

        cy.get("#password").type("")

        cy.get("#login-button").click()
    })

});