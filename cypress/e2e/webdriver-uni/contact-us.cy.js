/// <reference types="Cypress"/>
describe('Test Contact Us fornm via WebDriverUni',()=>{
    it.only('Should be able to submit a saccessfull submission via contact us form',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force:true}) //{force:true} ==> when an element is disabled.
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('eq','WebDriver | Contact Us')
        cy.url().should('include','contactus.html')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('blogs')
        cy.get('[name="email"]').type('joe_blogs123@gmail.com')
        cy.get('textarea.feedback-input').type('Hello World')
        cy.get('[type="submit"]').click();
        cy.get('#contact_reply>h1').should('have.text','Thank You for your Message!')
         

    })
    it('Should not be able to submit a saccessfull submission via contact us form as all fileds are required', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('blogs')
        //cy.get('[name="email"]').type('joe_blogs123@gmail.com')
        cy.get('textarea.feedback-input').type('Hello World')
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
        
    })



})
