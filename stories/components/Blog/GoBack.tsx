'use client'

import { motion } from 'framer-motion'

import { ChevronLeft } from '../resources/Icons'

const GoBack = ({ label: string = 'GoBack' }) => {
  return (
    <motion.div className="flex flex-row justify-center items-center gap-2 leading-none bg-transparent hover:bg-violet border-2 border-night w-fit p-3 rounded-lg">
      <ChevronLeft />
      <span>All articles</span>
    </motion.div>
  )
}

export default GoBack
