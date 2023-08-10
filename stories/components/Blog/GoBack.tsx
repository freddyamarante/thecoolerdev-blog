'use client'

import { motion } from 'framer-motion'

import { ChevronLeft } from '../resources/Icons'

const GoBack = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center self-center h-8 w-8 text-xl text-night-dark dark:text-white hover:dark:text-night-dark bg-transparent hover:dark:bg-white border-2 border-night-dark dark:border-white rounded-full"
    >
      <ChevronLeft />
    </motion.div>
  )
}

export default GoBack
