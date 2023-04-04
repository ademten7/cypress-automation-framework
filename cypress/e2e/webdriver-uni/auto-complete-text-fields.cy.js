/// <reference types="Cypress"/>
describe("Auto Complete Text Field", () => {
    it("Handling Auto Complete Text Field", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true});
      
        cy.get('#myInput').as('inputField').clear().type('A')
        //* select al inside the myInputautocomplete-list element
        cy.get('#myInputautocomplete-list >*').each(($el, index, $list)=>{
            if($el.text()==='Asparagus'){
                cy.wrap($el).click();
                cy.get('#submit-button').click()
                cy.url().should('contain','Asparagus')
            }
         //how can we continue with another selection in same test case? then()
       }).then(()=>{
            cy.get('@inputField').clear().type('g')
            //* select al inside the myInputautocomplete-list element
            cy.get('#myInputautocomplete-list >*').each(($el, index, $list)=>{
                if($el.text()==='Grapes'){
                    cy.wrap($el).click();
                    cy.get('#submit-button').click()
                    cy.url().should('contain','Grapes')
                }
       })
              
    });
    });
});