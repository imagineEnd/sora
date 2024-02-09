export interface IHomePageMenu {
  icon: string
  type: 'reload' | 'private' | 'link' | 'email'
  url?: string
  email?: string
}

export const HOME_PAGE_MENUS: IHomePageMenu[] = [
  {
    icon: 'i-mdi-home',
    type: 'reload',
  },
  {
    icon: 'i-mdi-book-open-blank-variant-outline',
    type: 'private',
  },
  {
    icon: 'i-mdi-github',
    type: 'link',
    url: 'https://github.com/laNuitBlanche',
  },
  // {
  //   icon: 'i-mdi-wechat',
  //   type: 'img',
  //   url: 'https://github.com/laNuitBlanche',
  // },
  {
    icon: 'i-mdi-email-outline',
    type: 'email',
    email: '496981163@qq.com',
  },
  {
    icon: 'i-mdi-emoticon-outline',
    type: 'private',
  },
]
