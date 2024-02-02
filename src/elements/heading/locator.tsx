import { Page, expect } from "@playwright/test";

export async function getHeading(page: Page, headingText: string) {
  await expect(
    page.getByRole("heading", {
      name: headingText,
      exact: true,
    })
  ).toBeVisible();
}

export async function getHeadingPartialMatch(page: Page, headingText: string) {
  await expect(
    page.getByRole("heading", {
      name: headingText,
    })
  ).toBeVisible();
}

export async function getHeadingLink(page: Page, headingText: string) {
  await expect(
    page

      .getByRole("heading", {
        name: headingText,

        exact: true,
      })

      .getByRole("link")
  ).toBeVisible();
}
