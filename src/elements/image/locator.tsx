import { Page, expect } from "@playwright/test";

export async function getImage(page: Page, altText: string) {
  await expect(
    page.getByAltText(altText, {
      exact: true,
    })
  ).toBeVisible();
}
