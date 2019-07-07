/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "天天安利",
  tagline: "the api docs of ttanli.com",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  themeConfig: {
    navbar: {
      title: "天天安利",
      logo: {
        alt: "ttanli.com Logo",
        src: "img/logo.png"
      },
      links: [
        { to: "docs/doc1", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/ttanli",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/doc1"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            }
          ]
        }
      ],
      logo: {
        alt: "TTanli Logo",
        src: "img/logo.png"
      },
      copyright: `Copyright © 2019 -- ${new Date().getFullYear()} ttanli.com`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        pages: {
          path: "src/pages"
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.json")
        },
        theme: {
          customCss: require.resolve("./src/assets/css/custom.css")
        }
      }
    ]
  ]
};
