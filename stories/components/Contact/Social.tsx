'use client'

import { motion } from 'framer-motion'

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
    <motion.a
      href={link}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      target={icon === 'email' || icon === 'phone' ? '' : '_blank'}
      className="flex flex-row justify-between items-center gap-2 border-2 border-night bg-transparent hover:bg-violet py-3 px-5 w-full rounded-2xl cursor-pointer"
    >
      <span className="font-semibold text-xl md:text-2xl">{label}</span>
      {chosenIcon}
    </motion.a>
  )
}

export default Social
