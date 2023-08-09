import '@/styles/globals.css'

import { getLandingPage, getPosts, getStatus } from '@/sanity/sanity-utils'

import GradientBackground from '@/stories/components/GradientBackground'
import GrainOverlay from '@/stories/components/resources/GrainOverlay'
import Experience from '@/stories/components/resources/Experience'
import Nav from '@/stories/components/Navbar/Nav'
import Button from '@/stories/components/Button'

import Service from '@/stories/components/AboutMe/Service'
import Skills from '@/stories/components/AboutMe/Skills'
import Toolkit from '@/stories/components/Toolkit/Toolkit'
import Steps from '@/stories/components/Process/Steps'
import PricingCard from '@/stories/components/Pricing/PricingCard'
import Posts from '@/stories/components/Blog/Posts'

import Image from 'next/image'
import Form from '@/stories/components/Contact/Form'
import Social from '@/stories/components/Contact/Social'

export default async function Home() {
  const status = await getStatus()
  const data = await getLandingPage()
  const posts = await getPosts()

  return (
    <div className="overflow-hidden">
      <GrainOverlay zIndex="z-10" />

      {/* Navbar */}
      <Nav
        name={status.name}
        active={status.active}
        image={status.image}
        elements={['Who am I', 'Process', 'Projects', 'Blog', 'Contact']}
      />

      <GradientBackground className="w-screen left-0 flex flex-col justify-center content-center h-screen">
        <Experience className="absolute h-full w-full top-0 left-0" />
        <div className="flex flex-col mx-2 lg:mx-16 xl:mx-64 gap-1 text-center z-10">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            {data.hero.title} <span className="">{data.hero.highlight}</span>
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
        <section className="flex flex-col xl:flex-row gap-10 lg:gap-16 justify-center items-center mt-10 lg:mt-20">
          <div className="w-full xl:basis-1/3 h-[480px] xl:h-full flex-shrink-0 ">
            <Image
              src={data.aboutMe.image}
              alt={data.aboutMe.title}
              width={550}
              height={775}
              className="w-full h-full object-center object-cover rounded-2xl ring-2 lg:ring-0 ring-night"
            />
          </div>
          <div className="relative flex flex-col lg:basis-2/3 justify-center gap-10 lg:gap-16 z-10">
            <div className="flex flex-col gap-3 text-start lg:pr-32">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                {data.aboutMe.title}
              </h2>
              <p className="text-xl lg:text-2xl xl:text-3xl font-normal">
                {data.aboutMe.body}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-8 lg:gap-y-12">
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

        {/* Skills divider */}
        <div className="my-10 lg:my-14">
          {data && (
            <Skills
              skills={data.aboutMe.skills}
              calibration={data.aboutMe.calibration}
            />
          )}
        </div>

        {/* Toolkit */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 z-10 mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold basis-1/3">
            {data.toolkit.title}
          </h2>
          <p className="text-xl lg:text-2xl xl:text-3xl basis-2/3">
            {data.toolkit.body}
          </p>
        </div>

        <Toolkit
          subtitle={data.toolkit.subtitle}
          subBody={data.toolkit.subBody}
          button={data.toolkit.button}
          tools={data.toolkit.tools}
        />

        {/* Process */}
        <section className="flex flex-col lg:flex-row gap-4 md:gap-7 xl:gap-10 my-10 lg:my-14">
          <GradientBackground
            radius={300}
            className="flex flex-col justify-center bg-taxi h-auto px-8 lg:px-12 py-10 lg:py-12 xl:py-0 rounded-2xl basis-1/3"
          >
            <div className="relative flex flex-col gap-6 z-10">
              <h2 className="font-bold text-4xl lg:text-3xl xl:text-4xl">
                {data.process.title}
              </h2>
              <p className="text-2xl lg:text-xl xl:text-2xl">
                {data.process.body}
              </p>
              <div className="flex justify-start">
                <Button mode="contrast" label={data.process.button} />
              </div>
            </div>
          </GradientBackground>
          <div className="basis-2/3 basis">
            <Steps steps={data.process.steps} />
          </div>
        </section>

        {/* Pricing */}
        <section className="flex flex-col h-fit lg:my-4 border-y-[30px] lg:border-y-[45px] border-night rounded-[30px] lg:rounded-[45px]">
          <GradientBackground
            radius={300}
            className="flex justify-center items-center w-full"
          >
            <div className="flex flex-col my-10 max-w-lg lg:max-w-4xl">
              <h2 className="relative text-4xl xl:text-5xl font-bold text-center px-6 lg:px-0 basis-1/4 z-10">
                {data.pricing.title}
              </h2>
              {data.pricing.prices && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-12 px-8 md:px-6 lg:px-8 basis-2/4 h-auto">
                  {data.pricing.prices.map((element) => (
                    <PricingCard
                      key={element.title}
                      title={element.title}
                      price={element.price}
                      description={element.description}
                      included={element.included}
                      highlight={element.highlight}
                    />
                  ))}
                </div>
              )}
              <span className="relative text-md lg:text-xl text-center px-8 lg:px-6 basis-1/4 z-10">
                {data.pricing.disclaimer}
              </span>
            </div>
          </GradientBackground>
        </section>

        {/* Blog */}
        <section className="h-fit my-10">
          <Posts
            title={data.blog.title}
            description={data.blog.description}
            button={data.blog.button}
            posts={posts}
          />
        </section>

        {/* Contact & Form */}
        <section className="flex flex-row gap-6 my-10">
          {/* Form */}
          <GradientBackground
            backgroundColor="#242423"
            gradientColor="#3E3E3D"
            className="flex flex-col px-8 lg:px-12 py-10 lg:py-12 w-full rounded-[45px]"
          >
            <div className="relative text-3xl text-center lg:text-4xl xl:text-5xl font-bold text-white leading-normal mb-8 z-10">
              Lets get in touch
            </div>
            <Form />
          </GradientBackground>

          {/* Contact */}
          <GradientBackground
            backgroundColor="#CFDBD5"
            gradientColor="#A5A5B6"
            className="flex flex-col px-8 lg:px-12 py-10 lg:py-12 w-full rounded-[45px]"
          >
            <div className="relative text-3xl text-center lg:text-4xl xl:text-5xl font-bold leading-normal mb-8 z-10">
              Check my socials
            </div>

            <div className="grid grid-cols-2 auto-cols-fr">
              <Social icon="twitter" />
              <Social icon="github" />
              <Social icon="linkedin" />
              <Social icon="cv" />
            </div>
          </GradientBackground>
        </section>
      </main>
    </div>
  )
}
