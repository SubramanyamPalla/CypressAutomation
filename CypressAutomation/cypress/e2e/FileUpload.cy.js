describe("Uploads",()=>{

    it("File upload Method1",()=>{
        //Launch the website

        cy.visit("https://the-internet.herokuapp.com/upload")

        //Assert file upload option is there in URL or not
        cy.url().should('include',"/upload")

        //Click on upload button or upload a file
        cy.get("input[type=file]").first().selectFile('cypress/fixtures/Testdata.pdf')

        //Click on upload button
        cy.get("#file-submit").click()

        
    })

    it("File upload method2",()=>{
         //Launch the website

         cy.visit("https://the-internet.herokuapp.com/upload")

         //Assert file upload option is there in URL or not
         cy.url().should('include',"/upload")

         ////Click on upload button or upload a file
        cy.get("input[type=file]").first().attachFile(['UserData.txt',"file2","file3"])
        
    })

    it("File upload on other website",()=>{

        cy.viewport(1920,1024)
        cy.HRMLogin("Admin", "admin123")
       //cy.visit("/")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates")

        //CLick on add button
        cy.get(".oxd-button.oxd-button--medium.oxd-button--secondary").eq(1).click()

        //Enter fierst name
        cy.get('[name="firstName"]').type("User1")

        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Lastname")

        //Enter email address
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("a@gmail.com")
        //Click on browse button

        cy.get("[type='file']").selectFile('cypress/fixtures/Testdata.pdf',{force:true})
            // contents:'cypress/fixtures/Testdata.pdf',
            // fileName:'Testdata.pdf',
            // mimeType:'text/plain',
            // lastModified:Date.now()

       

        //click on save button
       cy.get('.oxd-button--secondary').click()

    })

    it.only("upload multiple files",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
       cy.get("#filesToUpload").attachFile(['UserData.txt','Testdata.pdf','Screenshot.jpg'])
       // cy.get("#filesToUpload").selectFile(['UserData.txt','Testdata.pdf','Screenshot.jpg'],{force:true})
    })

    it("upload",()=>{
        cy.visit("https://postimages.org/")
        cy.get("#uploadFile").selectFile('cypress/fixtures/Screenshot.jpg',{action:"drag-drop"})
    })

})