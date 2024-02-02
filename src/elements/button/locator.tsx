import { Page, expect } from "@playwright/test";

export async function getButton(page: Page, buttonName: string) {
  await expect(
    page.getByRole("button", {
      name: buttonName,

      exact: true,
    })
  ).toBeVisible();
}

export async function getButtonPartialMatch(page: Page, buttonName: string) {
  await expect(
    page.getByRole("button", {
      name: buttonName,
    })
  ).toBeVisible();
}
