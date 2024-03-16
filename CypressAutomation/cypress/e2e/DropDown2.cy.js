


describe('DropDown Practice', () => {

    it('Dynamic dropdown',()=>{
       cy.visit('https://www.amazon.in/')
       cy.get('#twotabsearchtextbox').type('laptop')
       //cy.pause()
       cy.get('.left-pane-results-container').find('div').contains('bag').click()
    
    })

    it.only('Multi select values',()=>{

        cy.visit('https://letcode.in/selectable')
        cy.get('#container').find('h3').contains('Selenium').click()
        cy.get('body').type('{ctrl}', {release: false})
        cy.get('#container').find('h3').contains('TestNg').click()
        cy.get('#container').find('h3').contains('Protractor').click()
      
    })
    
});