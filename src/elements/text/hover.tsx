import { Page, expect } from "@playwright/test";

export async function hoverText(page: Page, textName: string) {
  await page.getByText(textName, { exact: true }).hover();
}

export async function hoverTextPartialMatch(page: Page, textName: string) {
  await page.getByText(textName).hover();
}
