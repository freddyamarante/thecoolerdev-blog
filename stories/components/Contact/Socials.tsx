'use client'

import Social from './Social'

const Socials = () => {
  return (
    <div className="flex flex-col gap-4">
      <Social
        icon="twitter"
        label="Follow me"
        link="https://twitter.com/thecoolerdev"
      />
      <Social
        icon="github"
        label="Check my repositories"
        link="https://github.com/freddyamarante"
      />
      <Social
        icon="linkedin"
        label="Connect with me"
        link="https://www.linkedin.com/in/freddy-amarante/"
      />
      <Social icon="phone" label="Give me a call" link="tel:+584125498540" />
      <Social
        icon="email"
        label="Send me an email"
        link="mailto:freddyamarante14@gmail.com"
      />
      <Social
        icon="cv"
        label="Read my CV"
        link="https://drive.google.com/file/d/1OiGBCJnTgniK4pBsehECLIOlUYF09WGb/view?usp=sharing"
      />
    </div>
  )
}

export default Socials
