import DarkModeToggler from '@/stories/components/DarkModeToggler'
import { GrainyBackground } from '@/stories/components/GrainyBackground'

export default async function Home() {
  return (
    <>
      <div className="flex justify-center flex-col h-screen">
        <GrainyBackground></GrainyBackground>
      </div>
    </>
  )
}
