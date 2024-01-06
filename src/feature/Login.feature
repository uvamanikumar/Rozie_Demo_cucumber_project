Feature: GhostRider Login 

      # Scenario: Customer tries to login with valid credential
      #       Given customer launch the https://www.ghostwriter.rozie.ai/ 
      #       And customer sees the login page
      #       And customer enters the email address in Email field
      #       And customer enters the password in password field
      #       When customer clicks "Login" button
      #       Then customer lands on the What can I help you write page
            
@check
      Scenario: The user login to the application, performs a search for the desired result, and then signs out of the application.
            Given customer launch the https://www.ghostwriter.rozie.ai/ 
            And customer sees the login page
            And customer enters the email address in Email field
            And customer enters the password in password field
            And customer clicks "Login" button
            And customer lands on the What can I help you write page
            And after the customer chooses an option
            And they will navigate to the page titled "I just need a little bit more information"
            And Customer provides additional information
            And customer should see the result
            And the user clicks the " Give me another version " button 
            And the user clicks the "Start over" button 
            And customer lands on the What can I help you write page
            When customer clicks the "Sign out" button
            Then customer should see the Sign in page of the application