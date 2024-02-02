import { Page } from "@playwright/test";
export declare function getButton(page: Page, buttonName: string): Promise<void>;
export declare function getButtonPartialMatch(page: Page, buttonName: string): Promise<void>;
