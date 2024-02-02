import { Page } from "@playwright/test";
export declare function getTestId(page: Page, id: string, specificSelector?: string): Promise<void>;
export declare function getTestIdText(page: Page, id: string, text: string): Promise<void>;
export declare function getTestIdElementWithText(page: Page, id: string, expectedText: string): Promise<void>;
export declare function getAllTestIdElementsWithText(page: Page, id: string, expectedTexts: string[]): Promise<void>;
export declare function getTestIdIsHidden(page: Page, id: string): Promise<void>;
export declare function getTestIdWithClass(page: Page, id: string, className: string): Promise<void>;
export declare function getTestIdRadioIsChecked(page: Page, id: string): Promise<void>;
export declare function getTestIdRadioNotChecked(page: Page, id: string): Promise<void>;
