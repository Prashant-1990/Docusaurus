// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Getting Started With Docusaurus',
  tagline: 'Step-by-step guides to help you learn effectively',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://docusaurus-tutorials.netlify.app',
  baseUrl: '/',
  projectName: 'Docusaurus Tutorials',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '13EDC903DD7AC00C',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        hashed: true,
        docsRouteBasePath: '/',  // adjust if your docs are not at root
        language: 'en',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Prashant-1990/docs-site/edit/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '2.0',
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

      algolia: {
        appId: 'ZRMZHNHP89',
        apiKey: '9ef0a19b3ce2266a5b9e3511c38840ae',
        indexName: 'docusarus_netlify_app_zrmzhnhp89_pages',
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
      },

      navbar: {
        title: 'Tutorial Hub',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
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

module.exports = config;
