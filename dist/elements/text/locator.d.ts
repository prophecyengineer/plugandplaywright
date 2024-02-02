import { Page } from "@playwright/test";
export declare function getText(page: Page, text: string): Promise<void>;
export declare function getTextPartialMatch(page: Page, text: string): Promise<void>;
