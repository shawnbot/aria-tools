# Tests

The test suite for aria-tools uses [WebDriverIO] to run Selenium tests on real and virtualized browsers.

## Setup
1. Make sure you're running Node v4 (?) or higher.
1. Install all the depdendencies by running `npm install` in the project root directory.
1. If you don't have Selenium Standalone, I recommend using [webdriver-manager] to install and run it:

  ```sh
  npm i -g webdriver-manager
  webdriver-manager update
  webdriver-manager start
  ```
  
  You'll need to run this in a separate terminal or shell. (Fair warning: it's chatty.)
  
1. In another shell, start up the test server:

  ```sh
  npm start
  ```

1. And finally, in _yet another shell_, you should be able to run your tests:

  ```sh
  npm test
  ```

[WebDriverIO]: http://webdriver.io/
[webdriver-manager]: https://npm.im/webdriver-manager
