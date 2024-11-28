const locators = {
  LOGIN: {
    USER: "#user_email",
    PASSWORD: "#user_password",
    ENTER_LOGIN: ".btn",
    LOGIN_MESSAGE: ".alert-info",
  },
  MENU: {
    MENU_LOGIN: "#sign_in",
    LOGIN_NAME: ".account > span",
    MY_TASKS: "#my_task",
  },
  TASKS: {
    CREATE: `#new_task`,
    ADD: `.input-group-addon`,
    MESSAGE: `:nth-child(1) > .task_body > .ng-scope`,
    MESSAGE2: `cy.createTask("My new Task")`,
    DONE_LAST: `:nth-child(1) > .col-md-1 > .ng-pristine`,
    REMOVE_LAST: `:nth-child(1) > :nth-child(5) > .btn`,
    TITLE_NAME: `h1`
  },

  SUBTASKS: {
    MANAGE: `:nth-child(1) > :nth-child(4) > .btn`,
    CREATE_DESC: `#new_sub_task`,
    CREATE_DUE_DATE: `:nth-child(2) > .input-group`,
    ADD: `#add-subtask`,
    MESSAGE: `[ng-show="task.sub_tasks.length"] > .table > tbody > tr.ng-scope > .task_body`,
    DONE_LAST: `.ng-dirty`,
    REMOVE_LAST: `.success > :nth-child(3) > .btn`,
    CLOSE: `.modal-footer > .btn`
  },
};

export default locators;
