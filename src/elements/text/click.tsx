import { Page, expect } from "@playwright/test";

export async function clickText(page: Page, text: string) {
  await page.getByText(text, { exact: true }).click();
}

export async function clickTextPartialMatch(page: Page, text: string) {
  await page.getByText(text).click();
}
