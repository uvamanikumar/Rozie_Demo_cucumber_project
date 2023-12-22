Feature: Feedback and Rating the content
@check
 Scenario: The user gives feedback and rating relevant content.
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
            When the user clicks star to give ratings
            Then Customer should see "Send Feedback" popup 