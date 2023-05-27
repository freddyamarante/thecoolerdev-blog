'use client'
import { useTheme } from 'next-themes'

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
      className="flex items-center justify-center h-56 w-56 p-4 font-bold dark:bg-cloud bg-night dark:text-night text-cloud"
    >
      {currentTheme === 'dark' ? 'D' : 'L'}
    </button>
  )
}

export default DarkModeToggler
