/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>
describe('Inspect Automation Test Store items using chain of commands',()=>{
    it.only('Click on the first item using item text',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        .then((itemHeaderText)=>{//it strores previous command HTML Element
            console.log("Selected item " + itemHeaderText.text());
        })

        console.log("Selected item  123" );
    
    })
    it('Click on the first item index',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    
    })
})