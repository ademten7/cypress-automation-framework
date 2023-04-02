/// <reference types="Cypress"/>
describe("Ceheckboxes Handling  ", () => {
    it("Handling checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').should('not.be.checked').check().should('be.checked')
        cy.get('@option-1').uncheck().should('not.be.checked');

        //How Select all checkboxes in one shot
        cy.get('input[type=checkbox]') //find commen selector for all checkboxes than check
        .check();
       
    });
    it.only("Selecting multile checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get('input[type=checkbox]').as('allCheckboxes');
        cy.get('@allCheckboxes').first().check();
        cy.get('@allCheckboxes').last().check();
        cy.get('@allCheckboxes').uncheck();
        cy.get('@allCheckboxes').check(['option-2','option-3']).should('be.checked')
        cy.get('@allCheckboxes').first().should('not.be.checked');
        cy.get('@allCheckboxes').last().should('not.be.checked');


    });
});