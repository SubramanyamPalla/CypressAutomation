// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

require ('cypress-iframe')
require('cypress-xpath');

//Import login page objects

import loginPageObjects from './PageObjects/LoginPageObjects.cy.js'

import managersPageObjects from '../support/PageObjects/BankManagerPageObjects.cy'

//import {faker} from '@faker-js/faker'

//const loginPage = new loginPageObjects()

// // Import commands.js using ES2015 syntax:
// import './commands';
// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests calls on Cypress test runner
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})