# QA Automation Coding Challenge

Thank you for taking the time to complete this challenge!

This repo consists of a basic working app for which you are requested to setup a simple testing infrastructure, extract the main user flows, and implement tests.

Please read below for the context and instructions.

## Requirements

### Why

Adam runs his own web development school, in which he teaches the fundamentals of the web to his students, over the course of several months.

Adam wishes to maintain an easy overview of the progress of his students. He wants to be able to quickly get a simple list of repos owned by a given student, and see the most basic details of each repo. He also wants to be able to easily navigate to a specific repo, in case he needs to dive deeper.

Adam likes Github, but the UI is not built for a minimalistic, non-paginated overview of repos. For this he decides to build his own simple app, leveraging the Github API. He defines the following specifications:

### Acceptance Criteria

1. The UI consists of a header, a search form and a search result section
2. The header displays the title of the app
3. The search form accepts a text input as a search term. Search is activated by clicking the "Go" button, or by pressing the "Enter" key
4. For each repo found, the search result section displays a row with basic info about that repo: name and description. Clicking on the repo name takes the user to the repo's URL. In case of a missing value, `–` is displayed
5. The user sees feedback about the result of the search action. Either a success or error message are shown above the search field at the completion of a search action, for a short amount of time. If the error is due to a user not found on Github, a specific error message is displayed. Otherwise, a generic error message is displayed

## Here is where you come in...

Adam has finished a first version of the app. It meets the requirements and serves him nicely, but is still very basic.

He would like to enhance the app over time in iterations, adding more features. To do that well, he decides he needs confidence to continuously enhance the app without breaking it or losing one of the fundamental requirements.

### Instructions

Help Adam gain confidence in further development by automatically testing the most critical features of the app, by doing the following:

1. Fork the repository, setup and run the app (see [setup](./setup.md) file for instructions)
2. Using the product description, acceptance criteria and the app itself, compile a list of several testable user flows, cases or scenarios. This doesn't have to cover every possible real-life case, please focus on what you think is most fundamental
3. Based on your assessment of importance and effort, prioritise this list. Imagine this list would be later converted to tickets to be tackled in the next few work iterations of a product development team. Please explain your reasoning briefly. Add this list and your reasoning to the empty [`testable-flows.md`](./testable-flows.md) file
4. Out of these flows, choose two and implement tests for them
5. Add to this `README.md` file (or in a separate file) instructions on how to run these tests

### Things to note

- Use any testing technology you'd like – Cypress, Selenium or any other you think would work well
- Feel free to modify or add whatever you need including addition of other packages, your own libraries, etc
- Please submit a link to your finished repository when you are ready

## Good luck and happy coding! :)




COMPLETADO

# QA Automation Coding Challenge Completed

# TestCases Created for the Get Github App

1. Validate the Application Title displays correctly on the UI
2. Ensuring the Application UI Elements are Visible, Fixed and display Correctly
3. Validate Text Input Title is displayed
4. Testing Text Input Field accepts Alphanumeric Values
5. Validating the GitHub User Search Functionality returns results when putting user input by Clicking "Enter" on the Keyboard
6. Validating the GitHub User Search Functionality returns results when entering User input by Hitting on the "Go" button
7. Ensuaring the App returns No Results Found message when searching with empty input field
8. Testing that the Repos results found for x Users is Clickable and redirecting to github project Correctly
9. Validating the App displays the Number of Repos found for x Users
10. Testing the Repos results display as a List and have a description for x Students
11. Validate Students Repos are found by entering the email


We took three TestCases out of these to automated using the following technologies: Cypress tool with JavaScript, Cucumber feature to have readable and understandable test scenarios, and visual code IDE to run with node.


# Automated TestCases

Automation testing Script are under github-stepDefinitions folder

The features/testcases are under integration folder

1. Validate the Application Title displays correctly on the UI ('[ValidateGithubAppTitle.feature](cypress/integration/ValidateGithubAppTitle.feature)')
2. Validating the GitHub User Search Functionality returns results when entering User input by Hitting on the "Go" button ([GithubReposSearch.feature](cypress/integration/GithubReposSearch.feature))
3. Testing Text Input Field accepts Alphanumeric Values ([ValidateSearchAlphaNumber.feature](cypress/integration/ValidateSearchAlphaNumber.feature))


Setup
Fork and clone the project
Run yarn to install the dependencies needed
Install cypress using: npm cypress install
Install cucumber preprocesor
Complete config files and package.json
Run yarn start to open the Get Github App
Then npx cypress open