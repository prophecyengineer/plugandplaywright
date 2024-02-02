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
exports.getTestIdRadioNotChecked = exports.getTestIdRadioIsChecked = exports.getTestIdWithClass = exports.getTestIdIsHidden = exports.getAllTestIdElementsWithText = exports.getTestIdElementWithText = exports.getTestIdText = exports.getTestId = void 0;
const test_1 = require("@playwright/test");
function getTestId(page, id, specificSelector = "") {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(eval(`page.getByTestId(${id}${specificSelector && specificSelector}`)).toBeVisible();
    });
}
exports.getTestId = getTestId;
function getTestIdText(page, id, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.getByTestId(id)).toHaveText(text);
    });
}
exports.getTestIdText = getTestIdText;
function getTestIdElementWithText(page, id, expectedText) {
    return __awaiter(this, void 0, void 0, function* () {
        const element = page.locator(`[data-testid="${id}"]`);
        const textContent = (yield element.textContent()) || "no text was found :(";
        const isTextMatching = textContent.trim() === expectedText;
        yield (0, test_1.expect)(isTextMatching, `Text does not match for element. Expected: "${expectedText}",
 but found: "${textContent.trim()}"`).toBeTruthy();
    });
}
exports.getTestIdElementWithText = getTestIdElementWithText;
function getAllTestIdElementsWithText(page, id, expectedTexts) {
    return __awaiter(this, void 0, void 0, function* () {
        const elements = page.locator(`[data-testid="${id}"]`);
        const count = yield elements.count();
        for (let i = 0; i < count; i++) {
            const element = elements.nth(i);
            const textContent = (yield element.textContent()) || "no text was found :(";
            const isTextMatching = textContent.trim() === expectedTexts[i];
            yield (0, test_1.expect)(isTextMatching, `Text does not match for element at index
${i}. Expected: "${expectedTexts[i]}", but found: "${textContent.trim()}"`).toBeTruthy();
        }
    });
}
exports.getAllTestIdElementsWithText = getAllTestIdElementsWithText;
function getTestIdIsHidden(page, id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.getByTestId(id)).toBeHidden();
    });
}
exports.getTestIdIsHidden = getTestIdIsHidden;
function getTestIdWithClass(page, id, className) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.getByTestId(id)).toHaveClass(className);
    });
}
exports.getTestIdWithClass = getTestIdWithClass;
function getTestIdRadioIsChecked(page, id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.getByTestId(id)).toBeChecked();
    });
}
exports.getTestIdRadioIsChecked = getTestIdRadioIsChecked;
function getTestIdRadioNotChecked(page, id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.getByTestId(id)).not.toBeChecked();
    });
}
exports.getTestIdRadioNotChecked = getTestIdRadioNotChecked;
