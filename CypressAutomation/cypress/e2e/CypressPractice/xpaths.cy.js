

describe('Xpaths demo',()=>{
    

    it('xpath writing',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //Xpath for enter user name
        
        cy.xpath("//input[@name='username']").type('Admin')
        cy.xpath("//input[@name='password']").type('admin123')
        //CLick on login button
        cy.xpath("//button[@type='submit']").click()

        //Click on admin menu link

        cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()
        // .as('adminLink')

        // cy.wrap('@adminLink').click({force:true})


    })
})