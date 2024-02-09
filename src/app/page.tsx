'use client'
import { HOME_PAGE_MENUS, IHomePageMenu } from '@/config/page'

export default function Home() {
  function onMenuTap(item: IHomePageMenu) {
    switch (item.type) {
      case 'private':
        window.alert('暂未开放')
        break
      case 'link':
        window.open(item.url)
        break
      case 'email':
        window.location.href = `mailto:${item.email}`
        break
      case 'reload':
        window.location.reload()
        break
      default:
        break
    }
  }

  return (
    <div className="bg-index-bg w-screen h-screen bg-cover bg-no-repeat relative flex justify-center items-center">
      <div className="text-white flex flex-col items-center">
        <span className="font-pinyonScript text-6xl">Sora</span>
        <span className="text-4xl mt-6 font-cursive font-thin text-center">
          生活原本沉闷 但跑起来就有风
        </span>
        {/* i-mdi-home */}
        {/* i-mdi-book-open-blank-variant-outline */}
        {/* i-mdi-github */}
        {/* i-mdi-email-outline */}
        {/* i-mdi-emoticon-outline */}
        <ul className="flex items-center justify-between mt-12">
          {HOME_PAGE_MENUS.map((item, index) => {
            return (
              <li key={item.icon}>
                <span
                  className={`${item.icon} text-3xl cursor-pointer ${
                    index === HOME_PAGE_MENUS.length - 1 ? '' : 'mr-12'
                  }`}
                  onClick={onMenuTap.bind(null, item)}
                ></span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
