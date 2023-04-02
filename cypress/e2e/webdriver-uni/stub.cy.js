/// <reference types="Cypress"/>
describe("JS Alerts handling with using stub ", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({
            force: true,
        });
        const stub = cy.stub();
        cy.on('window:confirm',stub)

        cy.get("#button4").click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')//stub call a message
        }).then(()=>{
            return true//click ok button
        }).then(()=>{
            cy.get("#confirm-alert-text").should("have.text", "You pressed OK!")
        })
       
    });
});