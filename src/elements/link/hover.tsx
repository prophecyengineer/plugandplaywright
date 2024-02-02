import { Page, expect } from "@playwright/test";

export async function hoverLink(page: Page, linkName: string) {
  await page
    .getByRole("link", {
      name: linkName,
      exact: true,
    })
    .hover();
}

export async function hoverLinkPartialMatch(page: Page, linkName: string) {
  await page
    .getByRole("link", {
      name: linkName,
    })
    .hover();
}
