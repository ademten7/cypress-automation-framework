/// <reference types="Cypress"/>
describe("Radio buttons Handling  ", () => {
    it("Handling radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get('#radio-buttons').as('allRadioButtons')
        
        cy.get('@allRadioButtons').find('input[value=green]').as('green');
        cy.get('@green').check();
       
    });
    it.only("Validating states of radio button", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get('#radio-buttons-selected-disabled').as('allRadioButtons')
        
        cy.get('@allRadioButtons').find('input[value=lettuce]').as('lettuce');
        cy.get('@lettuce').should('be.visible').and('be.enabled').check().should('be.checked');
       
        //validate disabled radio button
        cy.get('@allRadioButtons').find('input[value=cabbage]').as('cabbage');
        cy.get('@cabbage').should('be.visible').and('not.be.enabled')
        cy.get('@cabbage').invoke('removeAttr', 'disabled')
        cy.get('@cabbage').should('be.visible').and('be.enabled').check().should('be.checked')

    });

});