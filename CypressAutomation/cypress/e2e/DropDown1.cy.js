describe('Mocha awesome report', () => {

    it('Handle dropdown with select tag', () => {

        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
       // cy.get('#select-demo').select('Sunday')
       //select a option by using text
        //cy.get('#select-demo').select('Tuesday')

         //select a option by using value
         //cy.get('#select-demo').select('Thursday')

         //Select a option by using index
         cy.get('#select-demo').select(7)
         
         //cy.get('#select-demo').select(0)

    })

    it('Multi select drop down',()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#multi-select').select([0,2,5,7])
        
    })

    it('Dropdown without select tag',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone')
        cy.get('.left-pane-results-container').find('div').contains('iphone 11').click()
        //cy.get('.left-pane-results-container').find('>div').contains('iphone 14').click()
    })

    it('tst-Best seller',()=>{
        cy.visit('https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers')

    })

    it('Test',()=>{
        cy.viewport(1920,1080)
        cy.visit('https://demo.automationtesting.in/Register.html')

    })
})