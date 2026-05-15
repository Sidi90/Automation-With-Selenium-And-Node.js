const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const localSearchPage = pathToFileURL(
  path.resolve(__dirname, '../fixtures/google-search-mock.html')
).toString();

test.describe('Google search automated testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(localSearchPage, { waitUntil: 'domcontentloaded' });
  });

  test('find the input box and google search button', async ({ page }) => {
    const searchInput = page.locator('input[name="q"]').first();
    const searchButton = page.locator('input[name="btnK"]').first();

    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeEnabled();
    await expect(searchButton).toBeVisible();
    await expect(searchButton).toHaveAttribute('value', /Google Search/);
  });

  test('put keyword in search box and submit search', async ({ page }) => {
    const keyword = `playwright e2e ${Date.now()}`;
    const searchInput = page.locator('input[name="q"]').first();
    const searchButton = page.locator('input[name="btnK"]').first();

    await searchInput.fill(keyword);
    await searchButton.click();

    const resultStats = page.locator('#resultStats');
    await expect(resultStats).toBeVisible();
    const resultText = await resultStats.textContent();

    expect(resultText.length).toBeGreaterThan(10);
    expect(resultText).toContain(keyword);
  });
});
