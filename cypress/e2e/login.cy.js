/// <reference types="cypress"/>

describe('template spec', () => {

  const contentTypeJson = "application/json";

  it('Create new user', () => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      headers: {
        accept: contentTypeJson,
      },
      body: {
          "nome": "Kira Oliveira",
          "email": "kiraoliveira1@qa.com.br",
          "password": "teste123456",
          "administrador": "true"
      }

    })
    .then((response) => {
      console.log('Create new user', response)

      expect(response.status).to.equal(201)
    })
    })    
  it.only('Realizando login', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
          "email": "kiraoliveira1@qa.com.br",
          "password": "teste123456"
      }

    })
    .then((response) => {
      console.log('Realizando login', response)

      expect(response.status).to.equal(200)
    })
    })  
})