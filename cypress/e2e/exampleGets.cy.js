/// <reference types="cypress" />

describe("Listar todos os usuários", () => {
    const baseUrl = "/";
    const apiEndList = {
        users: '/usuarios',
    };

    const contentTypeJson = "application/json";

    const listAllUsers = () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}${apiEndList.users}`,
            headers: {
                accept: contentTypeJson,
            },
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('usuarios');
        });
    };

    it("Exibir lista de todas os usuários da API", () => {
        listAllUsers();
    })
})