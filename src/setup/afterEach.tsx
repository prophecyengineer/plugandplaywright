import { Page, expect } from "@playwright/test";

export async function commonAfterEach(page: Page) {
  const context = page.context();

  const allPages = context.pages();

  for (const extraPage of allPages) {
    if (extraPage !== page) {
      await extraPage.close();
    }
  }
}
