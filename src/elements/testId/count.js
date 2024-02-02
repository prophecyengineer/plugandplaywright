"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkElementCountByTestIdIsMoreThanOrEqualToX = exports.checkElementCountByTestIdIsNotMoreThanX = exports.getElementCountByTestId = void 0;
const test_1 = require("@playwright/test");
function getElementCountByTestId(page, testId, expectedCount) {
    return __awaiter(this, void 0, void 0, function* () {
        const elements = page.locator(`[data-testid="${testId}"]`);
        const actualCount = yield elements.count();
        try {
            (0, test_1.expect)(actualCount).toBe(expectedCount);
        }
        catch (error) {
            throw new Error(`Error in testId "${testId}":
 Expected count: ${expectedCount}, but received:
${actualCount}`);
        }
    });
}
exports.getElementCountByTestId = getElementCountByTestId;
function checkElementCountByTestIdIsNotMoreThanX(page, testId, expectedMaximumCount) {
    return __awaiter(this, void 0, void 0, function* () {
        const elements = page.locator(`[data-testid="${testId}"]`);
        const actualCount = yield elements.count();
        try {
            (0, test_1.expect)(actualCount).toBeLessThanOrEqual(expectedMaximumCount);
        }
        catch (error) {
            throw new Error(`Error in testId "${testId}":
 Expected count: ${expectedMaximumCount}, but received:
${actualCount}`);
        }
    });
}
exports.checkElementCountByTestIdIsNotMoreThanX = checkElementCountByTestIdIsNotMoreThanX;
function checkElementCountByTestIdIsMoreThanOrEqualToX(page, testId, expectedMinimumCount) {
    return __awaiter(this, void 0, void 0, function* () {
        const elements = page.locator(`[data-testid="${testId}"]`);
        const actualCount = yield elements.count();
        try {
            (0, test_1.expect)(actualCount).toBeGreaterThanOrEqual(expectedMinimumCount);
        }
        catch (error) {
            throw new Error(`Error in testId "${testId}":
 Expected count: ${expectedMinimumCount}, but received:
${actualCount}`);
        }
    });
}
exports.checkElementCountByTestIdIsMoreThanOrEqualToX = checkElementCountByTestIdIsMoreThanOrEqualToX;
