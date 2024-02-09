import type { Config } from 'tailwindcss'
import {
  iconsPlugin,
  getIconCollections,
  dynamicIconsPlugin,
} from '@egoist/tailwindcss-icons'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'index-bg': `url('https://dustsun-1258663797.cos.ap-beijing.myqcloud.com/sora/bg.png')`,
      },
      fontFamily: {
        pinyonScript: ['var(--font-pinyonscript-regular)'],
        cursive: ['cursive'],
        // pangmenzhengdaocushuti: ['var(--font-pangmenzhengdaocushuti)'],
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections('all'),
    }),
    dynamicIconsPlugin(),
  ],
} satisfies Config

export default config
