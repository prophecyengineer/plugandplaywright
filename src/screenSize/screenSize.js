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
exports.isTabletScreen = exports.isMobileScreen = void 0;
function isMobileScreen(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewportSize = (yield page.viewportSize());
        const mobileScreenWidthMax = 768;
        return viewportSize.width <= mobileScreenWidthMax;
    });
}
exports.isMobileScreen = isMobileScreen;
function isTabletScreen(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewportSize = (yield page.viewportSize());
        const tabletScreenWidthMin = 769;
        // Minimum width for tablet screens
        const tabletScreenWidthMax = 1024;
        // Maximum width for tablet screens
        return (viewportSize.width >= tabletScreenWidthMin &&
            viewportSize.width <= tabletScreenWidthMax);
    });
}
exports.isTabletScreen = isTabletScreen;
