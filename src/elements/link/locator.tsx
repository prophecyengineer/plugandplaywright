import { Page, expect } from "@playwright/test";

export async function getLink(
  page: Page,
  linkName: string,
  specificSelector = ""
) {
  await expect(
    eval(
      `page.getByRole("link", { name: "${linkName}",
 exact: true })${specificSelector && specificSelector}`
    )
  ).toBeVisible();
}

export async function getLinkHeading(page: Page, headingText: string) {
  await expect(
    page

      .getByRole("heading", {
        name: headingText,

        exact: true,
      })

      .getByRole("link")
  ).toBeVisible();
}

export async function getLinkHeadingPartialMatch(
  page: Page,
  headingText: string
) {
  await expect(
    page

      .getByRole("heading", {
        name: headingText,
      })

      .getByRole("link")
  ).toBeVisible();
}

export async function getLinkWithId(
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
