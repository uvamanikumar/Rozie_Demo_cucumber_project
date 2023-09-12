Feature: Ghostwriter Signup
  @check
  Scenario: Customer tries to register with existing registered credential
    Given customer launch the https://www.ghostwriter.rozie.ai/ 
    And customer sees the login page
    When customer clicks the "Create Account" tab
    And customer enters the registered email address in Email field
    And the user enters a valid password
    And the user enters the same password in the confirm password field
    And the user clicks the "Create Account" button
    Then the user should see an error message indicating "An account with the given email already exists"
