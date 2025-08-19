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
          "nome": data.twoUser.nome,
          "email": data.twoUser.email,
          "password": data.twoUser.password,
          "administrador": data.twoUser.administrador 
        }
      }).then((response) => {
        console.log('Create new uer', response)
        expect(response.status).to.equal(201);
      })
    };
    it("Teste", () => {
      createOneUser();
    })
  
})