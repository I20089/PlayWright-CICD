export const APP_URLS = {
  login: 'https://practicetestautomation.com/practice-test-login/',
  udemy: 'https://www.udemy.com/course/selenium-for-beginners/?couponCode=JUNE2025',
};

export const STATIC_TEXTS = {
  copyright: '© Copyright 2020 Practice',
  loginPageText: 'This is a simple Login page.',
};

export const TEST_CREDENTIALS = {
  username: 'student',
  password: 'Password123',
};

export const VIEWPORT_SIZE = { width: 1920, height: 1080 };

export const LOGIN_SECTION_SNAPSHOT = `
    - heading "Test login" [level=2]
    - list:
      - listitem: This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.
      - listitem: "Use next credentials to execute Login: Username: student Password: Password123"
    - text: Username
    - textbox "Username"
    - text: Password
    - textbox "Password"
    - button "Submit"
    - text: Your username is invalid!
    - separator
    - 'heading "Test case 1: Positive LogIn test" [level=5]'
    - list:
      - listitem: Open page
      - listitem: Type username student into Username field
      - listitem: Type password Password123 into Password field
      - listitem: Push Submit button
      - listitem: Verify new page URL contains practicetestautomation.com/logged-in-successfully/
      - listitem: Verify new page contains expected text ('Congratulations' or 'successfully logged in')
      - listitem: Verify button Log out is displayed on the new page
    - separator
    - 'heading "Test case 2: Negative username test" [level=5]'
    - list:
      - listitem: Open page
      - listitem: Type username incorrectUser into Username field
      - listitem: Type password Password123 into Password field
      - listitem: Push Submit button
      - listitem: Verify error message is displayed
      - listitem: Verify error message text is Your username is invalid!
    - separator
    - 'heading "Test case 3: Negative password test" [level=5]'
    - list:
      - listitem: Open page
      - listitem: Type username student into Username field
      - listitem: Type password incorrectPassword into Password field
      - listitem: Push Submit button
      - listitem: Verify error message is displayed
      - listitem: Verify error message text is Your password is invalid!
    `; 