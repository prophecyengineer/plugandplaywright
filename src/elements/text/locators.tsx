import { Page, expect } from "@playwright/test";

export async function getText(page: Page, text: string) {
  await expect(page.getByText(text)).toBeVisible();
}

export async function getExactText(page: Page, text: string) {
  await expect(page.getByText(text, { exact: true })).toBeVisible();
}
