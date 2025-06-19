import { Page, Locator } from '@playwright/test';
import { practiceLocators } from '../locators/practiceLocators';

export class PracticePage {
  readonly page: Page;
  readonly practiceLink: Locator;
  readonly testExceptionsLink: Locator;
  readonly editButton: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly textbox: Locator;
  readonly coursesLink: Locator;
  readonly homeLink: Locator;
  readonly contactLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.practiceLink = page.getByRole(practiceLocators.practiceLink.role, { name: practiceLocators.practiceLink.name, exact: practiceLocators.practiceLink.exact });
    this.testExceptionsLink = page.getByRole(practiceLocators.testExceptionsLink.role, { name: practiceLocators.testExceptionsLink.name });
    this.editButton = page.getByRole(practiceLocators.editButton.role, { name: practiceLocators.editButton.name });
    this.addButton = page.getByRole(practiceLocators.addButton.role, { name: practiceLocators.addButton.name });
    this.saveButton = page.getByRole(practiceLocators.saveButton.role, { name: practiceLocators.saveButton.name });
    this.textbox = page.getByRole(practiceLocators.textbox.role);
    this.coursesLink = page.getByRole(practiceLocators.coursesLink.role, { name: practiceLocators.coursesLink.name });
    this.homeLink = page.getByRole(practiceLocators.homeLink.role, { name: practiceLocators.homeLink.name });
    this.contactLink = page.getByRole(practiceLocators.contactLink.role, { name: practiceLocators.contactLink.name });
  }
} 