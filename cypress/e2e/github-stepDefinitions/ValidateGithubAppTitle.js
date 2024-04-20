/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open Github repos Page', () => {
  cy.visit("http://localhost:3001/")
})

Then("I see the App Title", () => {
  cy.title().should('eq', 'Get Github Repos')
 })