import DarkModeToggler from '@/stories/components/DarkModeToggler'
import GradientBackground from '@/stories/components/GradientBackground'
import Experience from '@/stories/components/Experience'

import '@/styles/globals.css'

export default async function Home() {
  return (
    <>
      <GradientBackground
        size="small"
        className="flex flex-col justify-center h-screen"
      >
        <Experience className="absolute h-full w-full top-0 left-0" />
      </GradientBackground>
    </>
  )
}
