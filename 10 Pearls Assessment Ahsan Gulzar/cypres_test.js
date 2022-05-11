/// <reference types = "cypress" />

it('Create an account into site', ()=> {
    //visit the automation practice site
    cy.visit('http://automationpractice.com/index.php')
    //clicking on sign in button
    cy.contains('Sign in').click()
    cy.wait(2000)
    if(cy.get('#email_create').should('have.value', ''))
         cy.get('#email_create').first().focus().type('ahsanghouri39@yahoo.com')
         cy.get('#SubmitCreate').click()
    cy.wait(5000)
    //clicking on submit button to check mandatory fields
    cy.get('#submitAccount').click()
    //after checking validations fill the mandatory fields to create account
    cy.wait(1000)
    cy.get('#id_gender1').click()
    cy.get('#customer_firstname').type('Ahsan')
    cy.get('#customer_lastname').type('Gulzar')
    cy.get('#passwd').type('12345678')
    cy.get('#address1').type('H#14 Lahore')
    cy.get('#city').type('Lahore')
    cy.wait(1000)
    cy.get('#id_state')
      .select('Arizona')
      .should('have.value', '3')
    cy.wait(1000)
    cy.get('#postcode').type(54000)
    cy.get('#phone_mobile').type(923364056868)    
    cy.wait(1000)
    cy.get('#submitAccount').click()


})
//Writing next testcase here due to busy schedule, you can run it by 'it only' as well
it('Creating script to failed login', ()=>{
    //visit the automation practice site
    cy.visit('http://automationpractice.com/index.php')
    //clicking on sign in button
    cy.contains('Sign in').click()
    cy.wait(2000)
    cy.get('.page-subheading').contains('Already registered?').should('have.text', 'Already registered?')
    cy.get('#email').type('ahsanghouri1999@yahoo.com')
    cy.get('#passwd').type('12345678910')
    cy.wait(1000)
    cy.get('#SubmitLogin > span').click()
})

///Login with registered user and add/delete and update products in cart
it.only('login and add items in cart to purchase', ()=>{
    //visit the automation practice site
    cy.visit('http://automationpractice.com/index.php')
    //clicking on sign in button
    cy.contains('Sign in').click()
    cy.wait(2000)
    cy.get('.page-subheading').contains('Already registered?').should('have.text', 'Already registered?')
    cy.get('#email').type('ahsanghouri39@yahoo.com')
    cy.get('#passwd').type('12345678')
    cy.wait(1000)
    cy.get('#SubmitLogin > span').click()
    cy.wait(4000)
    //clicking on item categories type dresses
    cy.get('.menu-content > li:nth-child(2) > a').click()
    cy.wait(1000)
    //checking evening dresses
    cy.get('#layered_category_10').check()
    cy.wait(4000)
    //getting add to cart button to proceed further
    cy.get('.product-container .button-container .ajax_add_to_cart_button.btn').click()
    //adding cart to proceed checkout
    cy.get('.button-container .btn')
    .contains('Proceed to checkout')
    .click()
    //increasing product item
    cy.get('.icon-plus').click()
    //editing quanity of product by entering quanity
    cy.wait(1000)
    cy.get('.cart_quantity_input').first().focus().click().clear()
    cy.wait(2000)
    cy.get('.cart_quantity_input').type('10')
    //deleting the added product
    cy.wait(1000)
    cy.get('.cart_quantity_delete').click()
})