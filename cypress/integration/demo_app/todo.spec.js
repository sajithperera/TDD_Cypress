import {todoList} from '../../fixtures/todo';

describe("TDD with cypress demo",() =>{

    it("Check existing todo items are listed",() =>{
        cy.intercept('GET','http://localhost:3001/todos',{
            statusCode: 200,
            body: todoList
        }).as('getToDos');

        cy.visit("http://localhost:3000");
        cy.wait("@getToDos");

        cy.get('.to-do-item').should('have.length',3);
        cy.get('.to-do-item').should('contain.text','go for a walk');

    })

    it("check a new item can be added", () =>{
        cy.visit("http://localhost:3000")
    })
    
})