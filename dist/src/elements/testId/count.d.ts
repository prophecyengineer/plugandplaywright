import { Page } from "@playwright/test";
export declare function getElementCountByTestId(page: Page, testId: string, expectedCount: number): Promise<void>;
export declare function checkElementCountByTestIdIsNotMoreThanX(page: Page, testId: string, expectedMaximumCount: number): Promise<void>;
export declare function checkElementCountByTestIdIsMoreThanOrEqualToX(page: Page, testId: string, expectedMinimumCount: number): Promise<void>;
