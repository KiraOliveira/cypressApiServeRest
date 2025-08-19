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
          "nome": data.fourUser.nome,
          "email": data.fourUser.email,
          "password": data.fourUser.password,
          "administrador": data.fourUser.administrador
      }

    })
    .then((response) => {
      console.log('Create new user', response)

      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')
      expect(response.body.id).not.to.be.null
    })
    })
})