'use client'

import { Button } from '@/stories/Button'
import DarkModeToggler from '@/stories/DarkModeToggler'

export default function Home() {
  const saySomething = () => console.log('ayo')
  return (
    <div className="flex justify-center flex-col">
      <main className="text-8xl font-extrabold">
        <h1 className="text-night dark:text-cloud">Moises Ortega</h1>
      </main>
      <Button
        primary
        size="large"
        label="Just a regular button"
        onClick={saySomething}
      />
      <DarkModeToggler />
    </div>
  )
}
