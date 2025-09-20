import { expect } from '@playwright/test';

export async function login(page) {
  await page.goto('https://www.saucedemo.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
}