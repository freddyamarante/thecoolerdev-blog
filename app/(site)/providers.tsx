'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({
  children,
  theme,
}: {
  children: React.ReactNode
  theme: 'light' | 'dark'
}) => {
  return <ThemeProvider forcedTheme={theme}>{children}</ThemeProvider>
}

export default Providers
