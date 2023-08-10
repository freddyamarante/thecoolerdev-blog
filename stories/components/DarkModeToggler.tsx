'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { Moon, Sun } from './resources/Icons'

const DarkModeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const toggleDarkMode = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      onClick={toggleDarkMode}
      className="flex items-center justify-center h-8 w-8 rounded-full font-bold border-2 border-night-dark dark:border-white dark:text-white text-night-dark"
    >
      {currentTheme === 'dark' ? <Moon /> : <Sun />}
    </motion.button>
  )
}

export default DarkModeToggler
