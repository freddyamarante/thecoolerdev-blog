import '@/styles/globals.css'

import GradientBackground from '@/stories/components/GradientBackground'
import Experience from '@/stories/components/resources/Experience'
import GrainOverlay from '@/stories/components/resources/GrainOverlay'
import Navbar from '@/stories/components/Navbar/Navbar'

import { getLandingPage, getStatus } from '@/sanity/sanity-utils'
import Button from '@/stories/components/Button'
import Image from 'next/image'
import Service from '@/stories/components/AboutMe/Service'
import Skills from '@/stories/components/AboutMe/Skills'
import Toolkit from '@/stories/components/Toolkit/Toolkit'

export default async function Home() {
  const status = await getStatus()
  const data = await getLandingPage()

  return (
    <div className="overflow-hidden">
      <GrainOverlay zIndex="z-10" />
      <div className="fixed w-full px-2 sm:px-6 lg:px-10 pt-6 left-0 z-50">
        <Navbar
          name={status.name}
          active
          image={status.image}
          elements={['Who am I', 'Process', 'Projects', 'Blog', 'Contact']}
        />
      </div>
      <GradientBackground className="w-screen left-0 flex flex-col justify-center content-center h-screen">
        <Experience className="absolute h-full w-full top-0 left-0" />
        <div className="flex flex-col mx-2 lg:mx-16 xl:mx-64 gap-1 text-center z-10">
          <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            {data.hero.title}{' '}
            <span className="text-border text-transparent">
              {data.hero.highlight}
            </span>
          </h1>
          <div className="flex gap-2 md:gap-6 justify-center mt-6">
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
      <div className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-night text-white py-6 rounded-b-[45px] lg:rounded-b-[80px] text-center">
        {data.hero.dividerText}
      </div>

      <main className="relative flex flex-col mx-2 sm:mx-6 lg:mx-10">
        {/* About me */}
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-center items-center mt-6 lg:mt-20">
          <div className="w-full lg:w-[560px] h-[380px] md:h-[560px] lg:h-fit flex-shrink-0">
            <Image
              src={data.aboutMe.image}
              alt={data.aboutMe.title}
              width={550}
              height={775}
              className="w-full h-full object-center object-cover rounded-2xl"
            />
          </div>
          <div className="relative flex flex-col justify-center gap-4 lg:gap-16 z-10">
            <div className="flex flex-col gap-3 text-start lg:pr-32">
              <h2 className="flex flex-col text-4xl sm:text-6xl font-bold ">
                {data.aboutMe.title}
              </h2>
              <p className="text-xl sm:text-3xl font-normal">
                {data.aboutMe.body}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-12">
              {data.aboutMe.services.map((service, index) => (
                <Service
                  title={service.title}
                  key={index}
                  description={service.description}
                  body={service.body}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="my-6 lg:my-14">
          {data && (
            <Skills
              skills={data.aboutMe.skills}
              calibration={data.aboutMe.calibration}
            />
          )}
        </div>

        {/* Toolkit */}
        <Toolkit
          subtitle={data.toolkit.subtitle}
          subBody={data.toolkit.subBody}
          button={data.toolkit.button}
          tools={data.toolkit.tools}
        />
      </main>
    </div>
  )
}
