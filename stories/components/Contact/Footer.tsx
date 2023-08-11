'use client'

import GradientBackground from '../GradientBackground'
import Form from './Form'
import Socials from './Socials'

const Footer = () => {
  return (
    <>
      {/* Form */}
      <GradientBackground
        backgroundColor="#242423"
        gradientColor="#3E3E3D"
        className="px-8 lg:px-12 py-10 lg:py-12 w-full rounded-[45px]"
      >
        <div className="relative text-3xl text-center lg:text-4xl xl:text-5xl font-bold text-white leading-normal mb-8 z-10">
          Send me a message
        </div>
        <div className="my-auto">
          <Form />
        </div>
      </GradientBackground>

      {/* Contact */}
      <GradientBackground
        backgroundColor="#CFDBD5"
        gradientColor="#A5A5B6"
        className="px-8 lg:px-12 py-10 lg:py-12 w-full rounded-[45px]"
      >
        <div className="relative text-3xl text-center lg:text-4xl xl:text-5xl font-bold leading-normal mb-8 z-10">
          Lets get in touch
        </div>

        <Socials />
      </GradientBackground>
    </>
  )
}

export default Footer
