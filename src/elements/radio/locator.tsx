import { Page, expect } from "@playwright/test";

export async function getRadioTestIdIsChecked(page: Page, id: string) {
  await expect(page.getByTestId(id)).toBeChecked();
}

export async function getRadioTestIdNotChecked(page: Page, id: string) {
  await expect(page.getByTestId(id)).not.toBeChecked();
}
