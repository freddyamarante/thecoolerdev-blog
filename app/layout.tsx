import './tailwind.css'
import { Roboto } from 'next/font/google'
import Providers from './providers'

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
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
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
