/// <reference types="Cypress"/>
require("@4tw/cypress-drag-drop");
describe("Mouse Actions  ", () => {
    beforeEach(()=>{
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#actions').scrollIntoView({duration:2000}).invoke('removeAttr','target').click({force:true});
    })
    it("Scroll into view", () => {
        cy.url().should('include','Actions')

    });

    it("Drag-Drop action", () => { //require("@4tw/cypress-drag-drop"); npm i @4tw/cypress-drag-drop
    //  cy.get('#draggable').drag('#droppable',{force:true})
//OR
        cy.get('#draggable').trigger('mousedown',{which:1}); //'mousedown=left click ,which:1=click center of the elment
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
      
    });
    it("Scroll double click", () => {
        cy.get('#double-click').as('double').dblclick();
        cy.get('@double').should('have.class','double')


    });
    it.only("left mouse Click, hold & assertion", () => {
      cy.get('#click-box').as('click-box').trigger('mousedown',{which:1}).then(($el)=>{
        expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        

      })
    });

});
