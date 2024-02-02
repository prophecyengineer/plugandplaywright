import { TabsBasic } from "../src/components/Tabs/TabsBasic";

# Installation 🔌

Embark on a seamless testing journey with `PlugAndPlaywright`. Envision a world where every test is a direct connection to success, where code flows like electricity through circuits, energizing your automation tasks with precision and ease.

Are you ready to harness the power of Playwright and infuse it with the simplicity of plug-and-play? Let's gear up for an automation experience that's both electrifying and smooth.

## 🚀 Quick Setup

<TabsBasic
Tab1Label="npm" Tab1Content={`npm i plugandplaywright`}
Tab2Label="yarn" Tab2Content={`yarn add plugandplaywright`}
Tab3Label="pnpm" Tab3Content={`pnpm add plugandplaywright`}/>

Make sure your environment is charged with Playwright:

<TabsBasic
Tab1Label="npm" Tab1Content={`npm init playwright@latest`}
Tab2Label="yarn" Tab2Content={`yarn create playwright`}
Tab3Label="pnpm" Tab3Content={`pnpm create playwright`}/>

# 🎭 Basic Connections

`PlugAndPlaywright` powers up your testing framework with intuitive commands like getText, getHeading, and clickLink, enabling you to navigate and interact with your web pages as smoothly as plugging into an outlet.

```jsx
import { test, expect } from "@playwright/test";
import { getText, getHeading, clickLink } from "plugandplaywright";

test("Connect with the DOM", async ({ page }) => {
  await page.goto("https://your-target-website.com/");

  // Engage with your elements effortlessly
  await getText(page, "Element detected");
  await getHeading(page, "Welcome, user");
  await clickLink(page, "Proceed to the next page");
});
```

## 💡 Advanced Integration

Elevate your testing with the comprehensive capabilities of PlugAndPlaywright. Our documentation is the perfect toolkit to mastering the craft of seamless automation.

Step into the world of PlugAndPlaywright, where every line of code ensures a perfect fit with your applications, guaranteeing that your testing is as effective as it is straightforward. Are you prepared to experience the ultimate in plug-and-play efficiency?
