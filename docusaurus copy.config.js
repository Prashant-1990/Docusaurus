// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorial Hub by Prashant',
  tagline: 'Step-by-step guides to help you learn effectively',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Show docs on root
          editUrl: 'https://github.com/Prashant-1990/docs-site/edit/main/',
        },
        blog: false, // disable blog
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
        content:
          '🚀 Welcome to the Tutorial Hub! Stay tuned for more tutorials.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
};

export default config;
