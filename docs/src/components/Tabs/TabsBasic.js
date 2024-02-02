"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsBasic = void 0;
const react_1 = __importDefault(require("react"));
const Tabs_1 = __importDefault(require("@theme/Tabs"));
const TabItem_1 = __importDefault(require("@theme/TabItem"));
const CodeBlock_1 = __importDefault(require("@theme/CodeBlock"));
const TabsBasic = ({ Tab1Label, Tab1Content, Tab2Label, Tab2Content, Tab3Label, Tab3Content, }) => {
    return (react_1.default.createElement(Tabs_1.default, { defaultValue: "Tab1Content", values: [
            { label: Tab1Label, value: "Tab1Content" },
            { label: Tab2Label, value: "Tab2Content" },
            { label: Tab3Label, value: "Tab3Content" },
        ] },
        react_1.default.createElement(TabItem_1.default, { value: "Tab1Content" },
            react_1.default.createElement(CodeBlock_1.default, { language: "bash" }, Tab1Content)),
        react_1.default.createElement(TabItem_1.default, { value: "Tab2Content" },
            react_1.default.createElement(CodeBlock_1.default, { language: "bash" }, Tab2Content)),
        react_1.default.createElement(TabItem_1.default, { value: "Tab3Content" },
            react_1.default.createElement(CodeBlock_1.default, { language: "bash" }, Tab3Content))));
};
exports.TabsBasic = TabsBasic;
