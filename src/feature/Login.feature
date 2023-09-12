Feature: GhostRider Login 

      Scenario: Customer tries to login with existing account(Already created)

            Given customer launch the https://www.ghostwriter.rozie.ai/ 
            And customer sees the login page
            And customer enters the email address in Email field
            And customer enters the password in password field
            When customer clicks "Login" button
            Then customer lands on the What can I help you write page

