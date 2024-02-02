import { Page, expect } from "@playwright/test";

export async function scrollToThisText(page: Page, textContent: string) {
  await page

    .getByText(textContent, {
      exact: true,
    })

    .scrollIntoViewIfNeeded();
}
