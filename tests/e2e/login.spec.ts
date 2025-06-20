import { baseHandlerFixture as test, expect } from '../fixtures/baseHandlerFixture';
import { LoginPage } from '../../pages/LoginPage';
import { CustomAssertions } from '../../assertions/customAssertions';
import { getRandomUsername, getRandomPassword } from '../../utils/testData';
import { isGroupEnabled } from '../../utils/groupConfig';
import logger from '../../utils/logger';

// Example: Only run if regression group is enabled
(isGroupEnabled('regression') ? test : test.skip)('Login and navigation flow [regression]', async ({ page }, testInfo) => {
  logger.info(`--- STARTING TEST: ${testInfo.title} ---`);
  logger.info('Maximizing browser window');
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('student', 'Password123');
  logger.debug('Login successful');
  // ... continue with navigation and actions as in the original test ...
  // Example assertion:
  await CustomAssertions.expectVisible(loginPage.logoutLink, 'Logout link should be visible after login');

  // Negative test with random data
  await loginPage.goto();
  await loginPage.login(getRandomUsername(), getRandomPassword());
  await CustomAssertions.expectVisible(loginPage.loginForm, 'Login form should be visible after failed login');
  logger.info(`--- ENDING TEST: ${testInfo.title} ---`);
});

test('Negative login - invalid username', async ({ page }, testInfo) => {
  logger.info(`--- STARTING TEST: ${testInfo.title} ---`);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  const invalidUsername = getRandomUsername();
  await loginPage.login(invalidUsername, 'Password123');
  await expect(page.locator('.show')).toContainText('Your username is invalid!');
  logger.info(`--- ENDING TEST: ${testInfo.title} ---`);
});

test('Negative login - invalid password', async ({ page }, testInfo) => {
  logger.info(`--- STARTING TEST: ${testInfo.title} ---`);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  const invalidPassword = getRandomPassword();
  await loginPage.login('student', invalidPassword);
  await expect(page.locator('.show')).toContainText('Your password is invalid!');
  logger.info(`--- ENDING TEST: ${testInfo.title} ---`);
}); 