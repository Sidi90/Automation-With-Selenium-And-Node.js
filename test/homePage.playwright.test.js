const { test, expect } = require('@playwright/test');

test.describe('Google search automated testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com/ncr', { waitUntil: 'domcontentloaded' });
  });

  test('find the input box and google search button', async ({ page }) => {
    const searchInput = page.locator('textarea[name="q"], input[name="q"]').first();
    const searchButton = page.locator('input[name="btnK"]').first();

    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeEnabled();
    await expect(searchButton).toBeVisible();
  });

  test('put keyword in search box and submit search', async ({ page }) => {
    const keyword = `playwright e2e ${Date.now()}`;
    const searchInput = page.locator('textarea[name="q"], input[name="q"]').first();

    await searchInput.fill(keyword);
    await searchInput.press('Enter');

    await expect(page).toHaveURL(/\/search\?/);
    await expect(page.locator('#search')).toBeVisible();

    const searchParam = new URL(page.url()).searchParams.get('q');
    expect(searchParam).toContain(keyword);
  });
});
