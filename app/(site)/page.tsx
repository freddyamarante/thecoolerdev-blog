import GradientBackground from '@/stories/components/GradientBackground'
import Experience from '@/stories/components/resources/Experience'

import '@/styles/globals.css'
import GrainOverlay from '@/stories/components/resources/GrainOverlay'
import Toolkit from '@/stories/components/Toolkit/Toolkit'

export default async function Home() {
  return (
    <div className="overflow-hidden">
      <GrainOverlay zIndex="z-10" />
      <GradientBackground className="flex flex-col justify-center h-screen">
        <Experience className="absolute h-full w-full top-0 left-0" />
        <h1 className="font-semibold text-8xl text-center text-cloud z-10">
          La madre del topo
        </h1>
      </GradientBackground>
      <div className="p-32">
        <Toolkit
          subtitle="My toolkit"
          subBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          button="Learn more"
          tools={[
            {
              title: 'JavaScript',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              image: null,
            },
            {
              title: 'React',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              image: null,
            },
            {
              title: 'Tailwind',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              image: null,
            },
            {
              title: 'TypeScript',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              image: null,
            },
          ]}
        />
      </div>
    </div>
  )
}
