describe("Handling iframes",()=>{

    it("Frames",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('Cypress Automation {ctrl+a}')
        cy.get('button[aria-label="Bold"]').click()
        
    })

    it("Frames",()=>{
        cy.visit("https://ui.vision/demo/webtest/frames/")

        cy.frameLoaded("frame[src='frame_1.html']").should('be.visible')
        cy.iframe('[name="mytext1"]').type('Cypress Automation {ctrl+a}')
        //cy.get('button[aria-label="Bold"]').click()
        
    })

    it("Frame",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe').scrollIntoView().should('be.visible')

        cy.iframe("#courses-iframe").contains('All Access plan').click()
    })

    it.only('Iframes method1',()=>{
        cy.visit("https://practice.expandtesting.com/iframe")

        //Approch1
        // cy.frameLoaded('#email-subscribe').should('be.visible')
        // cy.iframe('#email-subscribe').find('#email').type('test@yopmail.com')
        // cy.iframe('#email-subscribe').contains('Subscribe').scrollIntoView().click({force:true})

        //Approch2

        cy.get('#email-subscribe').its('0.contentDocument')
                                  .its('body')
                                  .find('#email').type('test@yopmail.com')
       
                    
        
        

    })


    it('Iframe handling approch1',()=>{
        
       
            
        //Launch site
        cy.visit('https://practice-automation.com/iframes/' )

        //Find the Iframe id
        // cy.get('#frame2').then((ele)=>{

        //     var burgermenu = ele.contents().find('[data-track-nav_item="search"]')

        //     cy.wrap(burgermenu).click()
        // })

        cy.frameLoaded('#frame1')
        cy.iframe('#frame1').contains('Documentation').click()


    })
})