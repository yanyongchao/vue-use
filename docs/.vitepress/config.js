const { resolve } = require('path');

const base = process.env.NODE_ENV === 'production' ? '/vue-use' : '';

module.exports = {
  title: 'vue-use',
  description: 'vue hooks',
  outDir: '../dist',
  base,
  alias: {
    // 把demo 文件引用指向正确地址
    [`vue-use`]: resolve('./src')
  },
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
            text: 'SideEffect',
            children: [
              {
                text: 'useDebounce',
                link: '/hooks/use-debounce/'
              },
              {
                text: 'useDebounceFn',
                link: '/hooks/use-debounce-fn/'
              },
              {
                text: 'useThrottle',
                link: '/hooks/use-throttle/'
              },
              {
                text: 'useThrottleFn',
                link: '/hooks/use-throttle-fn/'
              }
            ]
          },
          {
            text: 'State',
            children: [
              {
                text: 'toggle',
                link: '/hooks/use-toggle/'
              },
              {
                text: 'useCookieState',
                link: '/hooks/use-cookie-state/'
              },
              {
                text: 'useLocalStorageState',
                link: '/hooks/use-local-storage-state/'
              },
              {
                text: 'useSessionStorageState',
                link: '/hooks/use-session-storage-state/'
              },
            ]
          }
        ]
      },
    },
  },
};
