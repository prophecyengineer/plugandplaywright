import { Page } from "@playwright/test";
export declare function getLink(page: Page, linkName: string, specificSelector?: string): Promise<void>;
export declare function getLinkHeading(page: Page, headingText: string): Promise<void>;
export declare function getLinkHeadingPartialMatch(page: Page, headingText: string): Promise<void>;
export declare function getLinkWithId(page: Page, locatorId: string, linkName: string): Promise<void>;
