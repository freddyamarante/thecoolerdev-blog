import DarkModeToggler from '@/stories/components/DarkModeToggler'
import { GrainyBackground } from '@/stories/components/GrainyBackground'

export default async function Home() {
  return (
    <>
      <div className="flex justify-center flex-col h-screen" style={{}}>
        <main className="text-8xl font-extrabold">
          <h1 className="text-night dark:text-cloud">The Cooler Dev</h1>
        </main>
        <DarkModeToggler />
        <GrainyBackground backgroundColor="#ff0000" gradientColor="#0000ff" />
      </div>
    </>
  )
}
