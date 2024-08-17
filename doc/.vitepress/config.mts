import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoneBotGUI 官方文档",
  head: [
    ['link', { rel: 'icon', href: '/icon/icon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '官方网站', link: 'https://nbgui.top' },
      { text: 'API', link: 'https://api.nbgui.top/api' },

    ],
    footer: {
      message: 'Released under the GPL3 License.',
      copyright: 'by 【夜风】NightWind'
    },
    sidebar: [
      {
        text: '开始之前',
        items: [
          { text: '你需要知道的一些事', link: '/before/before-start' },
          { text: '安装依赖', link: '/before/install-dependencies.md' },
          { text: '赞助', link: '/before/donate.md' }
        ]
      },
      {
        text: '使用',
        items: [
          { text: '创建 Bot', link: '/guide/create-bot.md' },
          { text: '导入 Bot', link: '/guide/import-bot.md' },
          { text: '常用操作', link: '/guide/operate.md' },

        ]
      },
      {
        text: '常见问题处理',
        items: [
          { text: '无法加载商店内容', link: '/issues/无法加载商店内容.md' },
          { text: '控制台内容无法正常显示', link: '/issues/控制台内容无法正常显示.md' },
          { text: '主页无法正常刷新', link: '/issues/主页无法正常刷新.md' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NonebotGUI/nonebot-flutter-gui' }
    ]
  }
})
