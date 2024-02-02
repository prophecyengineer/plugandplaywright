import { Page, expect } from "@playwright/test";

export async function getTableCellText(page: Page, cellName: string) {
  await expect(
    page.getByRole("cell", {
      name: cellName,
      exact: true,
    })
  ).toBeVisible();
}
