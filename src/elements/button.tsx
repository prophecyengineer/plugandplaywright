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

export async function clickButton(page: Page, buttonName: string) {
  await page

    .getByRole("button", {
      name: buttonName,
      exact: true,
    })
    .click();
  await page.waitForLoadState("load");
}

export async function clickButtonPartialMatch(page: Page, buttonName: string) {
  await page
    .getByRole("button", {
      name: buttonName,
    })

    .click();
  await page.waitForLoadState("load");
}

export async function hoverButton(page: Page, buttonName: string) {
  await page

    .getByRole("button", {
      name: buttonName,
      exact: true,
    })
    .hover();
}

export async function hoverButtonPartialMatch(page: Page, buttonName: string) {
  await page
    .getByRole("button", {
      name: buttonName,
    })

    .hover();
}

export async function scrollToButton(page: Page, buttonName: string) {
  await page

    .getByRole("button", {
      name: buttonName,
      exact: true,
    })

    .scrollIntoViewIfNeeded();
}

export async function scrollToButtonPartialMatch(
  page: Page,
  buttonName: string
) {
  await page

    .getByRole("button", {
      name: buttonName,
    })

    .scrollIntoViewIfNeeded();
}
