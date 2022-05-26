/// <references types ="cypress" />

it("get reqwuest",function(){
    cy.request({
        'method' : 'POST',
         'url'   :  'https://reqres.in/api/users',
         body  :{

            "name": "saket",
            "job": "leader"

         }
    }).then((response) =>{
    
        expect(response).to.have.property('status',201)
        expect(response.status).to.eq(201)
        expect(response.body).to.be.not.null
        expect(response.body).to.have.property('name','saket')

    })

})




