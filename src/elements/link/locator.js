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
exports.getLinkWithId = exports.getLinkHeadingPartialMatch = exports.getLinkHeading = exports.getLink = void 0;
const test_1 = require("@playwright/test");
function getLink(page, linkName, specificSelector = "") {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(eval(`page.getByRole("link", { name: "${linkName}",
 exact: true })${specificSelector && specificSelector}`)).toBeVisible();
    });
}
exports.getLink = getLink;
function getLinkHeading(page, headingText) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page
            .getByRole("heading", {
            name: headingText,
            exact: true,
        })
            .getByRole("link")).toBeVisible();
    });
}
exports.getLinkHeading = getLinkHeading;
function getLinkHeadingPartialMatch(page, headingText) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page
            .getByRole("heading", {
            name: headingText,
        })
            .getByRole("link")).toBeVisible();
    });
}
exports.getLinkHeadingPartialMatch = getLinkHeadingPartialMatch;
function getLinkWithId(page, locatorId, linkName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(page.locator(`#${locatorId}`).getByRole("link", {
            name: linkName,
            exact: true,
        })).toBeVisible();
    });
}
exports.getLinkWithId = getLinkWithId;
