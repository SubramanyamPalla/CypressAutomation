describe('DOM Elements Access', () => {

    it('Sample Test', () => {

        //Visit the website
        cy.visit('https://www.letskodeit.com/practice')
        
        cy.window().then((win)=>{
            //cy.stub(win,'print').as('print')
            cy.stub(win, 'open').as('open')
            .returns('false')
    })
    cy.get('#openwindow').invoke('attr','onclick','_self').click()
  })
})