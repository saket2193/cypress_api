/// <references types ="cypress" />

it("get reqwuest",function(){
    
    cy.visit("https://trytestingthis.netlify.app/")
    cy.get('#fname').clear();
    cy.enterdata()
    
    })






