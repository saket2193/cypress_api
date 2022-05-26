/// <references types ="cypress" />

it("get reqwuest",function(){

    cy.request('GET','https://reqres.in/api/users?page=2').then((response) =>{
        expect(response).to.have.property('status',200)
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.null
        expect(response.body).to.have.property('page',2)

    })
        
})

it("another way of get reqwuest",function(){

    cy.request('GET','https://reqres.in/api/users?page=2').as('user_list')
    cy.get('@user_list').should((response) =>{

        expect(response).to.have.property('status',200)
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.null
        expect(response.body).to.have.property('page',2)





    })
       

    })
      
    it("another way of get request",function(){

        cy.request({

            'method' : 'GET',
            'url': 'https://reqres.in/api/users?page=2',
            headers: {
                'Content-Type' : 'application/json',
            },
            auth: {
                'username' : 'user1',
                'password' : 'pass1'
            }


        }).then((response) =>{
    
            expect(response).to.have.property('status',200)
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('page',2)
    
       })
    
    
    })
