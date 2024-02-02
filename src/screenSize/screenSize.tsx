import { Page, expect } from "@playwright/test";

export async function isMobileScreen(page: Page) {
  const viewportSize = (await page.viewportSize()) as {
    width: number;
    height: number;
  };

  const mobileScreenWidthMax = 768;

  return viewportSize.width <= mobileScreenWidthMax;
}

export async function isTabletScreen(page: Page) {
  const viewportSize = (await page.viewportSize()) as {
    width: number;
    height: number;
  };

  const tabletScreenWidthMin = 769;
  // Minimum width for tablet screens

  const tabletScreenWidthMax = 1024;
  // Maximum width for tablet screens

  return (
    viewportSize.width >= tabletScreenWidthMin &&
    viewportSize.width <= tabletScreenWidthMax
  );
}
