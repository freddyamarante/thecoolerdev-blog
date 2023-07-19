import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import Providers from './providers'

const inter = Inter({
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
      <body className={`${inter.className} text-night-dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
