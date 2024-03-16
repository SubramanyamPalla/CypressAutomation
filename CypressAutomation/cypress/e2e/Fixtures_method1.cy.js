
describe("Read the data from fixtures", () => {


    beforeEach(() => {
        
        cy.fixture('Login.json').then(function (data) {
           this.value=data            

        //Launch the site
        cy.visit(this.value.URL)
        })

       

    })


    it.only('Login test', () => {

       
        //Enter user email id
        cy.get("#input-email").type(this.value.email, { log: false })

        //Enter passwrod
        cy.get("#input-password").type(this.value.password, { log: false })

        //Click on Login button
        cy.get('[value="Login"]').click()
    })

    it('Login test1', () => {

        //Enter user email id
        cy.get("#input-email").type(value.email, { log: false })

        //Enter passwrod
        cy.get("#input-password").type(value.password, { log: false })

        //Click on Login button
        cy.get('[value="Login"]').click()
    })
})