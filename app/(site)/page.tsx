import GradientBackground from '@/stories/components/GradientBackground'
import Experience from '@/stories/components/Experience'

import '@/styles/globals.css'
import GrainOverlay from '@/stories/components/GrainOverlay'

export default async function Home() {
  return (
    <>
      <GrainOverlay zIndex="z-10" />
      <GradientBackground
        size="small"
        className="flex flex-col justify-center h-screen"
      >
        <Experience className="absolute h-full w-full top-0 left-0" />
        <h1 className="font-semibold text-8xl text-center text-cloud z-10">
          La madre del topo
        </h1>
      </GradientBackground>
    </>
  )
}
