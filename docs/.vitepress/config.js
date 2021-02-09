const { resolve } = require('path');

const base = process.env.NODE_ENV === 'production' ? '/vue-use' : '';

module.exports = {
  title: 'vue-use',
  description: 'vue hooks',
  outDir: '../dist',
  base,
  themeConfig: {
    lang: 'zh-CN',
    lastUpdated: '最近更新',
    repo: 'dewfall123/vue-use',
    repoLabel: 'Github',
    prevLink: true,
    nextLink: true,
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'vue-use',
        description: 'vue hooks',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '指南', link: '/' },
        ],
        sidebar: [
          {
            text: '介绍',
            link: '/',
          },
          {
            text: 'State',
            children: [
              {
                text: 'toggle',
                link: '/hooks/use-toggle/'
              }
            ]
          }
        ]
      },
    },
  },
};
