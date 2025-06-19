# Playwright Automation Framework

## Project Structure

```
project-root/
│
├── tests/                  # All test files and fixtures
│   ├── e2e/                # End-to-end test cases
│   │   └── login.spec.ts
│   ├── fixtures/           # Custom Playwright fixtures
│   │   └── maximizedTest.ts
│   └── e2etest.spec.ts     # Example legacy or additional test
│
├── pages/                  # Page Object Model classes
│   ├── LoginPage.ts
│   ├── PracticePage.ts
│   └── CoursesPage.ts
│
├── locators/               # Centralized locators for each page
│   ├── loginLocators.ts
│   └── practiceLocators.ts
│
├── constants/              # All static values, URLs, credentials, snapshots
│   └── appConstants.ts
│
├── assertions/             # Custom assertion utilities
│   └── customAssertions.ts
│
├── utils/                  # Reusable utilities and helpers
│   ├── logger.ts
│   ├── errorHandler.ts
│   ├── groupConfig.ts
│   └── testData.ts
│
├── config/                 # Environment configuration
│   └── envConfig.ts
│
├── playwright.config.ts    # Playwright configuration
├── package.json
├── package-lock.json
└── README.md
```

## Best Practices Followed
- **Page Object Model (POM):** All page interactions are encapsulated in classes under `pages/`.
- **Centralized Locators:** All selectors are in `locators/` for maintainability.
- **Constants:** URLs, credentials, static texts, and snapshots are in `constants/appConstants.ts`.
- **Reusable Utilities:** Logging, error handling, test data, and group config are in `utils/`.
- **Custom Assertions:** Extend Playwright's assertions in `assertions/`.
- **Fixtures:** Common setup (e.g., maximizing browser) is handled in `tests/fixtures/`.
- **Environment Config:** Easily switch between dev, qa, prod using `config/envConfig.ts` and environment variables.
- **No Hardcoded Values:** All static data and selectors are referenced from constants or locators.
- **Logging:** Uses Winston for robust, configurable logging.

## Usage

### Install Dependencies
```sh
npm install
```

### Run Tests (Example)
```sh
# Windows
set TEST_ENV=dev && set LOG_LEVEL=info && npx playwright test

# Mac/Linux
TEST_ENV=dev LOG_LEVEL=info npx playwright test
```

### Change Browser Window Size
Edit `VIEWPORT_SIZE` in `constants/appConstants.ts`.

### Add New Pages or Tests
- Add new page objects to `pages/` and their locators to `locators/`.
- Add new constants to `constants/appConstants.ts`.
- Add new tests to `tests/e2e/` and import from `../fixtures/maximizedTest` for auto-maximize.

## Allure Reporting

This framework supports [Allure](https://docs.qameta.io/allure/) reporting for beautiful, interactive test results.

### Setup
1. Install Allure dependencies:
   ```sh
   npm install --save-dev @playwright/test allure-playwright allure-commandline
   ```
2. The Playwright config is already set up to generate Allure results.

### Usage
- **Run tests:**
  ```sh
  npm test
  ```
- **Generate Allure report:**
  ```sh
  npm run allure:generate
  ```
- **Open Allure report in browser:**
  ```sh
  npm run allure:open
  ```

Allure results are output to the `allure-results/` folder and the report is generated in `allure-report/`.

---

**This structure ensures maintainability, scalability, and clarity for your Playwright automation project.** 