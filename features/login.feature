Feature: Login
#   Background: 
#     Given I am on Login page
#     # step put here and removed from both scenarios so that it would not repeat itself
#     here a seperate background didn't make sense, so we added to the Scenario outline
#     here we tag a scenario and the we can call it with
#     npm run wdio -- -- cucumber0pts.tagExpression “@wip”
#     also we have to make each scenraio name unique, so that allure shows results correctly, therefore we added variables in the scenario name
  
  Scenario Outline: Log in using username <username> and password <password>
    Given I am on login page
    When I enter <username> username
    And I enter <password> password
    And I press on Login button
    Then I see a message <message>
    And I <visibility> see the Logout button

    @positive
    Examples: 
      | username   | password               | message                          | visibility |
      | "tomsmith" | "SuperSecretPassword!" | "You logged into a secure area!" | do         |

    @negative
    Examples: 
      | username | password    | message                     | visibility |
      | "dagjda" | "dakhdakhd" | "Your username is invalid!" | don't      |
