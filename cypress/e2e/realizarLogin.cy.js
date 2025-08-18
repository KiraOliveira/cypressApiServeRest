/// <reference types="cypress"/>

describe('Realizar Login com sucesso', () => {
    const baseUrl = "/";
    const apiEndLogin = {
        login: '/login',
    };

    const contentTypeJson = "application/json";

    // Login com Sucess
    const LogInSucess = () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}${apiEndLogin.login}`,
            headers: {
                accept: contentTypeJson,
            },
            body: {
                "email": "kiraoliveira1@qa.com.br",
                "password": "teste123456"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('message');
            //expect(response.message).to.equal("Login realizado com sucesso"); -- Resolver
            expect(response.authorization).not.to.be.null
        });
    };

    const dataEmpty = () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}${apiEndLogin.login}`,
            headers: {
                accept: contentTypeJson,
            },
            body: {
                "email": " ",
                "password": " "
            }
        }).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.email).to.equal('email não pode ficar em branco');
        });
    };

    it("Exibir lista de todas os usuários da API", () => {
        LogInSucess();
    })
    
    it.only("Exibir lista de todas os usuários da API", () => {
        dataEmpty();
    })
   
    
})