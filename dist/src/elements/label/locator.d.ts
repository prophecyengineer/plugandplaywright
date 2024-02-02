import { Page } from "@playwright/test";
export declare function getLabel(page: Page, text: string): Promise<void>;
export declare function getLabelPartialMatch(page: Page, text: string): Promise<void>;
