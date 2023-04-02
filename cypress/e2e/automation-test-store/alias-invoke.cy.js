/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>
describe('Alias and invoke',()=>{
    it('Validate a specific hair care product',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('firstProductName');
        cy.get('@firstProductName').should('contain','Seaweed Conditioner');
        //ayni elementi tekrar verify etmek istersem yukaidaki kodu tekrar yazmam gerekir.Alias sayesinde direk
        //olarak verify edebilirim.
        cy.get('@firstProductName').its('length').should('be.gt',5);
    
    })
//challange
it('Validate number of product should be 16 on landing page and product cart shouldbe title=Add to Cart',()=>{
    cy.visit('https://automationteststore.com/')
    cy.get('.thumbnail').as('lengthOfTheProducts')
    cy.get('@lengthOfTheProducts').should('have.length',16)
    //buradan devam edip Add to cart iconunun title ini verify edebilirim
    cy.get('@lengthOfTheProducts').find('.productcart').invoke('attr','title').as('valueOfTitle')
    cy.get('@valueOfTitle').should('include','Add to Cart')

})
it.only('Calculate total price of the products on landing page',()=>{
    cy.visit('https://automationteststore.com/')
    cy.get('.price').each(($el,index,$list)=>{
       const el = $el[0];
       console.log(el);
    })
    

})

})