/// <reference types="Cypress"/>
describe('Validate webdriver uni homepage links',()=>{
    it('Confirm links redirect to correct page',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true});//******* */
        //cy.get('#contact-us').click({force:true}) //{force:true} ==> when an element is disabled.
        cy.url().should('include','contactus')
        cy.go('back');
        cy.url('iclude','webdriveruniversity')
        cy.reload();
        //cy.reload(true)//reload without using cache
        cy.url('iclude','webdriveruniversity')
        cy.go('forward');
        cy.url().should('include','contactus')
        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr','target').click({force:true});
        cy.url().should('include','Login-Portal')
        cy.go('back');
        cy.url('iclude','webdriveruniversity')

    })
})