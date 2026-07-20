# Redmine Test Automation

This project is a test automation framework for [redmine.org](https://www.redmine.org) using **Playwright** and **Page Object Model (POM)**.

## Features
- Automated test cases covering core functionality.
- **Allure Report** integration for detailed test execution results.
- **GitHub Actions** for CI/CD pipeline.
- Reports automatically deployed to **GitHub Pages**.

## Project Structure
- `tests/`: Contains test case files.
- `pages/`: Contains Page Object classes for selector and method encapsulation.
- `playwright.config.js`: Global project configuration.

## CI/CD Pipeline
The project is automatically tested on every `push` to the `main` or `master` branches. The pipeline includes:
- Dependency and browser installation.
- Running tests in `headless` mode.
- Generating the Allure Report.
- Deploying the report to GitHub Pages.

## Configuration
The framework uses dynamic `headless` mode configuration:
- Locally: `headless: false` for visual debugging.
- In CI: `headless: true` for efficient and stable server-side execution.

## Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
npm install
```

### How to run
* **To run tests locally:**
```bash
npx playwright test
```

## Reports
    You can view the latest test execution report here: https://godmaxim.github.io/redmine-test/



