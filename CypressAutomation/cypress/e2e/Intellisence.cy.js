
describe("mouseover",()=>{

    it("Mousehove on product",()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')

        
    })
})