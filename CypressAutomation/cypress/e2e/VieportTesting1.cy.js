/// <reference types='cypress'/>



describe.skip('ViewportTesting File2', () => {


   it('Launching the website', () => {

      cy.viewport('ipad-2')
      //cy.viewport(1024,820)
      cy.visit('https://www.amazon.in/')
      cy.viewport()

   });

   it('Launching the website with orienetation', () => {

      cy.viewport('macbook-11')
      //cy.viewport('samsung-s10')
      cy.visit('https://www.amazon.in/')

   });



});


describe('ViewportTesting File2', () => {


   it('Launching the website', () => {

      cy.viewport('ipad-2')
      //cy.viewport(1024,820)
      cy.visit('https://www.amazon.in/')

   });

   it.only('Launching the website with orienetation', () => {

      cy.viewport('macbook-11')
      //cy.viewport('samsung-s10')
      cy.visit('https://www.amazon.in/')

   });



});






