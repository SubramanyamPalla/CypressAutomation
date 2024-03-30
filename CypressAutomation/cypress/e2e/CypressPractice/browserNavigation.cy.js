

describe('DOM Elements Access', () => {

    it('Sample Test', () => {

        //Visit the website
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
        cy.contains('Tablets').click()
        //cy.contains('Samsung Galaxy Tab 10.1').click()
        //Browser navigate back
        cy.go('back')
        //cy.go(-2)
        //Browser forward
        //cy.go('forward')
        cy.go(1)

    })
})