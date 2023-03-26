/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>
describe('Inspect Automation Test Store items using chain of commands',()=>{
    it('Click o the first item text',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    
    })
})