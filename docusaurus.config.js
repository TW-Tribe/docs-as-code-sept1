// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TWT Documentation',
  tagline: 'Guides, References, and Resources',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Update these values when you publish to GitHub Pages.
  url: 'https://your-username.github.io',
  baseUrl: '/docs-as-code-sept1/',

  organizationName: 'your-username',
  projectName: 'docs-as-code-sept1',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Documentation Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/your-username/docs-as-code-sept1',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Documentation',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-username/docs-as-code-sept1',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Documentation.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;