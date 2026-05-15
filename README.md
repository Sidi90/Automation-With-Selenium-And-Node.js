# Automated Testing With Node.js And Playwright

Automated Google-like search operation with Playwright end-to-end tests.

## Run application
Clone the repository

```bash
git clone https://github.com/bmshamsnahid/Automation-With-Selenium-And-Node.js.git
```

Install dependencies
```bash
npm install
```

Install Playwright browser
```bash
npx playwright install chromium
```

Run test
```bash
npm test
```

Folder Structure

    ├── ...
    │
    ├── fixtures                    # Local browser test fixture pages
    │   └── google-search-mock.html # Mock search page for deterministic E2E tests
    ├── test                        # Test suite
    │   └── homePage.playwright.test.js # End-to-end Google search tests
    ├── playwright.config.js        # Playwright configuration
    ├── ...

## License

MIT
