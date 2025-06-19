import { expect, Locator } from '@playwright/test';
import logger from '../utils/logger';

export class CustomAssertions {
  static async expectVisible(locator: Locator, message?: string) {
    logger.info(`Asserting visibility: ${message || ''}`);
    await expect(locator).toBeVisible();
  }

  static async expectText(locator: Locator, text: string, message?: string) {
    logger.info(`Asserting text: ${text} ${message || ''}`);
    await expect(locator).toContainText(text);
  }

  // Add more custom assertions as needed
} 