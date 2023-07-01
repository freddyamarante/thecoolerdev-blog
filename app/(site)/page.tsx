import DarkModeToggler from '@/stories/components/DarkModeToggler'
import { GradientBackground } from '@/stories/components/GradientBackground'

import '@/styles/globals.css'

export default async function Home() {
  return (
    <>
      <div
        className={`absolute grain-background top-0 left-0 h-[12000px] w-full pointer-events-none opacity-50`}
      ></div>
      <GradientBackground className="flex flex-col justify-center h-screen"></GradientBackground>
      <div className="h-screen flex justify-center items-center gap-x-6">
        <GradientBackground
          backgroundColor="#FF0000"
          gradientColor="#0000FF"
          size="extralarge"
          className="h-96 w-72"
        ></GradientBackground>
        <GradientBackground
          backgroundColor="#00FF00"
          gradientColor="#242423"
          size="extralarge"
          className="h-96 w-72"
        ></GradientBackground>
        <GradientBackground
          backgroundColor="#FFFF00"
          gradientColor="#FF00FF"
          size="extralarge"
          className="h-96 w-72"
        ></GradientBackground>
      </div>
    </>
  )
}
