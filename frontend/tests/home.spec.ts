import { test, expect } from '@playwright/test';

test('la page d\'accueil se charge correctement', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/K Beauty Academy/);
});

test('le header contient les liens de navigation', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.getByRole('link', { name: /Accueil/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Formations/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /À propos/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Contact/ })).toBeVisible();
});
