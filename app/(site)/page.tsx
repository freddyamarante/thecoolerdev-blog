import '@/styles/globals.css'

import GradientBackground from '@/stories/components/GradientBackground'
import Experience from '@/stories/components/resources/Experience'
import GrainOverlay from '@/stories/components/resources/GrainOverlay'
import Navbar from '@/stories/components/Navbar/Navbar'

import { getLandingPage, getStatus } from '@/sanity/sanity-utils'
import Button from '@/stories/components/Button'

export default async function Home() {
  const status = await getStatus()
  const data = await getLandingPage()

  return (
    <div className="flex flex-col mx-12 overflow-hidden">
      <GrainOverlay zIndex="z-10" />
      <div className="fixed w-full px-16 pt-6 left-0 z-50">
        <Navbar
          name={status.name}
          active
          image={status.image}
          elements={['Who am I', 'Process', 'Projects', 'Blog', 'Contact']}
        />
      </div>
      <GradientBackground className="absolute w-screen left-0 flex flex-col justify-center content-center h-screen">
        <Experience className="absolute h-full w-full top-0 left-0 " />
        <div className="flex flex-col mx-64 gap-1 text-center z-10">
          <h1 className="font-black text-8xl leading-none">
            {data.hero.title}{' '}
            <span className="text-border text-transparent">
              {data.hero.highlight}
            </span>
          </h1>
          <p className="font-normal text-2xl px-16">{data.hero.dividerText}</p>
          <div className="flex gap-6 justify-center mt-6">
            <Button
              label={data.hero.callToAction}
              mode="contrast"
              size="extralarge"
            />
            <Button
              label={data.hero.secondButton}
              mode="simple"
              size="extralarge"
            />
          </div>
        </div>
      </GradientBackground>
    </div>
  )
}
