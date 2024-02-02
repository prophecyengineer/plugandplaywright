import { Page, expect } from "@playwright/test";

export async function scrollToThisLink(page: Page, name: string) {
  const elementToScrollTo = page.getByRole("link", {
    name: name,
    exact: true,
  });

  await elementToScrollTo.scrollIntoViewIfNeeded();
}
