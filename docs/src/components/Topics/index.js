"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const Heading_1 = __importDefault(require("@theme/Heading"));
const styles_module_css_1 = __importDefault(require("./styles.module.css"));
const Link_1 = __importDefault(require("@docusaurus/Link"));
const react_1 = __importDefault(require("react"));
const topicList = [
    {
        title: "Text",
        path: "/docs/getting-started/text",
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG40N2cxOWg2cXNrMWx2NHlwdGF0bzg2ejF6Mjc2dmpnZHgzczRodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R3IxJW14a3QNa/giphy.gif",
    },
    {
        title: "Heading",
        path: "/docs/getting-started/heading",
        image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTh5aHZjcWY2OXF6NnZvaG0zandra2ZkNDI1bG9zb2h2NWQ5a3UydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bAftZ12SC0uEjLndIh/giphy.gif",
    },
    {
        title: "Image",
        path: "/docs/getting-started/image",
        image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGUwaTJicHJjbHVvb2p0bzNoZnN3aXpwN3BtbXN5d3VsanV6NTJ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PpFJcG4y8HqsxQumz/giphy.gif",
    },
    {
        title: "Link",
        path: "/docs/getting-started/image",
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFwYzNzcm5zMHRrYmd4NHRkc2MycHd5d3h4a2VyOWVlaHpjbDFxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UaqqArAD8OLQgOpfxY/giphy.gif",
    },
    {
        title: "Button",
        path: "/docs/Topics/React/",
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3RzeXM0YmQ0MGl2d2V0cXRuN3d4YTd1YnpzZHFsZHI3MW5reDJveiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehOWm8vxKMcZeEvveE/giphy.gif",
    },
    {
        title: "AI",
        path: "/docs/Topics/AI",
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3U0OTBma2FxeTlycGV2dWttMGx2YW5manB1Y3M0bDlrdW1yeW10ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IZY2SE2JmPgFG/giphy.gif",
    },
];
function Topic({ title, image, path }) {
    return (react_1.default.createElement(Link_1.default, { href: path, className: (0, clsx_1.default)("col col--3") },
        react_1.default.createElement("div", { className: `feature-padding` },
            react_1.default.createElement("div", { className: "text--center" },
                react_1.default.createElement("img", { className: "topic-image", src: image })),
            react_1.default.createElement("div", { className: "text--center padding-horiz--md" },
                react_1.default.createElement(Heading_1.default, { as: "h3" }, title)))));
}
function TopicList() {
    return (react_1.default.createElement("section", { className: styles_module_css_1.default.featuresTopics },
        react_1.default.createElement("div", { className: "container " },
            react_1.default.createElement("div", { className: "row" }, topicList.map((props, idx) => (react_1.default.createElement(Topic, Object.assign({ key: idx }, props))))))));
}
exports.default = TopicList;
