describe('Read & Write operations on file', () => {


    it('Write a file', () => {
        //Create a file with .txt extension
        cy.writeFile('TestData.txt', 'Cypresss testing demo class \n')
        cy.writeFile('TestData.txt', 'Cypress write a file demo', { flag: "a+" })

        //Create a file with .json extension
        cy.writeFile('newFile.json', { username: "satish", password: "test", age: "32" })

        cy.writeFile('cypress/fixtures/jsonfile.json', { username: "Demo", password: "New", age: "21" })

    });

    it('Read a file',()=>{

        cy.readFile("cypress/fixtures/jsonfile.json").then((data)=>{
            cy.log("++Print Data++", data.password)
        })

        //cy.readFile("TestData.txt").should('exist').and('contain','Cypress')

    })

})