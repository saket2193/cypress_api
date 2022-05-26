/// <references types ="cypress" />

it("test case creation using cypress studio",function(){
    cy.visit("https://trytestingthis.netlify.app/")



    /* ==== Generated with Cypress Studio ==== */
    cy.get('#fname').clear();
    cy.get('#fname').type('saket');
    cy.get('#lname').clear();
    cy.get('#lname').type('saket');
    cy.get('#other').check();
    cy.get('#option').select('option 2');
    cy.get('#owc').select(['option 2']);
    cy.get('[name="option2"]').check();
    cy.get('[list="datalists"]').click();
    cy.get('[list="datalists"]').click();
    cy.get('[list="datalists"]').clear();
    cy.get('[list="datalists"]').type('Chocolate');
    cy.get('#day').click();
    cy.get('#a').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
})





