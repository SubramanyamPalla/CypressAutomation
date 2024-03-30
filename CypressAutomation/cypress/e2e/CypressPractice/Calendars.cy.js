describe('Calendar handling', () => {
    it('Handling calendars', () => {
        cy.visit('https://commitquality.com/add-product')

        cy.get('[data-testid="product-textbox"]',{timeout:2000}).type('NewProduct')

        cy.get('[data-testid="price-textbox"]').clear().type('123')

        cy.get('[data-testid="date-stocked"]').type('2010-10-02')

        //cy.get('#dateStocked').trigger('keydown')
        // parseSpecialCharSequences: false ,
        //cy.get('#dateStocked').type('{shift}{space}')
    })

    it('Date selection in inside iframe', () => {

        cy.SelectADateValue("28")

        cy.iframe('[class="demo-frame lazyloaded"]').find('#datepicker').scrollIntoView()
    })


    it('Calendar practice for single month calendar', () => {
        cy.visit('https://www.hyrtutorials.com/p/calendar-practice.html')

        cy.get('#first_date_picker').click()

        cy.get('#ui-datepicker-div').find('tbody>tr>td>a')
            .each((ele) => {
                let dates = ele.text()
                //Implementing for-loop for selecting dates
                // for(let i=0; i<=dates; i++)
                // {
                //     cy.wrap(ele).click({force:true})
                // }

                if (dates == '20') {
                    cy.wrap(ele).click()
                }
            })

            cy.get('#first_date_picker').scrollIntoView()
    })


    it('Calendar selection through image tag',()=>{
        cy.visit('https://www.hyrtutorials.com/p/calendar-practice.html')

        cy.get('.ui-datepicker-trigger').click()

        cy.get('#ui-datepicker-div').find('tbody>tr>td>a')
        .each((date)=>{
            
           let datevalues=date.text()
           //1,2,3,4,5

           if(datevalues=='25')
           {
            cy.wrap(date).click()
           }

        })



    })

    it('Calendar practice for 2months calendar',()=>{

       cy.twoMonthsCalendar('1','25')
        // cy.wait(5000)
        // //Click on accept cookie link
        // cy.get('#onetrust-accept-btn-handler').click()

        // //click on date picker
        cy.get('.startDateWrapper > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').as('datepicker')
        // cy.get('@datepicker').first().click({force:true})
        
    })

    it('paytm travels task ',()=>{
        cy.visit('https://tickets.paytm.com/flights/')

        cy.wait(2000)
        cy.get('#flightSearch').as('searchButton')
        cy.get('@searchButton').should('be.visible')
        cy.get('@searchButton').click()
    })

    it('Practice tests URL',()=>{
        cy.visit('https://www.vskills.in/practice/cypress-questions-practice-test')
    })
})