'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

import { LazyMotion, domMax } from 'framer-motion'

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <LazyMotion features={domMax}>
      <NextThemeProvider {...props}>{children}</NextThemeProvider>
    </LazyMotion>
  )
}

export default Providers
