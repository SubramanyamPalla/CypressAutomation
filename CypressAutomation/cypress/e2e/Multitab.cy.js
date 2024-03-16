

describe('DOM Elements Access', () => {

    it.only('Remove Target value from DOM', () => {

        //Visit the website
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('[data-uniqid="1621702280245"]').contains('practice page',{matchCase:false})

        // //CLick on open tab button
        // cy.get('#opentab').invoke('removeAttr', 'target').click()


        // //Verify category text
        // cy.contains('category',{matchCase: false}).should('be.visible')

    })


    it('Update Target value in DOM', () => {
        //Visit the website
        cy.visit('https://www.letskodeit.com/practice')

        //update target value to _self
        cy.get('#opentab').invoke('attr', 'target', '_self').click()

        //Verify category text
        cy.contains('Category').should('be.visible')
    })


    it('Remove target value from Dom',()=>{
        cy.visit('https://test.io/coverage/website-testing')

        //Click on Talk to QA button
        //cy.get(".action-button__button.button--teal.button--big").click()

        //Remove target value
        cy.get(".action-button__button.button--teal.button--big").invoke('removeAttr','target').click()


    })

    it('Update Target value in DOM', () => {
        cy.visit('https://test.io/coverage/website-testing')

        //Click on Talk to QA button
        //cy.get(".action-button__button.button--teal.button--big").click()

        //Remove target value
        cy.get(".action-button__button.button--teal.button--big").invoke('attr','target','_self').click()
    })

})