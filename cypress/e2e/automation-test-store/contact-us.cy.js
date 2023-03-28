// /// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>
describe('Test Contact Us fornm via Automation Test Store',()=>{
    it.only('Should be able to submit a saccessfull submission via contact us form',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get("a[href$='contact']").click().then((clickedButton)=>{
            console.log('Clicked Button Text' + clickedButton.text());
        })
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('joe_blogs123@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Hello world')
        cy.get("button[title='Submit']").click();

        
    })
    //With XPATH PLUGINS
    it.only('Should be able to submit a saccessfull submission via contact us form with XPATH',()=>{
        cy.visit('https://automationteststore.com/')
        cy.xpath('//a[contains(@href,"contact")]').click();
        // cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('joe_blogs123@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('Hello world')
        cy.get('button[title=Submit]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

        
      

    })
   

})