'use client'

import { CV, Github, LinkedIn, Twitter } from '../resources/Icons'

interface SocialProps {
  icon: 'twitter' | 'github' | 'linkedin' | 'cv'
  link?: string
}

const Social = ({ icon, link = '' }: SocialProps) => {
  let chosenIcon: React.ReactNode
  let title: string

  switch (icon) {
    case 'twitter':
      chosenIcon = <Twitter />
      title = 'Follow me'
      break
    case 'github':
      chosenIcon = <Github />
      title = 'Check my repositories'
      break
    case 'linkedin':
      chosenIcon = <LinkedIn />
      title = 'Connect with me'
      break
    case 'cv':
      chosenIcon = <CV />
      title = 'Read my CV'
      break
  }

  return (
    <div className="flex flex-row gap-2 border-2 border-night bg-transparent p-3 w-fit rounded-2xl">
      {chosenIcon}
      <span className="font-semibold text-2xl">{title}</span>
    </div>
  )
}

export default Social
