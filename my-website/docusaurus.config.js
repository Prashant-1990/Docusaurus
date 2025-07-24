// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Getting Started With Docusaurus',
  tagline: 'Step-by-step guides to help you learn effectively',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://Prashant-1990.github.io',
  baseUrl: '/Docusaurus/',

  organizationName: 'Prashant-1990',
  projectName: 'Docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/', // Docs are served at root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Prashant-1990/docs-site/edit/main/',

          // ✅ Versioning config
          lastVersion: 'current',
          versions: {
            current: {
              label: '2.0',
              // Avoid setting a custom `path` unless necessary
              // path: '3.0', // optional
            },
          },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Tutorial Hub',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown', // ✅ Adds version dropdown
            position: 'right',
          },
          {
            href: 'https://github.com/Prashant-1990',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Prashant-1990',
              },
              {
                label: 'Contact',
                href: 'mailto:prashant@example.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Created by Prashant Mathapathi.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash'],
      },
      announcementBar: {
        id: 'support_us',
        content: '🚀 Welcome to the Tutorial Hub! Stay tuned for more tutorials.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
};

export default config;
