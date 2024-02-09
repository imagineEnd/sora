import './globals.css'
import Script from 'next/script'
import localFont from 'next/font/local'
import RotateLoading from '@/components/ui/rotate-loading/rotate-loading'
import type { Metadata } from 'next'

const pinyonScriptFont = localFont({
  src: '../../public/PinyonScript-Regular.woff2',
  display: 'swap',
  variable: '--font-pinyonscript-regular',
})

// const pangMenZhangDaoCuShuTi = localFont({
//   src: '../../public/PangMenZhengDaoCuShuTi.ttf',
//   display: 'swap',
//   variable: '--font-pangmenzhengdaocushuti',
// })

export const metadata: Metadata = {
  title: 'Sora',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  function endLoading() {
    const loadingEl = document.querySelector('.rotate-loading')
    if (!loadingEl || loadingEl.className.includes('rotate-loading--loaded'))
      return
    loadingEl.classList.add('rotate-loading--loaded')
  }

  return (
    <html lang="en">
      <body className={`${pinyonScriptFont.variable}`}>
        <RotateLoading />
        <main>{children}</main>

        <Script id="hide-loading" strategy="beforeInteractive">
          {`window.addEventListener('load', ${endLoading})`}
        </Script>
      </body>
    </html>
  )
}
