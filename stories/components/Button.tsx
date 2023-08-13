'use client'

import { ArrowRight } from './resources/Icons'
import { motion } from 'framer-motion'

type ButtonProps = {
  mode?: 'primary' | 'contrast' | 'simple'
  size?: 'small' | 'medium' | 'large' | 'extralarge'
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

const Button = ({
  mode = 'primary',
  size = 'large',
  label,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {
  let modeClasses: string = mode

  switch (mode) {
    case 'primary':
      modeClasses = 'bg-taxi text-night-dark'
      break
    case 'contrast':
      modeClasses = 'bg-night-dark hover:bg-night text-white'
      break
    case 'simple':
      modeClasses = 'bg-transparent text-night-dark border-2 border-night'
      break
  }

  let sizeClasses: string = size
  let iconSize: number = 0

  switch (size) {
    case 'extralarge':
      sizeClasses = 'text-2xl lg:text-3xl p-2 md:p-3'
      iconSize = 20
      break
    case 'large':
      sizeClasses = 'text-xl lg:text-2xl p-2'
      iconSize = 18
      break
    case 'medium':
      sizeClasses = 'ttext-lg lg:text-xl p-2'
      iconSize = 14
      break
    case 'small':
      sizeClasses = 'text-md lg:text-lg p-2'
      iconSize = 10
      break
  }

  return (
    <motion.button
      type={type}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      disabled={disabled}
      className={`flex flex-row w-fit rounded-lg justify-center items-center leading-none gap-1 ${modeClasses} ${sizeClasses}`}
      {...props}
    >
      {label}
      <ArrowRight size={iconSize} />
    </motion.button>
  )
}

export default Button
