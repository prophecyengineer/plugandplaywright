import { Page, expect } from "@playwright/test";

export async function commonBeforeEach(page: Page, url: string) {
  await page.context().clearCookies();

  await page.goto(url);

  await page.waitForLoadState("domcontentloaded");
}

export async function beforeEachAcceptCookies(page: Page, url: string) {
  await page.context().clearCookies();

  await page.goto(url);

  await page.getByRole("button", { name: "Accept All Cookies" }).click();

  await page.waitForLoadState("domcontentloaded");
}
