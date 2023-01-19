/// <reference types="cypress" />

import newUserData from "../../fixtures/userData.json";



describe('example Pet Swagger Api', () => {
  beforeEach(() => {
  });

  it('CREATE a new user - Happy ', () => {
    //making the request to create new user
    cy.createNewUser(newUserData)

    //asserting status code is succesfull
    .get('@createNewUserResponse').then(createNewUserResponse=> {
      expect(createNewUserResponse.status).to.eq(200)
    })
    
    .get('@createNewUserResponse').its('body').then(createNewUserResponseBody => {
      expect(createNewUserResponseBody).not.to.be.null
    })

  });

  it('GET a user by username - Happy', () => {
    //making the request to create new user
    cy.createNewUser(newUserData).then(response=>{
      expect(response).not.to.be.null
      expect(response.status).to.eq(200)
    })
    .getUserByUsername(newUserData.username)
    .get('@getUserByUsernameResponse').then(getUserByUsernameResponse => {
      expect(getUserByUsernameResponse.status).to.eq(200)
    })

    .get('@getUserByUsernameResponse').its('body').then(responseBody =>{
      expect(responseBody).to.deep.equal(newUserData)
    })

    .get('@getUserByUsernameResponse').its('body').then(responseBody =>{
      expect(responseBody.id).not.to.be.null
    })
  });


  it('DELETE a user by username - Happy', () => {
    //making the request to create new user
    cy.createNewUser(newUserData).then(response=>{
      expect(response).not.to.be.null
    })

    .deleteUserByUsername(newUserData.username).then(deleteUserByUsernameResponse => {
      expect(deleteUserByUsernameResponse.status).to.eq(200)
    })

    .getUserByUsername(newUserData.username).then(getUserByUsernameResponse=>{
      expect(getUserByUsernameResponse.status).to.eq(404)
    })
  })

  
});
