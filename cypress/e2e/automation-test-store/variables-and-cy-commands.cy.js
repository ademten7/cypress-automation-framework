/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>
describe('Verifying variables, cypress commands and jquery commands',()=>{
    it('Navigating to specific product pages',()=>{
        cy.visit('https://automationteststore.com/')
        /* works but not recommended
        const makupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        makupLink.click();
        const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skinCareLink.click()
        */
        cy.get("a[href*='product/category&path=']").contains("Makeup")
        cy.get("a[href*='product/category&path=']").contains("Skincare")
    
    })

    it('Navigating to specific product pages',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        // const header = cy.get("h1>.maintext");
        // cy.log(header.text()) ==> not work
        
        cy.get("h1 .maintext").then(($headerElement)=>{
           const headerText = $headerElement.text();
           cy.log("Found Header Text " + headerText);
           expect(headerText).is.eq('Makeup')
        })
    })
    it.only('Validate properties of the Contact Us Page',()=>{
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        //Uses cypress commands and chaining approach
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
        //JQuery approach 
        cy.contains('#ContactUsFrm','Contact Us Form').then(($formText)=>{
            const firstnameTxt = $formText.find('#field_11').text();
             expect(firstnameTxt).to.contain('First name')
              
        //Embedded commands (Closure) approach ==> we can add another then method
        cy.get('#field_11').then(($nameTxt)=>{
            cy.log($nameTxt.text());
            cy.log($nameTxt);
        })

        })

       
    })
 
})