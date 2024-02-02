import { Page, expect } from "@playwright/test";

export async function getElementCountByTestId(
  page: Page,
  testId: string,
  expectedCount: number
) {
  const elements = page.locator(`[data-testid="${testId}"]`);

  const actualCount = await elements.count();

  try {
    expect(actualCount).toBe(expectedCount);
  } catch (error) {
    throw new Error(
      `Error in testId "${testId}":
 Expected count: ${expectedCount}, but received:
${actualCount}`
    );
  }
}

export async function checkElementCountByTestIdIsNotMoreThanX(
  page: Page,
  testId: string,
  expectedMaximumCount: number
) {
  const elements = page.locator(`[data-testid="${testId}"]`);

  const actualCount = await elements.count();

  try {
    expect(actualCount).toBeLessThanOrEqual(expectedMaximumCount);
  } catch (error) {
    throw new Error(
      `Error in testId "${testId}":
 Expected count: ${expectedMaximumCount}, but received:
${actualCount}`
    );
  }
}

export async function checkElementCountByTestIdIsMoreThanOrEqualToX(
  page: Page,

  testId: string,

  expectedMinimumCount: number
) {
  const elements = page.locator(`[data-testid="${testId}"]`);

  const actualCount = await elements.count();

  try {
    expect(actualCount).toBeGreaterThanOrEqual(expectedMinimumCount);
  } catch (error) {
    throw new Error(
      `Error in testId "${testId}":
 Expected count: ${expectedMinimumCount}, but received:
${actualCount}`
    );
  }
}
