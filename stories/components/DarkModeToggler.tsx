'use client'
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
    <button
      type="button"
      onClick={toggleDarkMode}
      className="flex items-center justify-center h-8 w-8 rounded-full font-bold dark:bg-cloud bg-night dark:text-night text-cloud"
    >
      {currentTheme === 'dark' ? <Moon /> : <Sun />}
    </button>
  )
}

export default DarkModeToggler
