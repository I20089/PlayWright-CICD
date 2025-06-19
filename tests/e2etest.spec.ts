import { baseHandlerFixture as test, expect } from './fixtures/baseHandlerFixture';
import logger from '../utils/logger';
import { LoginPage } from '../pages/LoginPage';
import { PracticePage } from '../pages/PracticePage';
import { CoursesPage } from '../pages/CoursesPage';
import { APP_URLS, STATIC_TEXTS, TEST_CREDENTIALS, LOGIN_SECTION_SNAPSHOT } from '../constants/appConstants';

// This test demonstrates full POM and constants usage

test('test', async ({ page }, testInfo) => {
  logger.info(`--- STARTING TEST: ${testInfo.title} ---`);

  const loginPage = new LoginPage(page);
  const practicePage = new PracticePage(page);

  logger.info('Navigating to login page');
  await page.goto(APP_URLS.login);

  logger.info('Filling username and password');
  await loginPage.usernameInput.fill(TEST_CREDENTIALS.username);
  await loginPage.passwordInput.fill(TEST_CREDENTIALS.password);
  await loginPage.submitButton.click();

  logger.info('Asserting successful login by checking Practice link');
  await expect(practicePage.practiceLink).toBeVisible();

  logger.info('Navigating to Practice > Test Exceptions');
  await practicePage.practiceLink.click();
  await practicePage.testExceptionsLink.click();

  logger.info('Editing first textbox');
  await practicePage.editButton.click();
  await practicePage.textbox.fill('games');
  await practicePage.saveButton.click();
  await expect(practicePage.textbox).toHaveValue('games');

  logger.info('Adding and editing second textbox');
  await practicePage.addButton.click();
  await page.getByRole('textbox').nth(1).fill('cricket');
  await practicePage.saveButton.click();
  await expect(page.getByRole('textbox').nth(1)).toHaveValue('cricket');

  logger.info('Navigating to Courses and handling popup');
  await page.getByText(STATIC_TEXTS.copyright).click();
  await practicePage.coursesLink.click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.wp-block-button__link').first().click();
  const page1 = await page1Promise;
  const coursesPage = new CoursesPage(page1);
  await coursesPage.seleniumWebDriverLink.click();
  await page1.goto(APP_URLS.udemy);
  await page.bringToFront();

  logger.info('Navigating Home, Contact, Practice, and closing popup');
  await practicePage.homeLink.click();
  await expect(page).toHaveURL(/.*practicetestautomation.com/);
  await practicePage.contactLink.click();
  await expect(page).toHaveURL(/.*contact/);
  await practicePage.practiceLink.click();
  await page1.close();

  logger.info('Logging out and asserting logout state');
  await page.goto(APP_URLS.login);
  await loginPage.usernameInput.fill(TEST_CREDENTIALS.username);
  await loginPage.passwordInput.fill(TEST_CREDENTIALS.password);
  await loginPage.submitButton.click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByText(STATIC_TEXTS.loginPageText)).toBeVisible();
  await expect(page.locator('#form')).toContainText('Username');
  await expect(loginPage.usernameInput).toBeEmpty();

  logger.info('Asserting login section snapshot');
  await expect(page.locator('#login')).toMatchAriaSnapshot(LOGIN_SECTION_SNAPSHOT);

  logger.info(`--- ENDING TEST: ${testInfo.title} ---`);
});