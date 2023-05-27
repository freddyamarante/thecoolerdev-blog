'use client'

import { Button } from '@/stories/Button'

export default function Home() {
  const saySomething = () => console.log('ayo')
  return (
    <>
      <main className="text-8xl font-extrabold">
        <h1>Moises Ortega</h1>
      </main>
      <Button
        primary
        size="large"
        label="Just a regular button"
        onClick={saySomething}
      />
    </>
  )
}
