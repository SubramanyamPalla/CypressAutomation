
describe('XYZ bank Suite', () => {

    beforeEach(function () {

        //ViewPort setting
        cy.viewport(1920, 1080)

        //Load the fixture file
        cy.fixture('test_data').then((data) => {

            this.data = data

            //Launching website for all it blocks
            cy.launchWebsite(this.data.url)
        })

    })

    it('Click on manager login button', function () {

        //Clicking on manager login button
        cy.clickOnMangerLoginButton()
    })


})