import { Page, expect } from "@playwright/test";

export async function getLabel(page: Page, text: string) {
  await expect(page.getByLabel(text, { exact: true })).toBeVisible();
}

export async function getLabelPartialMatch(page: Page, text: string) {
  await expect(page.getByLabel(text)).toBeVisible();
}
