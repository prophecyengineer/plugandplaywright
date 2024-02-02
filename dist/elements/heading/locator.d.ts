import { Page } from "@playwright/test";
export declare function getHeading(page: Page, headingText: string): Promise<void>;
export declare function getHeadingPartialMatch(page: Page, headingText: string): Promise<void>;
export declare function getHeadingLink(page: Page, headingText: string): Promise<void>;
