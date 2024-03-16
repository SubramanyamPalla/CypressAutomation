describe("Webtable handling in cypress", () => {

    beforeEach(function () {

        cy.viewport(1280, 820)

        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")

        //Enter User name
        cy.get("#input-username").type("demo")

        //Enter password
        cy.get("#input-password").type("demo")

        //Click on submit button
        cy.get('[type="submit"]').click()

        //close notification pop up
        cy.get(".btn-close").click()

        //Click on customer name menu
        cy.get("#menu-customer>a").click()

        //Click on customer sub menu
        cy.get("#menu-customer>ul>li:first-child").click()

    })


    it("Check number of rows and columns on a web table", () => {

        //Check number of rows on the table
        cy.get(".table>tbody>tr").should('have.length', 10)

        //Check number of columns on the table
        cy.get(".table>thead>tr>td").should('have.length', 7)

    })

    it("Check cell data on specific row & column", () => {

        cy.get('.table>tbody>tr:nth-child(5)>td:nth-child(4)').then((test) => {
            let data = test.text()
            cy.log(data)
        })

    })

    it("How to read all the rows & column data in the table", () => {
        //Read all data from rows & columns
        cy.get(".table>tbody>tr>td")
    })
    it.only("Pagination", () => {

        cy.get(".col-sm-6.text-end").then((e) => {
            let totaltext = e.text()

            let number = totaltext.indexOf("(") + 1

            let text = totaltext.indexOf("Pages") - 1

            cy.log(number, text)

            //totaltext.substring( totaltext.indexOf("(")+1,  totaltext.indexOf("Pages")-1)

          let totalnumber= totaltext.substring(26,30)

          cy.log(totalnumber)

        })

    })


})