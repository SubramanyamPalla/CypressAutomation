//Alerts example sites
/* 
1. https://www.letskodeit.com/practice
2.https://demo.automationtesting.in/Alerts.html
3. https://the-internet.herokuapp.com/javascript_alerts
4. https://letcode.in/alert
5. https://www.hyrtutorials.com/p/alertsdemo.html
6. https://testpages.herokuapp.com/styled/alerts/alert-test.html
7. https://artoftesting.com/samplesiteforselenium
8. https://demoqa.com/alerts
9. https://demo.guru99.com/test/delete_customer.php
10. https://qa-practice.netlify.app/alerts
11. https://testautomationpractice.blogspot.com/
*/

describe("alets handling",()=>{

    beforeEach(function(){
        //cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })

//Js alert handling

it('Js alert handle',()=>{
    

    //Click on js alert button

    //Cypress will handle by default, 

    cy.get('[onclick="jsAlert()"]').click()

    //Alert handle using cypress events

    cy.on('window:alert',(test)=>{

        expect(test).to.contain('I am a JS Alert')
    })

    cy.get('#result').should('have.text','You successfully clicked an alert')

})


it('Handling confirmation alerts',()=>{

    //Click on confirmation alert button
    cy.get('[onclick="jsConfirm()"]').click()

    //Cyprss events for confimraiton alert

    cy.on('window:confirm',(data)=>{

        expect(data).to.equal('I am a JS Confirm')
    })

    cy.get('#result').should('have.text','You clicked: Ok')

})

it('Handling confirmation alerts-CLick on cancel button',()=>{

    //Click on confirmation alert button
    cy.get('[onclick="jsConfirm()"]').click()

    //Cyprss events for confimraiton alert

    cy.on('window:confirm',()=>false)

    cy.get('#result').should('have.text','You clicked: Cancel')

})

it('Handling promt alert',()=>{

   cy.window().then((test)=>{

        cy.stub(test,'prompt').returns('Im promt alert')
   })

   cy.get('[onclick="jsPrompt()"]').click()

   cy.get('#result').should('have.text','You entered: Im promt alert')

})



it.only('Handling autherisation alert',()=>{

    //Approch number1

    // cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
    //                                                          {username:"admin",password:"admin"}
    //                                                         })

//Approch number2

cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")


})

})
