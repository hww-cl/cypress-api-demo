import endpoints from "../fixtures/endpoints.json"

//* -----------------Aggregate Results Section Commands ------------------/

const createNewUser = newUserData => {
  cy.api({
    method: 'POST',
    url: endpoints.user,
    headers: {
      accept: 'application/json'
    },
    body: newUserData,
    failOnStatusCode: false
  }).then(response => {
    cy.wrap(response).as('createNewUserResponse');
  });
};

const getUserByUsername = username => {
  cy.api({
    method: 'GET',
    url: endpoints.user+`/${username}`,
    headers: {
      accept: 'application/json'
    },
    failOnStatusCode: false
  }).then(response => {
    cy.wrap(response).as('getUserByUsernameResponse');
  });
};


const deleteUserByUsername = username => {
  cy.api({
    method: 'DELETE',
    url: endpoints.user+`/${username}`,
    headers: {
      accept: 'application/json'
    },
    failOnStatusCode: false
  }).then(response => {
    cy.wrap(response).as('deleteUserByUsernameResponse');
  });
};



export default{
    createNewUser,
    getUserByUsername,
    deleteUserByUsername
}