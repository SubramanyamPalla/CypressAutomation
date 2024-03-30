describe('Validate different tests in Orange HRM ', () => {

    beforeEach(function () {

        cy.HRMLogin("Admin", "admin123")
    })

    it('Validate timesheet page ', function () {

        cy.visit("/web/index.php/time/viewEmployeeTimesheet")
        //continue writing your script here
        cy.get('[type="butto"]').eq(2).click()

    })

    //Cypress will clear the cookies and temparatory storage details

    it.skip('Validate Myinfo page ', function () {
        cy.visit("/web/index.php/pim/viewMyDetails")
        //continue writing your script here
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.oxd-button--ghost').click();
        cy.get('.orangehrm-header-container > .oxd-button').should('be.visible');
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('have.text', ' Search ');
        /* ==== End Cypress Studio ==== */
    })



    it('Validate Employee report ', function () {

        cy.visit("/web/index.php/time/displayEmployeeReportCriteria")
        //continue writing your script here

    })

    it("Navigate to Recuitment page", function () {
        cy.visit("/web/index.php/recruitment/viewCandidates")
    })

    it("access PIM page", function () {

        cy.visit("/web/index.php/pim/viewEmployeeList")


    })



})