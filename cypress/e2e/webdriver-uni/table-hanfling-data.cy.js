/// <reference types="Cypress" />
describe("Handling Data from table", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("calculate total age of the first table", () => {
        cy.get('#t01 > tbody > tr > td:nth-child(3)').as('table1Ages').then(($el)=>{
          let expectedTotalAge = 159;
          let calculatedAge = 0;
          for (let i = 0; i < $el.length; i++) {
            console.log($el[i])
            calculatedAge += Number($el[i].innerText) 
            
          }
          cy.wrap(calculatedAge).should('eq', expectedTotalAge);
        })
        
      });
      it.only("calculate the age and assert basend on the iving user lastname", () => {
        cy.get('#t01 > tbody > tr > td:nth-child(2)').each(($el,index,$list)=>{
          const text = $el.text();
          
          if(text==='Doe'){
            const doesAge = $el.next().text()
            cy.wrap(doesAge).should('eq','20')
          }
        })
        
      
  });
});
    