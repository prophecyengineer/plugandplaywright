import { Page, expect } from "@playwright/test";

export async function clickTestId(page: Page, testId: string) {
  await page.getByTestId(testId).click();
}

export async function clickTestIdWithText(
  page: Page,
  testId: string,
  text: string
) {
  const elements = page.locator(`[data-testid="${testId}"]`);
  // 📝 Note: must find all elements and match text to particular one

  const count = await elements.count();

  for (let i = 0; i < count; i++) {
    const element = elements.nth(i);

    const textContent =
      (await element.textContent()) || "no text content found :(";

    if (textContent.trim() === text) {
      await element.click();

      return;
    }
  }

  console.error(
    `No element found with data-testid "${testId}"
 and text "${text}"`
  );
}
