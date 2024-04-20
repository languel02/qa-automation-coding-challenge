Feature: Github Student Repos Search

    I want to open a student github repos

 @focus
 Scenario: Validating the GitHub User Search Functionality returns results when entering User input by Hitting on the "Go" button
    Given I open Github repos App
    When I input a Student user 
    And I Click on the Go button
    Then I get repos result list
