describe("Wrap Up Alias Invoke Variable & iterating through Data", () => {
 beforeEach(()=>{
    cy.visit("https://automationteststore.com/");
    cy.get(".oneprice").as("onePrice");
    cy.get(".pricenew").as("newPrice");
 })
  it.only("Calculate total price of the products on landing page", () => {
    let totalPrice = 0;

    cy.get('@onePrice').each(($el,index,$list)=>{
        const singleOnePrice = $el.text();
        const price = Number(singleOnePrice.split('$')[1])
        totalPrice +=price
        console.log(totalPrice);
    })
    cy.get('@newPrice').each(($el,index,$list)=>{
        const singleOnePrice = $el.text();
        const price = Number(singleOnePrice.split('$')[1])
        totalPrice +=price
        //then ile execution siralamasini belirleyebiliriz.
    }).then(()=>{
      expect(totalPrice).to.equal(639.49)
    })
   // expect(totalPrice).eq(639.49)==> bu yanlis cünkü ilk bu sira eecution edilir. ondan hata failed ilor test
   //Cünkü total price 0 degerini alir ilk basta. Bu  soruun then ile zincirleyerek cözebiliriz
  });
});
