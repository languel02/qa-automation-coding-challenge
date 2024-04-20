import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open Github repos App', () => {
  cy.visit("http://localhost:3001/")
})

When('I input alphanumeric values', () => {
    cy.get('#username').type('AlphaNumeric*689@02')
  })

And('I Tap on the Go button', () => {
    cy.get('.submit').click()
  })

Then('I get a positive or negative result', () => {
    cy.get('section').children('.output-status-text')
  })