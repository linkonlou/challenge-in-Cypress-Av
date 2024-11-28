import loc from "./locators";
import cons from "./constants";

Cypress.Commands.add("login", (user, password) => {
  cy.visit(Cypress.env("baseURL"));
  cy.title().should("be.equal", cons.TITLE_NAME);
  cy.get(loc.MENU.MENU_LOGIN).click();
  cy.get(loc.LOGIN.USER).type(user);
  cy.get(loc.LOGIN.USER).should("have.value", user);
  cy.get(loc.LOGIN.PASSWORD).type(password);
  cy.get(loc.LOGIN.PASSWORD).should("have.value", password);
  cy.get(loc.LOGIN.ENTER_LOGIN).click();
  cy.get(loc.LOGIN.LOGIN_MESSAGE).should("contain", cons.LOGIN_MESSAGE);
});

Cypress.Commands.add("createTask", (taskName) => {
  cy.login(cons.LOGIN.USER, cons.LOGIN.PASSWORD);
  cy.get(loc.MENU.MY_TASKS).click();
  cy.get(loc.TASKS.CREATE).type(taskName);
  cy.get(loc.TASKS.ADD).click();
});

Cypress.Commands.add("createSubTask", () => {
  cy.createTask(cons.LOGIN.USER, cons.LOGIN.PASSWORD);
  cy.get(loc.SUBTASKS.MANAGE).click();
  cy.get(loc.SUBTASKS.CREATE_DESC).type("My new Sub-Task 123");
  cy.get(loc.SUBTASKS.ADD).click();
  cy.get(loc.SUBTASKS.MESSAGE).should("contain", "My new Sub-Task 123");
});
