'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({
  children,
  theme,
  forceTheme = false,
}: {
  children: React.ReactNode
  theme: 'light' | 'dark'
  forceTheme?: boolean
}) => {
  return (
    <ThemeProvider
      defaultTheme={theme}
      forcedTheme={forceTheme ? theme : undefined}
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers
