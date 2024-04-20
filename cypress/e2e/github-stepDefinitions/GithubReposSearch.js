import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open Github repos App', () => {
  cy.visit("http://localhost:3001/")
})

When('I input a Student user', () => {
    cy.get('#username').type('languel02')
  })

And('I Click on the Go button', () => {
    cy.get('.submit').click()
  })

Then('I get repos result list', () => {
    cy.get('ul').children('.repo-row')
  })