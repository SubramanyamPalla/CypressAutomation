

describe('Assertions', () => {

    it('Sample Test', () => {

        //Visit the website
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
        //Verify element is exist or not

        cy.get('#logo').should('exist')

        //Verify if element have a class or not

        cy.get('[title="naveenopencart"]').should('have.class', 'img-responsive')

        //Verify attribute 

        cy.get('[title="naveenopencart"]').should('have.attr', 'alt', 'naveenopencart')

        //Verify title of the page

        //cy.title().should('be.visible','Your Store')

    })


    it('Demo2', () => {

        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')

        cy.get('#select-demo').should('have.value', 'Sunday')

    })

    it("verify value property", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

        //verify firstname field

        cy.contains('Your Personal').should('be.visible')
        cy.contains('Register').should('not.be.visible')
        cy.get('#input-firstname').should('be.visible')

        cy.get('#input-telephone').should('not.have.value', 'Telephone')

    })

    it("verify disabled field", () => {
        cy.visit('https://letcode.in/edit')

        cy.get('#fullName').should('be.enabled')

        cy.get('#noEdit').should('be.disabled')

    })

    it('verify length of the elements', () => {
        cy.viewport(1920, 800)
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
        cy.get('.image').should('have.length', 4)
    })

    it.only('Registration Form', () => {
        //Launch the website
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

        //Verify URL part

        cy.url().should('include', '/register')

        //Verify title
        cy.title().should('eq', 'Register Account')

        //Verify personal details section
        cy.contains('Your Personal').should('be.visible')

        //Veify firstname is enabled or not
        cy.get('#input-firstname').should('be.enabled')

        //Verify firtname is visible
        cy.get('#input-firstname').should('be.visible')
      
        //CLick on continue button -1sc
        cy.get("[value='Continue']").click()

        //Verify warning message text- 1sec
        cy.get('.alert.alert-danger.alert-dismissible').should('have.text', ' Warning: You must agree to the Privacy Policy!')

        //Verify email address error message text-2sec
        cy.get('.text-danger').eq(2).should('have.text', 'E-Mail Address does not appear to be valid!')

        //Verify email address multi asserssion -1+1+1=3sec
        cy.get('#input-email').should('be.visible').and('have.class', 'form-control').and('have.attr', 'name')

        cy.get('#input-email').should('have.prop', 'type', 'email').should('have.prop', 'name', 'email')
            .should('have.prop', 'placeholder', 'E-Mail')

        //Check check box
        cy.get("[name='agree']").check()

        //Verify check box status
        cy.get("[name='agree']").should('be.checked')

        //uncheck the check box
        cy.get("[name='agree']").uncheck()

        //Verify check box status
        cy.get("[name='agree']").should('not.be.checked')

        //Ctrl+A, shift+alt+F-- To adjsut the alighments

        //Select YES radio button
        cy.get("[name='newsletter']").eq(0).check().should('be.checked')

        //Apply assertions on YEs radio button
        //cy.get("[name='newsletter']").should('be.checked')




    })


})