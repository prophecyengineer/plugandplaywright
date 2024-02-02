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
exports.getExactText = exports.getText = void 0;
const test_1 = require("@playwright/test");
function getText(page, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.getByText(text)).toBeVisible();
    });
}
exports.getText = getText;
function getExactText(page, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.getByText(text, { exact: true })).toBeVisible();
    });
}
exports.getExactText = getExactText;
