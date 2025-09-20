import { test, expect } from '@playwright/test';
import { login } from './login.js';

test('add to cart and checkout', async ({ page }) => {
  await login(page);

// add to cart

  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

//checkout

await page.locator('[data-test="checkout"]').click();
await page.goto('https://www.saucedemo.com/checkout-step-one.html', { waitUntil: 'domcontentloaded', timeout: 15000,});
await page.locator('[data-test="firstName"]').click();
await page.locator('[data-test="firstName"]').fill('Charles');
await page.locator('[data-test="lastName"]').click();
await page.locator('[data-test="lastName"]').fill('Reserva');
await page.locator('[data-test="postalCode"]').click();
await page.locator('[data-test="postalCode"]').fill('1235');
await page.locator('[data-test="continue"]').click();
await page.goto('https://www.saucedemo.com/checkout-step-two.html', { waitUntil: 'domcontentloaded', timeout: 30000,});
await page.locator('[data-test="finish"]').click();
await page.goto('https://www.saucedemo.com/checkout-complete.html', { waitUntil: 'domcontentloaded', timeout: 30000,});
 });