/// <references types ="cypress" />

it("delete request",function(){

    cy.request({
        'method' : 'DELETE',
         'url'   :  'https://reqres.in/api/users/2'
    }).then((response) =>{
    
        expect(response).to.have.property('status',204)
        expect(response.status).to.eq(204)
        

    })

})






