Feature: Login
#   Background: 
#     Given I am on Login page
#     # step put here and removed from both scenarios so that it would not repeat itself
# here a seperate background didn't make sense, so we added to the Scenario outline

# here we tag a scenario and the we can call it with
# npm run wdio -- -- cucumber0pts.tagExpression “@wip”
@wip
  Scenario Outline: Log in using username and password
    Given I am on Login page
    When I enter <username> username
    And I enter <password> password
    And I press on Login button
    Then I see a message <message>
    And I <visibility> see the Logout button

    Examples: 
      | username   | password               | message                          | visibility |
      | "tomsmith" | "SuperSecretPassword!" | "You logged into a secure area!" | do         |
      | "dagjda"   | "dakhdakhd"            | "Your username is invalid!"      | don't      |
