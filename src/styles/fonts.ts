import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

export const MainFont = localFont({
  src: [
    {
      path: '../../public/fonts/Apex-Mk3-Medium.otf',
      weight: '500'
    }
  ],
  fallback: ['sans-serif'],
  display: 'swap',
  variable: '--font-main'
})

export const SecondaryFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '500'],
  fallback: ['sans-serif'],
  display: 'swap',
  variable: '--font-secondary'
})
