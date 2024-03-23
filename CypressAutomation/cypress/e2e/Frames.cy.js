
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

    it('Iframe handling method1 & method2', () => {
        //Visit website
        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")

        //Identify Frame css selector
        //     cy.get('iframe[name="globalSqa"]').then((iframe)=>{

        //        let iframebody=iframe.contents().find('input[id="s"]')

        //        cy.wrap((iframebody).within(()=>{

        //         cy.get('input[id="s"]').scrollIntoView().type('Cypress')

        //        }))

        //        })

        //        //cy.get('input[id="s"]').find('input[id="s"]').scrollIntoView().type('test')
        //     })

        //Method 1
        // cy.get('iframe[name="globalSqa"]').then((Iframe)=>{

        //     var iframebody=Iframe.contents().find("#current_filter")

        //     cy.wrap(iframebody).scrollIntoView().click()

        // })

        //Method2

        // cy.get('iframe[name="globalSqa"]').its('0.contentDocument.body')
        //                                   .should('be.visible')
        //                                   .then((iframebody)=>{

        //                                     cy.wrap(iframebody).find('#mobile_menu_toggler').click()

        //                                   })

        let iframemain = cy.get('iframe[name="globalSqa"]').its('0.contentDocument.body').should('be.visible')

        iframemain.should('be.visible')
        iframemain.find('[class="breadcrumb"]>a').first().click()

    })

    it("Nested Frames", () => {
        cy.visit("https://ui.vision/demo/webtest/frames/")


        //Identity iframe in the page== Frame1
        // cy.get('frame[src="frame_1.html"]').then((iframe1)=>{

        //    let iframebody= iframe1.contents().find('[name="mytext1"]')

        //     cy.wrap(iframebody).type("welcome to the test")
        // })

        //Frame4

        cy.get('frame[src="frame_4.html"]').then((data) => {

            let testdata = data.contents().find('[name="mytext4"]')

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

        // cy.frameLoaded('#courses-iframe').scrollIntoView().should('be.visible')

        // cy.iframe("#courses-iframe").contains('PracticE', { matchCase: false }).click()

        // //cy.iframe("#courses-iframe").find('input[id="name"]').type('test')


        //    let framebody=cy.get('#courses-iframe').its('0.contentDocument.body').should('be.visible')

        //    framebody.contains('Practice',{matchCase:false}).click({force:true})

        //Method1
        // cy.get('#courses-iframe').then((data)=>{

        //     let databody=data.contents()

        //     cy.wrap(databody).contains('Practice',{matchCase:false}).click()

        // })





    })


    it('Multiple iframes website', () => {
        //visit website
        cy.visit('https://www.hyrtutorials.com/p/frames-practice.html')

        //Method1
        // cy.get("#frm1").then((data)=>{

        //   let framebody= data.contents().find('#selectnav1')

        //   cy.wrap(framebody).select("Tech News")

        // })
        //Method2

        cy.get("#frm1").its('0.contentDocument')
                        .its('body')
                        .should('be.visible').find('#selectnav1').select(3)

        
    })

    it.only('Iframe interactions with cypress-iframe addon',()=>{
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/iframepage')

        //Finding iframe 

        // cy.frameLoaded('#myFrame').should('be.visible')

        // cy.iframe().contains('FIND ME').click()

        // cy.iframe((test)=>{

        //     cy.on('window:alert',(alert)=>{
        //         expect(alert).to.equal('FIND ME SPAN CLICKED')
        //     })
    
        // })

        //Alert handling

        cy.frameLoaded('#myFrame').should('be.visible')
        cy.iframe().find('[name="Channel Name"]').type('test')
       
        
    })

    it('Iframes method1', () => {

        let ele1

        cy.visit("https://practice.expandtesting.com/iframe")

        //      Need to cross verify

        //cy.get('#iframe-youtube').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        cy.get('#iframe-youtube').then((ele) => {
            ele1 = ele.find('button.ytp-play-button.ytp-button')

            cy.wrap(ele1).click()

        })

        // cy.get('#iframe-youtube').then(($iframe) => {

        //   $iframe.its('0.paused').should('equal', true);


        // });

        // cy.get('#iframe-youtube').its('0.contentDocument.body')
        //                         .should('be.visible')

        // cy.get('#mce_0_ifr').then((data)=>{

        //   let body=  data.contents().find("#tinymce")

        //     cy.wrap(body).clear().scrollIntoView().type('Welcome to the iframe session{ctrl+a}')
        //     //cy.wrap(body).find('button[aria-label="Bold"]').click()

        //     cy.get('button[aria-label="Bold').click()


        //     cy.get('button[aria-label="Italic').click()
        // })


        //***********************Approch1****************************
        // cy.frameLoaded('#email-subscribe').should('be.visible')
        // cy.iframe('#email-subscribe').find('#email').type('test@yopmail.com')
        // cy.iframe('#email-subscribe').find('#subscription-form>button').scrollIntoView().click()

        //******************************Approch2**************************

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

        iframe.find(".control>input[name='lname']").scrollIntoView().type('Test2@yopmail.com')

        //iframe.contains('Last Name').type('Test2@yopmail.com')


        // let innerFrame=cy.get("iframe[src='innerFrame']").its('0.contentDocument.body').should('be.visible').then(cy.wrap)

        // innerFrame.find('input[name="email"]').type('test@gmail.com')
        // cy.get("iframe[class=has-background-white]").should('be.visible')

        // cy.get("iframe[class=has-background-white]").then((innerFrame)=>{

        //   let innnerbody=  innerFrame.contents().find('input[name="email"]')

        //   innnerbody.type("test@gmail.com")

        // })

        // cy.frameLoaded('iframe[name="googlefcPresent"]').then((frame0) => {

        //     frame0.cy.frameLoaded('iframe[name="googlefcPresent"]').then((childFrame) => {
        //         childFrame.contents()
        //     })
        // })



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