/// <reference types='cypress'/>

describe('DOM Elements Access', () => {

    it('Sample Test', () => {

        //Visit the website
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
        // cy.contains('Tablets').click()
        // cy.get('.list-group-item').last().prev().click()
        //Get the image details

        /*  first()
            last()
            eq()
            contains()
        */

        cy.get('.image').first().click()
        cy.go('back')
        cy.get('.image').eq(2).click()
       // cy.get('.list-unstyled').eq(1).first().click()

        //cy.get('footer > .container > .row > :nth-child(2)>a').first().click()
        //cy.get('.list-unstyled>li').first().click({force:true})
       // cy.get('.nav > :nth-child(2) > .dropdown-toggle').click()
        
        //cy.get('.image').last().click()
        //cy.get('.image').eq(2).click()
        //cy.contains('5D').click()


    });


});