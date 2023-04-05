/// <reference types="Cypress"/>
describe("Iframe & Modal Handling  ", () => {
    it("Handling ifarame and Modal", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#iframe').invoke('removeAttr','target').click({force:true});
       //direk olarak iframe icindeki elementlere ulasamam.
        cy.get('#frame').then(($iframe)=>{
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe')
        })
        //Buradan sonra iframe icindeki her elmente ulasabilirim
        cy.get('@iframe').find('#button-find-out-more').click();
        cy.get('@iframe').find('#myModal').as('modal')
        // cy.get('@modal').should(($expectedText)=>{
        //     const text = $expectedText.text();
        //     expect(text).to.include(' webdriveruniversity.com ')
        // })
        cy.get('@modal').contains('webdriveruniversity')
        cy.get('@modal').contains('Close').click();
    });
    it('Handling ifarame with "cypress-iframe" plugin', () => {
        cy.visit(url);
        cy.frameLoaded("#iframeResult");
    
        //approach 1 ==> trigger()
        cy.iframe("#iframeResult")
          .find("button[class=double-click]")
          .trigger("dblclick");
        cy.iframe("#iframeResult")
          .find("#field2")
          .should("have.value", "Hello World!");
    });
});