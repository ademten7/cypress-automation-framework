/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>
describe("Iterate over elments", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper>.fixed>.prdocutname").each(($el, index, $list) => {
        cy.log(index)
        cy.log($el.text());
        cy.log($list);
    });
  });
  it.only("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper>.fixed>.prdocutname").each(($el,index,$list)=>{
        if($el.text().includes('Curls to straight Shampoo')){
            cy.wrap($el).click();
            cy.get('h1> .bgnone').should('have.text','Curls to straight Shampoo' )
        }
    })
  });
});
