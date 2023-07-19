import '@/styles/globals.css'

import GradientBackground from '@/stories/components/GradientBackground'
import Experience from '@/stories/components/resources/Experience'
import GrainOverlay from '@/stories/components/resources/GrainOverlay'
import Navbar from '@/stories/components/Navbar/Navbar'

import { getLandingPage, getStatus } from '@/sanity/sanity-utils'
import Button from '@/stories/components/Button'
import Image from 'next/image'

export default async function Home() {
  const status = await getStatus()
  const data = await getLandingPage()

  return (
    <div className="overflow-hidden">
      <GrainOverlay zIndex="z-10" />
      <div className="fixed w-full px-16 pt-6 left-0 z-50">
        <Navbar
          name={status.name}
          active
          image={status.image}
          elements={['Who am I', 'Process', 'Projects', 'Blog', 'Contact']}
        />
      </div>
      <GradientBackground className="w-screen left-0 flex flex-col justify-center content-center h-screen">
        <Experience className="absolute h-full w-full top-0 left-0" />
        <div className="flex flex-col mx-64 gap-1 text-center z-10">
          <h1 className="font-black text-8xl leading-none">
            {data.hero.title}{' '}
            <span className="text-border text-transparent">
              {data.hero.highlight}
            </span>
          </h1>
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
      {/* Divider */}
      <div className="text-5xl font-bold bg-night text-white py-6 rounded-b-[80px] text-center">
        {data.hero.dividerText}
      </div>

      <main className="flex flex-col mx-12">
        {/* About me */}
        <section className="flex flex-row justify-center content-center mt-14">
          <div className="w-96 h-96">
            <Image
              src={data.aboutMe.image}
              alt={data.aboutMe.title}
              className="w-full h-full object-center object-cover rounded-2xl"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
