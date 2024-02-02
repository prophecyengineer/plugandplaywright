import { Page, expect } from "@playwright/test";

export async function getSearchBarByPlaceholder(
  page: Page,
  placeholder: string
) {
  await expect(page.getByPlaceholder(placeholder)).toBeVisible();
}
