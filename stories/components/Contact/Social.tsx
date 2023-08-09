'use client'

import { CV, Email, Github, LinkedIn, Phone, Twitter } from '../resources/Icons'

interface SocialProps {
  icon: 'twitter' | 'github' | 'linkedin' | 'cv' | 'email' | 'phone'
  label: string
  link?: string
}

const Social = ({ icon, link = '', label }: SocialProps) => {
  let chosenIcon: React.ReactNode

  switch (icon) {
    case 'twitter':
      chosenIcon = <Twitter />
      break
    case 'github':
      chosenIcon = <Github />
      break
    case 'linkedin':
      chosenIcon = <LinkedIn />
      break
    case 'email':
      chosenIcon = <Email />
      break
    case 'phone':
      chosenIcon = <Phone />
      break
    case 'cv':
      chosenIcon = <CV />
      break
  }

  return (
    <a
      href={link}
      target={icon === 'email' || icon === 'phone' ? '' : '_blank'}
      className="flex flex-row justify-between items-center gap-2 border-2 border-night bg-transparent py-3 px-5 w-full rounded-2xl cursor-pointer"
    >
      <span className="font-semibold text-2xl">{label}</span>
      {chosenIcon}
    </a>
  )
}

export default Social
