Feature: GhostRider Login 

      Scenario: Customer tries to login with valid credential
            Given customer launch the https://www.ghostwriter.rozie.ai/ 
            And customer sees the login page
            And customer enters the email address in Email field
            And customer enters the password in password field
            When customer clicks "Login" button
            Then customer lands on the What can I help you write page
            
@check
      Scenario: user choosing the additional option to write a script
            Given customer launch the https://www.ghostwriter.rozie.ai/ 
            And customer sees the login page
            And customer enters the email address in Email field
            And customer enters the password in password field
            And customer clicks "Login" button
            And customer lands on the What can I help you write page
            And after the customer chooses an option
            And they will navigate to the page titled "I just need a little bit more information"
            Then Customer provides additional information