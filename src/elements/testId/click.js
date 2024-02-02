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
exports.clickTestIdWithText = exports.clickTestId = void 0;
function clickTestId(page, testId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield page.getByTestId(testId).click();
    });
}
exports.clickTestId = clickTestId;
function clickTestIdWithText(page, testId, text) {
    return __awaiter(this, void 0, void 0, function* () {
        const elements = page.locator(`[data-testid="${testId}"]`);
        // 📝 Note: must find all elements and match text to particular one
        const count = yield elements.count();
        for (let i = 0; i < count; i++) {
            const element = elements.nth(i);
            const textContent = (yield element.textContent()) || "no text content found :(";
            if (textContent.trim() === text) {
                yield element.click();
                return;
            }
        }
        console.error(`No element found with data-testid "${testId}"
 and text "${text}"`);
    });
}
exports.clickTestIdWithText = clickTestIdWithText;
