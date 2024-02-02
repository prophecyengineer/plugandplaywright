import { Page, expect } from "@playwright/test";

export async function getTestId(page: Page, id: string, specificSelector = "") {
  await expect(
    eval(`page.getByTestId(${id}${specificSelector && specificSelector}`)
  ).toBeVisible();
}

export async function getTestIdText(page: Page, id: string, text: string) {
  await expect(page.getByTestId(id)).toHaveText(text);
}

export async function getTestIdElementWithText(
  page: Page,
  id: string,
  expectedText: string
) {
  const element = page.locator(`[data-testid="${id}"]`);

  const textContent = (await element.textContent()) || "no text was found :(";

  const isTextMatching = textContent.trim() === expectedText;

  await expect(
    isTextMatching,

    `Text does not match for element. Expected: "${expectedText}",
 but found: "${textContent.trim()}"`
  ).toBeTruthy();
}

export async function getAllTestIdElementsWithText(
  page: Page,
  id: string,
  expectedTexts: string[]
) {
  const elements = page.locator(`[data-testid="${id}"]`);

  const count = await elements.count();

  for (let i = 0; i < count; i++) {
    const element = elements.nth(i);

    const textContent = (await element.textContent()) || "no text was found :(";

    const isTextMatching = textContent.trim() === expectedTexts[i];

    await expect(
      isTextMatching,
      `Text does not match for element at index
${i}. Expected: "${expectedTexts[i]}", but found: "${textContent.trim()}"`
    ).toBeTruthy();
  }
}

export async function getTestIdIsHidden(page: Page, id: string) {
  await expect(page.getByTestId(id)).toBeHidden();
}

export async function getTestIdWithClass(
  page: Page,
  id: string,
  className: string
) {
  await expect(page.getByTestId(id)).toHaveClass(className);
}

export async function getTestIdRadioIsChecked(page: Page, id: string) {
  await expect(page.getByTestId(id)).toBeChecked();
}

export async function getTestIdRadioNotChecked(page: Page, id: string) {
  await expect(page.getByTestId(id)).not.toBeChecked();
}
