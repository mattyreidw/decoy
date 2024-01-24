import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'

const mainFont = localFont({
  src: './fonts/ABCRepro-Regular.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Decoy',
  description: 'Decoy is a design and development studio based in Idaho. We build websites that are progressive, engaging and enduring.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
