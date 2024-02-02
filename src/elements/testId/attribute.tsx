import { Page, expect } from "@playwright/test";

export async function getTestIdWithAttribute(
  page: Page,
  id: string,
  attribute1: string,
  attribute2: string
) {
  await expect(page.getByTestId(id)).toHaveAttribute(attribute1, attribute2);
}
