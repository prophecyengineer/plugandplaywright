import { Page, expect } from "@playwright/test";

export async function clickButton(page: Page, buttonName: string) {
  await page

    .getByRole("button", {
      name: buttonName,

      exact: true,
    })

    .click();
}
