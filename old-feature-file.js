# Feature: Login

    

# Before adding Scenario Outline
# # positive test scenario
#     Scenario: Successful log in with valid username and password 
#         When I enter "tomsmith" username
#         And I enter "SuperSecretPassword!" password 
#         And I press on Login button
#         Then I see a message "You logged into a secure area!"
#         And I do see the Logout button

# # negative test scenario
#      Scenario: Cannot log in with invalid username and password   
#         When I enter "dagjda" username
#         And I enter "dakhdakhd" password 
#         And I press on Login button
#         Then I see a message "Your username is invalid!"
#         And I don't see the Logout button


# old version without Cucumber expressions
# Feature: Login

# # positive test scenario
#     Scenario: Successful log in with valid username and password
#         Given I am on Login page
#         When I enter a "tomsmith" username
#         # we won't usually indicate here the username, but this time we will. 
#         # othertimes we can just write "valid"
#         And I enter a "SuperSecretPassword!" password 
#         And I press on Login button
#         Then I see a message "You logged into a secure area!"
#         And I see the Logout button

# # negative test scenario
#      Scenario: Cannot log in with invalid username and password
#         Given I am on Login page
#         When I enter a "dagjda" username
#         # we won't usually indicate here the username, but this time we will. 
#         # othertimes we can just write "valid"
#         And I enter a "dakhdakhd" password 
#         And I press on Login button
#         Then I see a message "Your username is invalid!"
#         And I don't see the Logout button

