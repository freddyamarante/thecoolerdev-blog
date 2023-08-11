import '@/styles/globals.css'

import { IBM_Plex_Sans } from 'next/font/google'

import Providers from '../providers'

const IBMPlexSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'The Cooler Dev',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${IBMPlexSans.className} text-night-dark`}>
        <Providers theme="light">{children}</Providers>
      </body>
    </html>
  )
}
