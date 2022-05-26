/// <references types ="cypress" />

it("put request",function(){

    cy.request({
        'method' : 'PUT',
         'url'   :  'https://reqres.in/api/users/2',
         body  :{

            "name": "morpheus",
            "job": "zion resident"

         }
    }).then((response) =>{
    
        expect(response).to.have.property('status',200)
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.null
        expect(response.body).to.have.property('job','zion resident')

    })

})






