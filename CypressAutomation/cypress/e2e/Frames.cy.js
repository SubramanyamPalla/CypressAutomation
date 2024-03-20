describe("Handling iframes", () => {

    it("Frames", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        // cy.get('#tinymce').type("Welcome to the cypress automation")

        //Approch number1

        cy.get('#mce_0_ifr').then((iframe) => {

            let iframebody = iframe.contents().find('#tinymce')

            cy.wrap(iframebody).clear().type("Welcome to the cypress automation")


        })



        // cy.frameLoaded('#mce_0_ifr')
        // cy.iframe('#mce_0_ifr').clear().type('Cypress Automation {ctrl+a}')
        // cy.get('button[aria-label="Bold"]').click()

    })

    it("Nested Frames", () => {
        cy.visit("https://ui.vision/demo/webtest/frames/")


        //Identity iframe in the page== Frame1
        // cy.get('frame[src="frame_1.html"]').then((iframe1)=>{

        //    let iframebody= iframe1.contents().find('[name="mytext1"]')

        //     cy.wrap(iframebody).type("welcome to the test")
        // })

        //Frame4

        cy.get('frame[src="frame_4.html"]').then((data)=>{

            let testdata=data.contents().find('[name="mytext4"]')

            cy.wrap(testdata).type('Welcome to the Frame4')
        })


        //Approch number1 for Frame1

        // cy.frameLoaded("frame[src='frame_1.html']").should('be.visible')
        // cy.iframe("frame[src='frame_1.html']").find('[name="mytext1"]').type('Cypress Automation {ctrl+a}')

        //Approch number2 for Frame1

        // let textbox = cy.get('[src="frame_1.html"]').its('0.contentDocument.body')
        //     .should('be.visible')
        //     .then(data => {

        //         cy.wrap(data).find('form[name="name1"]>div>input[name="mytext1"]').type("Cypress Automation Testing on frame1", { delay: 0 })

        //     })
        // textbox.find('form[name="name1"]>div>input[name="mytext1"]').type("testing")

        //*********Approch number2 for Frame2************

        // cy.get('[src="frame_2.html"]')
        //     .its('0.contentDocument.body')
        //     .should('be.visible').then(test => {

        //         cy.wrap(test).find('form[name="name2"]>div>input[name="mytext2"]').type("Cypress Automation Testing on frame2")
        //     })


    })

    it("Frame", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe').scrollIntoView().should('be.visible')

        cy.iframe("#courses-iframe").contains('All Access plan').click()
    })

    it('Iframes method1', () => {
        cy.visit("https://practice.expandtesting.com/iframe")


//      Need to cross verify

        // cy.get('#iframe-youtube').then((youtube)=>{

        // let youtubebutton=youtube.contents().find('div[class="ytp-cued-thumbnail-overlay"]')

        //  cy.wrap(youtubebutton).enter()
        //  })

        cy.get('#mce_0_ifr').then((data)=>{

          let body=  data.contents().find("#tinymce")

            cy.wrap(body).clear().scrollIntoView().type('Welcome to the iframe session{ctrl+a}')
            //cy.wrap(body).find('button[aria-label="Bold"]').click()

            cy.get('button[aria-label="Bold').click()

           
            cy.get('button[aria-label="Italic').click()
        })


        //Approch1
        // cy.frameLoaded('#email-subscribe').should('be.visible')
        // cy.iframe('#email-subscribe').find('#email').type('test@yopmail.com')
        // cy.iframe('#email-subscribe').contains('Subscribe').scrollIntoView().click({force:true})

        //Approch2

        // cy.get('#email-subscribe').its('0.contentDocument')
        //                           .its('body')
        //                           .find('#email').type('test@yopmail.com')

        // let iframe = cy.get("#mce_0_ifr").its('0.contentDocument.body')
        //     .should('be.visible')
        //     .then(cy.wrap)

        // iframe.clear().type("Welcome to Cypress Automation Serieous")

    })


    it('Iframe handling approch1', () => {



        //Launch site
        cy.visit('https://letcode.in/frame')

        let iframe = cy.get('#firstFr').its('0.contentDocument.body').should('be.visible')
            .then(cy.wrap)

        iframe.find('.control>input[name="fname"]').scrollIntoView().type('Test User')


        cy.get("iframe[src='innerFrame']").its('0.contentDocument.body').should('be.visible')

        //Find the Iframe id
        // cy.get('#frame2').then((ele)=>{

        //     var burgermenu = ele.contents().find('[data-track-nav_item="search"]')

        //     cy.wrap(burgermenu).click()
        // })

        //   let test=  cy.get('#frame2').its('0.contentDocument.body')
        //                     .should('be.visible')
        //                     .then(cy.wrap)

        //                     test.find('a[href="/search"]').click()
    })
})