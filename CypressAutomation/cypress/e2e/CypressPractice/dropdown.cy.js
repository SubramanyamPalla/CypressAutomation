describe("test",()=>{

    it('Test',()=>{

        cy.viewport(1920,1024)
        cy.HRMLogin("Admin", "admin123")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

        cy.get('.oxd-select-wrapper').eq(2).click()
        cy.contains('HR Manager').click()

        cy.get('.oxd-select-wrapper>div[class="oxd-select-text oxd-select-text--active"]').eq(2).click()
        cy.contains('HR Manager').click()

        cy.get(".oxd-icon.bi-caret-down-fill.oxd-select-text--arrow").eq(2).click()
       cy.contains("QA lead",{matchCase:false}).click()



    })
})