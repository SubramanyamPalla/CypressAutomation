
describe("Tooltip", () => {


    it("verify tool tip on bottom", () => {
        cy.visit("https://practice.expandtesting.com/tooltips")

        cy.get('#btn3').trigger('mouseover')

        cy.get('.tool,tip-inner').should('have.text', 'Tooltip on bottom')

        //Get tool tip text

        cy.get('.tooltip-inner').then((test) => {
            let tooltiptext = test.text()

            cy.log(tooltiptext)
        })


        //cy.get('.tooltip-inner').should('have.text','Tooltip on top')

    })

    it('verify tooltip on top', () => {
        cy.visit("https://practice.expandtesting.com/tooltips")

        cy.get('#btn5').trigger('mouseover')

        cy.get('.tooltip-inner').should('have.text', 'Tooltip with HTML')
    })

    it('Verify mouseover and tooltip on spotify site', () => {

        cy.viewport(1920,1024)
        cy.visit("https://open.spotify.com/")

        cy.get(".IconWrapper__Wrapper-sc-16usrgb-0.jEDcnm").trigger('mouseover')

        //cy.get('.tooltip-inner').should('have.text','Collapse your Library')

        cy.contains('Collapse Your Library').should('be.visible')

        cy.get('#hover-or-focus-tooltip').contains('collapse your library',{matchCase:false})
        //cy.pause()

    })


    it("verify mouseover ",()=>{
        cy.visit("https://www.globalsqa.com/")        

        cy.get("#menu>ul>li:nth-child(3)").trigger('mouseover')
        cy.wait(4000)

        cy.get("#menu>ul>li:nth-child(3)").trigger('mouseout')

    })


    it("Verify mouse down",()=>{

        cy.viewport(1920,1024)
        cy.HRMLogin("Admin", "admin123")

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")


        cy.get('[placeholder="Search"]').type('p').trigger('mousedown')
        
    })


    it('Mouse down',()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home")

        cy.get("a[href='https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20'][data-toggle='dropdown']").trigger('mouseover',{force:true})
        
    })


    it("verify tool tip", () => {
        cy.visit("https://open.spotify.com/")

        cy.get("button[aria-label='Collapse Your Library']").trigger('mouseover')
        //cy.get('.tooltip-inner').should('have.text','Tooltip on top')

    })

    it("verify tool tip", () => {
        // cy.visit("https://www.globalsqa.com/demo-site/tooltip/")

        // cy.get("#menu>ul>li:nth-child(3)").trigger('mouseover')
        // //cy.get('.tooltip-inner').should('have.text','Tooltip on top')
        // cy.get("#menu>ul>li:nth-child(3)").trigger('mousedown')

        cy.visit("https://www.globalsqa.com/demo-site/tooltip/#Forms%20Based")

        cy.get('.resp-tabs-list>li:nth-child(3)').click()

        cy.get("#firstname").trigger('mouseover')


    })

})