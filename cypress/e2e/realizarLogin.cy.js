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
            expect(response.body.message).to.equal("Login realizado com sucesso"); 
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
            failOnStatusCode: false,
            body: {
                "email": "",
                "password": ""
            }
        }).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.email).to.equal('email não pode ficar em branco');
            expect(response.body.password).to.equal('password não pode ficar em branco');
            
        });
    };

    // Não realizar login com e-mail inválido
    const LogInEmailError = () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}${apiEndLogin.login}`,
            headers: {
                accept: contentTypeJson,
            },
            failOnStatusCode: false,
            body: {
                "email": "kiraoliveira1.com.br",
                "password": "teste123456"
            }
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.email).to.equal('email deve ser um email válido');
        });
    };

    // Não realizar login com password inválido
    const LogInPasswordError = () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}${apiEndLogin.login}`,
            headers: {
                accept: contentTypeJson,
            },
            failOnStatusCode: false,
            body: {
                "email": "kiraoliveira1@qa.com.br",
                "password": "123456"
            }
        }).then((response) => {
            expect(response.status).to.equal(401);
            expect(response.body.message).to.equal('Email e/ou senha inválidos');
        });
    };

    it("Exibir lista de todas os usuários da API", () => {
        LogInSucess();
    })
    
    it("Exibir mensagem de erro ao enviar requisição com campos em branco", () => {
        dataEmpty();
    })

    it("Exibir mensagem de erro ao enviar requisição com campo email inválido", () => {
        LogInEmailError();
    })    

    it("Exibir mensagem de erro ao enviar requisição com campo password inválido", () => {
        LogInPasswordError();
    })  
})