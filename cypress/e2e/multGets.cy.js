/// <reference types="cypress" />

describe("Listar usuários", () => {
    const baseUrl = "/";
    const apiEndList = {
        allUsers: '/usuarios',
        userOne: '/usuarios/?_id=tsYgXq9xB4hnuEop,'
    };

    const contentTypeJson = "application/json";

    const listAllUsers = () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}${apiEndList.allUsers}`,
            headers: {
                accept: contentTypeJson,
            },
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('usuarios');
        });
    };
    const listOneUser = () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}${apiEndList.userOne}`,
            headers: {
                accept: contentTypeJson,
            },
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('usuarios');
            expect(response.nome).not.to.be.null;
            expect(response.email).not.to.be.null;
            expect(response.password).not.to.be.null;
            expect(response.administrador).not.to.be.null;
            expect(response.id).not.to.be.null;
        });
    };

    it("Cenário 01: Listar todos os usuários cadastrados na API", () => {
        listAllUsers();
    }),

    it("Cenário 02: Exibir apenas um usuário", () => {
        listOneUser();
    })





})