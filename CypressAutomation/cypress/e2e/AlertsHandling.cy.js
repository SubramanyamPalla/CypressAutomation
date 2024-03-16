

describe.skip('Alerts', () => {

    beforeEach(function () {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    //JS simple Alert
    it("alerts handling", () => {

        cy.get('[onclick="jsAlert()"]').click()

        cy.on('window:alert', (text) => {

            expect(text).to.equal('I am a JS Alert')
        })

    })


    it("Confirm alert handling", () => {

        cy.get('[onclick="jsConfirm()"]').click()

        // cy.on('window:confirm', (text) => {
        //     expect(text).to.equal('I am a JS Confirm')

        // })

        //To click on cancel button in confirm alert
        cy.on('window:confirm', () => false)
        //Verify success message

        cy.get("#result").should('have.text', 'You clicked: Cancel')

    })

    //JS Confirm Alert

    it("Promt alert handling", () => {

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Promt alret')
        })

        cy.get('[onclick="jsPrompt()"]').click()

        cy.get("#result").should('have.text', 'You entered: Promt alret')
    })


    it.only("Authenticated window alert", () => {
        //Approch number1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})

        // cy.get('div[class="example"] p').should('have.contain','Congratulations!')

        //Approch number2

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('div[class="example"] p').should('have.contain','Congratulations!')
    })

})

describe("Alerts practice with other website",()=>{

    it.only('Alert ',()=>{
        cy.viewport(1920,1024)
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get("#login2").click()
        cy.wait(2000)
        cy.get("#loginusername").type("cypress@yopmail.com")
        cy.get("#loginpassword").type("Test@123")
        cy.get('[onclick="logIn()"]').click({force:true})
        
    })

})