import { test as base, expect } from '@playwright/test';
import { VIEWPORT_SIZE } from '../../constants/appConstants';

export const baseHandlerFixture = base.extend({
  page: async ({ page }, use) => {
    await page.setViewportSize(VIEWPORT_SIZE);
    await use(page);
  },
});

// Attach screenshot to Allure on failure with dynamic name
baseHandlerFixture.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const testName = testInfo.title.replace(/[^a-zA-Z0-9-_]/g, '_');
    const screenshotName = `Failure_${testName}_${timestamp}.png`;
    await testInfo.attach(screenshotName, { body: screenshot, contentType: 'image/png' });
  }
});

export { expect }; 