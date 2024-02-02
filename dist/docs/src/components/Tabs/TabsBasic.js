"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsBasic = void 0;
var react_1 = __importDefault(require("react"));
var Tabs_1 = __importDefault(require("@theme/Tabs"));
var TabItem_1 = __importDefault(require("@theme/TabItem"));
var CodeBlock_1 = __importDefault(require("@theme/CodeBlock"));
var TabsBasic = function (_a) {
    var Tab1Label = _a.Tab1Label, Tab1Content = _a.Tab1Content, Tab2Label = _a.Tab2Label, Tab2Content = _a.Tab2Content, Tab3Label = _a.Tab3Label, Tab3Content = _a.Tab3Content;
    return (react_1.default.createElement(Tabs_1.default, { defaultValue: "Tab1Content" },
        react_1.default.createElement(TabItem_1.default, { label: Tab1Label, value: "Tab1Content" },
            react_1.default.createElement(CodeBlock_1.default, { language: "bash" }, Tab1Content)),
        react_1.default.createElement(TabItem_1.default, { label: Tab2Label, value: "Tab2Content" },
            react_1.default.createElement(CodeBlock_1.default, { language: "bash" }, Tab2Content)),
        react_1.default.createElement(TabItem_1.default, { label: Tab3Label, value: "Tab3Content" },
            react_1.default.createElement(CodeBlock_1.default, { language: "bash" }, Tab3Content))));
};
exports.TabsBasic = TabsBasic;
