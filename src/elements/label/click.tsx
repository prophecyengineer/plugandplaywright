import { Page, expect } from "@playwright/test";

export async function clickLabel(page: Page, labelName: string) {
  await page.getByLabel(labelName).click();
}
