describe('Login Page Test Suite', function () {

    //To run on before each it block
    beforeEach(function () {
       
        //Setting viewport
        cy.viewport(1920, 1080)

        //Load fixture file
        cy.fixture('test_data.json').then(function (data) {
            this.data = data;
            
        })

    })
    ////////////////////////////////Test are begin here//////////////////////////////////

    it('Login to the guru99 demo bank', function () {
        
        //Login with valid credentials
        cy.LoginWithValidCredentials(this.data.username, this.data.password)
    })


})