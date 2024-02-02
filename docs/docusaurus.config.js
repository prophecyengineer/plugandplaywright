"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prism_react_renderer_1 = require("prism-react-renderer");
const config = {
    title: 'Welcome to the ForePlaywright Sensation!',
    tagline: 'Simpler, sexier testing with Playwright. Easily memorised and maintained. ',
    favicon: 'img/logo.png',
    // Set the production url of your site here
    url: 'https://plugandplaywright.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'plugandplaywright', // Usually your GitHub org/user name.
    projectName: 'plugandplaywright', // Usually your repo name.
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    sidebarCollapsed: false,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   // Remove this to remove the "edit this page" links.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
        ],
    ],
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'plugandplaywright',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Get Started 🔌',
                },
                { to: '/docs/getting-started/installation', label: 'Installation 🔌', position: 'left' },
                {
                    href: 'https://github.com/lottie-logic/foreplaywright.com',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        // footer: {
        //   style: 'dark',
        //   links: [
        //     {
        //       title: 'Docs',
        //       items: [
        //         {
        //           label: 'Tutorial',
        //           to: '/docs/intro',
        //         },
        //       ],
        //     },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        //     {
        //       title: 'More',
        //       items: [
        //         // {
        //         //   label: 'Blog',
        //         //   to: '/blog',
        //         // },
        //         {
        //           label: 'GitHub',
        //           href: 'https://github.com/lottie-logic/foreplaywright',
        //         },
        //       ],
        //     },
        //   ],
        //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        // },
        prism: {
            theme: prism_react_renderer_1.themes.github,
            darkTheme: prism_react_renderer_1.themes.dracula,
        },
    },
};
exports.default = config;
