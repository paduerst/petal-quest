import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Petal Quest' })).toBeVisible();
});

test('Dragon Builder loads expected default content', async ({ page }) => {
	await page.goto('/dragon-builder/');
	await expect(
		page.getByRole('heading', { name: 'Welcome to the Prismatic Dragon Builder!' })
	).toBeVisible();
});

test('Dragon Builder loads expected basic dragon content', async ({ page }) => {
	await page.goto('/dragon-builder/?age=adult&color=red&name=Val');
	await expect(page.getByRole('heading', { name: 'Val (Adult Red Dragon)' })).toBeVisible();
});
