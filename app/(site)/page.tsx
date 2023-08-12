import '@/styles/globals.css'

import { getLandingPage, getPosts, getStatus } from '@/sanity/sanity-utils'

import GradientBackground from '@/stories/components/GradientBackground'
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
import Footer from '@/stories/components/Contact/Footer'

const Home = async () => {
  const status = await getStatus()
  const data = await getLandingPage()
  const posts = await getPosts()

  return (
    <div className="overflow-hidden bg-cloud">
      {/* Navbar */}
      <Nav name={status.name} active={status.active} image={status.image} />

      <GradientBackground className="w-screen left-0 flex flex-col justify-center content-center h-screen">
        <Experience className="absolute h-full w-full top-0 left-0" />
        <div className="flex flex-col mx-2 lg:mx-16 xl:mx-64 gap-1 text-center z-10">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            {data.hero.title} <span className="">{data.hero.highlight}</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 md:gap-6 justify-center items-center mt-6">
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
        <section
          id="aboutMe"
          className="flex flex-col xl:flex-row gap-10 lg:gap-16 justify-center items-center mt-10 lg:mt-14"
        >
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
        <div className="mt-10 lg:mt-14">
          {data && (
            <Skills
              skills={data.aboutMe.skills}
              calibration={data.aboutMe.calibration}
            />
          )}
        </div>

        {/* Toolkit */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 z-10 mt-10 lg:mt-14">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold basis-1/3">
            {data.toolkit.title}
          </h2>
          <p className="text-xl lg:text-2xl xl:text-3xl basis-2/3">
            {data.toolkit.body}
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <Toolkit
            subtitle={data.toolkit.subtitle}
            subBody={data.toolkit.subBody}
            button={data.toolkit.button}
            tools={data.toolkit.tools}
          />
        </div>

        {/* Process */}
        <section
          id="process"
          className="flex flex-col lg:flex-row gap-4 md:gap-7 xl:gap-10 mt-10 lg:mt-14"
        >
          <GradientBackground
            radius={200}
            className="flex flex-col justify-center bg-taxi h-auto px-8 lg:px-12 py-10 lg:py-12 rounded-2xl basis-1/3"
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
        <section
          id="process"
          className="flex flex-col h-fit mt-10 lg:mt-14 border-y-[30px] lg:border-y-[45px] border-night rounded-[30px] lg:rounded-[45px]"
        >
          <GradientBackground
            radius={100}
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
        <section id="blog" className="h-fit mt-10 lg:mt-14">
          <Posts
            title={data.blog.title}
            description={data.blog.description}
            button={data.blog.button}
            posts={posts}
          />
        </section>

        {/* Contact & Form */}
        <footer
          id="contact"
          className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-14"
        >
          <Footer />
        </footer>
      </main>
    </div>
  )
}

Home.theme = 'light'

export default Home
