import { Page } from "@playwright/test";
export declare function hoverLink(page: Page, linkName: string): Promise<void>;
export declare function hoverLinkPartialMatch(page: Page, linkName: string): Promise<void>;
