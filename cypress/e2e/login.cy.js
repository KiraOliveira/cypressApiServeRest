/// <reference types="cypress"/>

import data from '../fixtures/data.json'

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
          "nome": data.fiveUser.nome,
          "email": data.fiveUser.email,
          "password": data.fiveUser.password,
          "administrador": data.fiveUser.administrador
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
          "email": data.twoUser.email,
          "password": data.twoUser.password
      }

    })
    .then((response) => {
      console.log('Realizando login', response)

      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal('Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')

    })
    })  
})