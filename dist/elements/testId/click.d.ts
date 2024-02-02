import { Page } from "@playwright/test";
export declare function clickTestId(page: Page, testId: string): Promise<void>;
export declare function clickTestIdWithText(page: Page, testId: string, text: string): Promise<void>;
