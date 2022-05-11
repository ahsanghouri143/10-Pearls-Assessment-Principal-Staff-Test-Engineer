/// <reference types = "cypress" />
describe('My DD suite', ()=>{
//data={};

beforeEach(function(){
        cy.fixture('example').then(function(data){

            this.data=data
        })
    })

    it('FixtureLogin1', function(){

    //visit the automation practice site
    cy.visit('http://automationpractice.com/index.php')
    //clicking on sign in button
    cy.contains('Sign in').click()
    cy.wait(2000)
    cy.get('#email').type(this.data.user1.email)    //email
    cy.get('#passwd').type(this.data.user1.password) //password
    cy.wait(1000)
    cy.get('#SubmitLogin > span').click() //sign in
        
    })

    it('FixtureLogin2', function() {
         //visit the automation practice site
    cy.visit('http://automationpractice.com/index.php')
    //clicking on sign in button
    cy.contains('Sign in').click()
    cy.wait(2000)
    cy.get('#email').type(this.data.user2.email)    //email
    cy.get('#passwd').type(this.data.user2.password) //password
    cy.wait(1000)
    cy.get('#SubmitLogin > span').click() //sign in
        
    })

    it('FixtureLogin3', function() {
        //visit the automation practice site
   cy.visit('http://automationpractice.com/index.php')
   //clicking on sign in button
   cy.contains('Sign in').click()
   cy.wait(2000)
   cy.get('#email').type(this.data.user3.email)    //email
   cy.get('#passwd').type(this.data.user3.password) //password
   cy.wait(1000)
   cy.get('#SubmitLogin > span').click() //sign in
       
   })
})