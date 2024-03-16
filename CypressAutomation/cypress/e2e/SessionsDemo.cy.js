describe('Validate different tests in Orange HRM ', () => {

    beforeEach(function () {

       cy.HRMLogin("Admin","admin123")     
    })

    it('Validate timesheet page ', function () {

        cy.visit("/web/index.php/time/viewEmployeeTimesheet")
        //continue writing your script here
        cy.get('[type="button"]').eq(2).click()

    })

    //Cypress will clear the cookies and temparatory storage details

    it('Validate Myinfo page ', function () {

        cy.visit("/web/index.php/pim/viewMyDetails")
        //continue writing your script here
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