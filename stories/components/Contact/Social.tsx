'use client'

import { CV, Github, LinkedIn, Twitter } from '../resources/Icons'

interface SocialProps {
  icon: 'twitter' | 'github' | 'linkedin' | 'cv'
  label: string
  link?: string
}

const Social = ({ icon, link = '', label }: SocialProps) => {
  let chosenIcon: React.ReactNode
  let title: string

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
    case 'cv':
      chosenIcon = <CV />
      break
  }

  return (
    <div className="flex flex-row justify-between gap-2 border-2 border-night bg-transparent p-3 w-full rounded-2xl">
      <span className="font-semibold text-2xl">{label}</span>
      {chosenIcon}
    </div>
  )
}

export default Social
