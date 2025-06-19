import { Page, Locator } from '@playwright/test';
import { loginLocators } from '../locators/loginLocators';
import logger from '../utils/logger';
import { handleError } from '../utils/errorHandler';
import { envConfig } from '../config/envConfig';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly logoutLink: Locator;
  readonly loginForm: Locator;
  readonly loginSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole(loginLocators.usernameInput.role, { name: loginLocators.usernameInput.name });
    this.passwordInput = page.getByRole(loginLocators.passwordInput.role, { name: loginLocators.passwordInput.name });
    this.submitButton = page.getByRole(loginLocators.submitButton.role, { name: loginLocators.submitButton.name });
    this.logoutLink = page.getByRole(loginLocators.logoutLink.role, { name: loginLocators.logoutLink.name });
    this.loginForm = page.locator(loginLocators.loginForm);
    this.loginSection = page.locator(loginLocators.loginSection);
  }

  async goto() {
    try {
      logger.info('Navigating to login page');
      await this.page.goto(envConfig.url);
    } catch (error) {
      handleError(error as Error, 'LoginPage.goto');
    }
  }

  async login(username?: string, password?: string) {
    try {
      const user = username || envConfig.username;
      const pass = password || envConfig.password;
      logger.info(`Logging in with username: ${user}`);
      await this.usernameInput.fill(user);
      await this.passwordInput.fill(pass);
      await this.submitButton.click();
    } catch (error) {
      handleError(error as Error, 'LoginPage.login');
    }
  }

  async logout() {
    try {
      logger.info('Logging out');
      await this.logoutLink.click();
    } catch (error) {
      handleError(error as Error, 'LoginPage.logout');
    }
  }
} 