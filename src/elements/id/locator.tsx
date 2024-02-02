import { Page, expect } from "@playwright/test";

export async function getIdLink(
  page: Page,
  locatorId: string,
  linkName: string
) {
  await expect(
    page.locator(`#${locatorId}`).getByRole("link", {
      name: linkName,

      exact: true,
    })
  ).toBeVisible();
}
