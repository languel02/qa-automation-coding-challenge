Feature: Github Student Repos Search Alphanumeric

    I want to Search Alphanumeric Values

 @focus
 Scenario: Testing Text Input Field accepts Alphanumeric Values
    Given I open Github repos App
    When I input alphanumeric values
    And I Tap on the Go button
    Then I get a positive or negative result
