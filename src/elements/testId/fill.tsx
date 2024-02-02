import { Page, expect } from "@playwright/test";

export async function fillIdWithText(page: Page, id: string, fill: string) {
  await page.getByTestId(id).fill(fill);
}
