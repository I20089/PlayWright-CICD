import { Page, Locator } from '@playwright/test';

export class CoursesPage {
  readonly page: Page;
  readonly seleniumWebDriverLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.seleniumWebDriverLink = page.getByRole('link', { name: 'Selenium WebDriver' });
  }
} 