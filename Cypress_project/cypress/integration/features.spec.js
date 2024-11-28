/// <reference types="cypress" />
import "../support/commands";
import loc from "../support/locators";
import cons from "../support/constants";


describe("CT001 - Create a new task", () => {
  //Given
  it("Login and navigation to my_tasks", () => {
    cy.login(cons.LOGIN.USER, cons.LOGIN.PASSWORD);
    cy.get(loc.MENU.MY_TASKS).click();
  });
  //When
  it("Adding a task", () => {
    cy.get(loc.TASKS.CREATE).type("My new Task");
    cy.get(loc.TASKS.ADD).click();
  });
  //Then
  it("Validating if my new task is on the painel", () => {
    cy.get(loc.TASKS.MESSAGE).should("contain", "My new Task");
  });
});

describe("CT002 - Create a new subtask", () => {
  //Given
  it("Login and navigation to my_tasks and createTask", () => {
    cy.createTask("My new Task");
  });
  //When
  it("Adding a sub-task", () => {
    cy.get(loc.SUBTASKS.MANAGE).click();
    cy.get(loc.SUBTASKS.CREATE_DESC).type("My new Sub-Task");
    cy.get(loc.SUBTASKS.ADD).click();
  });
  //Then
  it("Validating if my new sub-task is on the painel", () => {
    cy.get(loc.SUBTASKS.MESSAGE).should("contain", "My new Sub-Task");
    cy.get(loc.SUBTASKS.CLOSE).click();
  });
});


describe("CT003- BUG Create a new task with 2 characters", () => {
  //Given
  it("Login and navigation to my_tasks", () => {
    cy.login(cons.LOGIN.USER, cons.LOGIN.PASSWORD);
    cy.get(loc.MENU.MY_TASKS).click();
  });
  //When
  it("Adding a task with only 2 characters", () => {
    cy.get(loc.TASKS.CREATE).type("AU");
    cy.wait(2000);
    cy.get(loc.TASKS.ADD).click();
  });
  //Then
  it("Validating if my new task  was raised", () => {
    cy.wait(2000);
    cy.get(loc.TASKS.MESSAGE).should('not.have.text', "AU")
  });
});

describe("CT004- BUG Create a new task without name", () => {
  //Given
  it("Login,navigation to my_tasks and created a task", () => {
    cy.createTask("My new Task");
  });
  //When
  it("Adding a task without name", () => {
    cy.get(loc.TASKS.CREATE).click();
    cy.get(loc.TASKS.ADD).click();
    cy.wait(2000);
    cy.get(loc.TASKS.ADD).click();
  });
  //Then
  it("Validating if my new task empty  was raised", () => {
    cy.wait(2000);
    cy.get(loc.TASKS.MESSAGE).should('not.have.text', "empty")
    cy.get(loc.TASKS.MESSAGE2).should('not.have.text', "empty")
  });
});

