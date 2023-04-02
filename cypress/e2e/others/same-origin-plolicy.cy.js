/// <reference types="Cypress"/>
describe('Cypress web security',()=>{
    it('Validate visiting two different domains',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click();
        cy.visit('https://google.com/')

    })
    it('Validate visiting two different domains via user actions',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click();

    })
    it('navigates with cy.origin', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click();
        cy.visit('https://stackoverflow.com')
        cy.origin('https://stackoverflow.com', () => {
          cy.get('selector') // yup all good
        })
      })
  



})