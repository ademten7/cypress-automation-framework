/// <reference types="Cypress"/>
describe("JS Alerts Handling", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({
            force: true,
        });
        cy.get("#button1").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am an alert box!");
        });
    });

    it.only("Confirm js Confirm Alert Box ", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({
            force: true,
        });
        cy.get("#button4").click();
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal("Press a button!");
            return true//press ok
           //return false//===>press cancel
        });
        cy.get("#confirm-alert-text").should("have.text", "You pressed OK!");
    });
});
