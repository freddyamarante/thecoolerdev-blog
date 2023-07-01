import DarkModeToggler from '@/stories/components/DarkModeToggler'
import { GrainyBackground } from '@/stories/components/GrainyBackground'

export default async function Home() {
  return (
    <>
      <GrainyBackground className="flex flex-col justify-center h-screen"></GrainyBackground>
      <div className="h-screen flex justify-center items-center gap-x-6">
        <GrainyBackground
          backgroundColor="#FF0000"
          gradientColor="#0000FF"
          size="extralarge"
          className="h-96 w-72"
        ></GrainyBackground>
        <GrainyBackground
          backgroundColor="#00FF00"
          gradientColor="#242423"
          size="extralarge"
          className="h-96 w-72"
        ></GrainyBackground>
        <GrainyBackground
          backgroundColor="#FFFF00"
          gradientColor="#FF00FF"
          size="extralarge"
          className="h-96 w-72"
        ></GrainyBackground>
      </div>
    </>
  )
}
