describe('Validate different tests in Orange HRM ', () => {

    beforeEach(function () {

        cy.HRMLogin("Admin", "admin123")
        cy.visit("/")
    })

    it.only('Validate timesheet page ', function () {

        cy.visit("/web/index.php/time/viewEmployeeTimesheet")
        //continue writing your script here
        cy.get().selectFile

    })


    it('Validate Myinfo page ', function () {

        cy.visit("/web/index.php/pim/viewMyDetails")
        //continue writing your script here
    })


    it('Validate Employee report ', function () {

        cy.visit("/web/index.php/time/displayEmployeeReportCriteria")
        //continue writing your script here

    })



})