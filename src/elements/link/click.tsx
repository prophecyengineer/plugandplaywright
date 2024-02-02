import { Page, expect } from "@playwright/test";

export async function clickLink(
  page: Page,
  linkName: string,
  specificSelector = ""
) {
  await eval(
    `page.getByRole("link", { name: "${linkName}",
 exact: true })${specificSelector && specificSelector}`
  ).click();

  await page.waitForLoadState("domcontentloaded");

  await page.waitForLoadState("domcontentloaded");
}
