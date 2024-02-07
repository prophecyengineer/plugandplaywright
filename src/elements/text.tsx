import { Page, expect } from "@playwright/test";

export async function getText(page: Page, text: string) {
  await expect(page.getByText(text, { exact: true })).toBeVisible();
}

export async function getTextPartialMatch(page: Page, text: string) {
  await expect(page.getByText(text)).toBeVisible();
}

export async function clickText(page: Page, text: string) {
  await page.getByText(text, { exact: true }).click();
  await page.waitForLoadState("load");
}

export async function clickTextPartialMatch(page: Page, text: string) {
  await page.getByText(text).click();
  await page.waitForLoadState("load");
}

export async function hoverText(page: Page, textName: string) {
  await page.getByText(textName, { exact: true }).hover();
}

export async function hoverTextPartialMatch(page: Page, textName: string) {
  await page.getByText(textName).hover();
}

export async function scrollToText(page: Page, textContent: string) {
  await page

    .getByText(textContent, {
      exact: true,
    })

    .scrollIntoViewIfNeeded();
}

export async function scrollToTextPartialMatch(
  page: Page,
  textContent: string
) {
  await page

    .getByText(textContent, {})

    .scrollIntoViewIfNeeded();
}
