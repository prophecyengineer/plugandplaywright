import { Page, expect } from "@playwright/test";

export async function clickHeading(
  page: Page,
  linkName: string,
  specificSelector = ""
) {
  await eval(
    `page.getByRole("heading", { name: "${linkName}",
 exact: true })${specificSelector && specificSelector}`
  ).click();

  await page.waitForLoadState("domcontentloaded");
}
