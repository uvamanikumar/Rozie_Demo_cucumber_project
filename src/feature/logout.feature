      Feature: GhostRider Logout

            Scenario: The customer attempted to log out of their active session on the 'How can we help you?' page.

                  Given customer launch the https://www.ghostwriter.rozie.ai/ 
                  And customer sees the login page
                  And customer enters the email address in Email field
                  And customer enters the password in password field
                  And customer clicks "Login" button
                  When customer lands on the What can I help you write page
                  And customer clicks the "Sign out" button
                  Then customer should see the Sign in page of the application