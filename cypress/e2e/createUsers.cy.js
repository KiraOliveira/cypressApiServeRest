/// <reference types="cypress"/>

import data from '../fixtures/data.json'

describe('Create Users', () => {
    const baseUrl = "/";
    const apiEndCreate = {
      newOneUser: '/usuarios',
      NewTwoUser: '/usuarios',
      UserEmailInvalid: '/usuarios',
      userPasswordInvalid: '/usuarios'
    };

    const contentTypeJson = "application/json";

    const createOneUser = () => {
      cy.request({
        method: 'POST', 
        url: `${baseUrl}${apiEndCreate.newOneUser}`,
        headers: {
          accept: contentTypeJson,
        },
        body: {
          "nome": data.threeUser.nome,
          "email": data.threeUser.email,
          "password": data.threeUser.password,
          "administrador": data.threeUser.administrador 
        }
      }).then((response) => {
        console.log('Create new uer', response)
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        expect(response.body.id).not.to.be.null
      })
    };
    it("Teste", () => {
      createOneUser();
    })
  
})