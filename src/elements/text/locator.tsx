import { Page, expect } from "@playwright/test";

export async function getText(page: Page, text: string) {
  await expect(page.getByText(text, { exact: true })).toBeVisible();
}

export async function getTextPartialMatch(page: Page, text: string) {
  await expect(page.getByText(text)).toBeVisible();
}
